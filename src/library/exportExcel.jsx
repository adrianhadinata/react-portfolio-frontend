import { saveAs } from "file-saver";
import { Workbook } from "exceljs";

export default async function exportExcel(table, title) {
  const workBook = new Workbook();
  const workSheet = workBook.addWorksheet("Data");

  const lastHeaderGroup = table.getHeaderGroups().at(-1);
  console.log("lastHeaderGroup", lastHeaderGroup);

  if (!lastHeaderGroup) {
    console.log("Error, lastHeaderGroup not found", lastHeaderGroup);
    return;
  }

  workSheet.columns = lastHeaderGroup.headers
    .filter((header) => header.column.getIsVisible())
    .map((header) => {
      return {
        header: header.column.columnDef.header,
        key: header.id,
        width: 20,
      };
    });

  console.log(workSheet);

  table.getCoreRowModel().rows.forEach((row) => {
    const cells = row.getVisibleCells();
    const values = cells.map((cell) => {
      return cell.getValue() ?? "";
    });
    console.log("table values", values);
    workSheet.addRow(values);
  });

  workSheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });

  workSheet.getColumn("D").eachCell((cell, rowNumber) => {
    if (rowNumber > 1) {
      workSheet.getCell(cell.address).value = {
        text: workSheet.getCell(cell.address).value,
        hyperlink: workSheet.getCell(cell.address).value,
        tooltip: workSheet.getCell(cell.address).value,
      };
    }
  });

  const buffer = await workBook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: "application/vnd.ms.excel" });

  saveAs(blob, title + ".xlsx");
}
