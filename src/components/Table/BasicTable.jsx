import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useState } from "react";
import { RoundedButton } from "../../components";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

export default function BasicTable({ data, columns }) {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });
  return (
    <div className="">
      <div className="container_search-table">
        <p className="p-text">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()} (total :{" "}
          {table.getFilteredRowModel().rows.length} data)
        </p>
        <div>
          <label htmlFor="searchBox">Search: </label>
          <input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            id="searchBox"
          />
        </div>
      </div>

      <div className="w3-responsive container_table">
        <table className="w3-table-all w3-large w3-hoverable">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      { asc: "arrow_up", desc: "arrow_down" }[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container_btn-table">
        <RoundedButton
          act={() => table.setPageIndex(0)}
          title={"Go to first page"}
          icon={<HiChevronDoubleLeft></HiChevronDoubleLeft>}
        ></RoundedButton>
        <RoundedButton
          act={() => table.previousPage()}
          title={"Go to previous page"}
          icon={<HiChevronLeft></HiChevronLeft>}
          isDisabled={!table.getCanPreviousPage()}
        ></RoundedButton>
        <RoundedButton
          act={() => table.nextPage()}
          title={"Go to next page"}
          icon={<HiChevronRight></HiChevronRight>}
          isDisabled={!table.getCanNextPage()}
        ></RoundedButton>
        <RoundedButton
          act={() => table.setPageIndex(table.getPageCount() - 1)}
          title={"Go to last page"}
          icon={<HiChevronDoubleRight></HiChevronDoubleRight>}
        ></RoundedButton>
      </div>
    </div>
  );
}
