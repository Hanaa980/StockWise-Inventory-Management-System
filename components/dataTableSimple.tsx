
"use client"

import * as React from "react"
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {

  columnVisibilityFeature,
  createColumnHelper,
  createPaginatedRowModel,
  FlexRender,
  rowPaginationFeature,
  rowSelectionFeature,
  tableFeatures,
  useTable,
  type ColumnDef,
  type Row,
} from "@tanstack/react-table"
import { GripVerticalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type RowWithId = {
  id: string | number
  [key: string]: unknown
}

const features = tableFeatures({

  columnVisibilityFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  paginatedRowModel: createPaginatedRowModel(),
})

function DragHandle({ id }: { id: UniqueIdentifier }) {
  const { attributes, listeners } = useSortable({ id })

  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="size-7"
      aria-label="Drag to reorder"
    >
      <GripVerticalIcon className="size-4" />
    </Button>
  )
}

function DraggableRow<TData extends RowWithId>({
  row,
}: {
  row: Row<typeof features, TData>
}) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  })

  return (
    <TableRow
      ref={setNodeRef}
      data-dragging={isDragging}
      className="data-[dragging=true]:opacity-70"
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          <FlexRender cell={cell} />
        </TableCell>
      ))}
    </TableRow>
  )
}

type DataTableProps<TData extends RowWithId> = {
  data: TData[]
}

export function DataTableSimple<TData extends RowWithId>({
  data: initialData,
}: DataTableProps<TData>) {
  const [data, setData] = React.useState(initialData)
  const [rowSelection, setRowSelection] = React.useState({})
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const columnHelper = createColumnHelper<typeof features, TData>()

  const columns = React.useMemo(() => {
    const firstRow = data[0]
    if (!firstRow) return []

    const generatedColumns = Object.keys(firstRow).map((key) =>
      columnHelper.accessor((row) => row[key], {
        id: key,
        header: key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (letter) => letter.toUpperCase()),
        cell: (info) => String(info.getValue() ?? ""),
      }),
    )

    return columnHelper.columns([
      columnHelper.display({
        id: "drag",
        header: () => null,
        cell: ({ row }) => <DragHandle id={row.original.id} />,
      }),
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(checked) =>
              table.toggleAllPageRowsSelected(!!checked)
            }
            aria-label="Select all rows"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(checked) => row.toggleSelected(!!checked)}
            aria-label="Select row"
          />
        ),
        // enableSorting: false,
        enableHiding: false,
      }),
      ...generatedColumns,
    ])
  }, [data])

  const sortableId = React.useId()
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  )

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data.map((row) => row.id),
    [data],
  )

  const table = useTable({
    features,
    data,
    columns,
    state: {
      rowSelection,
      pagination,
    },
    getRowId: (row) => String(row.id),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
  })

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (!over || active.id === over.id) return

    setData((currentData) => {
      const oldIndex = currentData.findIndex(
        (row) => row.id === active.id,
      )
      const newIndex = currentData.findIndex(
        (row) => row.id === over.id,
      )

      if (oldIndex < 0 || newIndex < 0) return currentData
      return arrayMove(currentData, oldIndex, newIndex)
    })
  }

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-lg border">
      <div className="w-full min-w-0 overflow-x-auto">
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
          sensors={sensors}
          id={sortableId}
        >
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : (
                        <FlexRender header={header} />
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {table.getRowModel().rows.length ? (
                <SortableContext
                  items={dataIds}
                  strategy={verticalListSortingStrategy}
                >
                  {table.getRowModel().rows.map((row) => (
                    <DraggableRow key={row.id} row={row} />
                  ))}
                </SortableContext>
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </DndContext>
      </div>

      <div className="flex items-center justify-between gap-4 p-4">
        <span className="text-sm text-muted-foreground">
          Page {pagination.pageIndex + 1} of {table.getPageCount()}
        </span>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}