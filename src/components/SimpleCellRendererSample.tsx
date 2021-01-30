import { ColDef, GridOptions, ICellRendererComp } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import React from "react";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";

const columnDefs: ColDef[] = [
  { field: "athlete" },
  { field: "country" },
  { field: "year", width: 100 },
  { field: "gold", width: 100, cellRenderer: "medalCellRenderer" },
  { field: "silver", width: 100, cellRenderer: "medalCellRenderer" },
  { field: "bronze", width: 100, cellRenderer: "medalCellRenderer" },
  { field: "total", width: 100 },
];

// cell renderer class
function MedalCellRenderer() {}

// init method gets the details of the cell to be renderer
MedalCellRenderer.prototype.init = function (params: any) {
  this.eGui = document.createElement("span");
  var text = "";
  // one star for each medal
  for (var i = 0; i < params.value; i++) {
    text += "#";
  }
  this.eGui.innerHTML = text;
};

MedalCellRenderer.prototype.getGui = function () {
  return this.eGui;
};
// end of cell renderer

const gridOptions: GridOptions = {
  columnDefs: columnDefs,
  components: {
    // @ts-ignore
    medalCellRenderer: MedalCellRenderer,
  },
  defaultColDef: {
    sortable: true,
    width: 150,
    flex: 1,
    filter: true,
  },
};

export function SimpleCellRendererSample() {
  const { gridReadyHandler } = useGridReady();
  const rowData = useFetchOlympicWinnersSmall();

  return (
    <div className="ag-theme-alpine" style={{ height: "700px", width: "100%" }}>
      <AgGridReact
        onGridReady={gridReadyHandler}
        rowData={rowData}
        gridOptions={gridOptions}
      />
    </div>
  );
}
