import { ColDef } from "ag-grid-community";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React, { useEffect, useState } from "react";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";
import "./ColumnAddRemoveSample.css";

/// https://www.ag-grid.com/javascript-grid-column-updating-definitions/
// code is buggy - in that only can call getColDefs once

const colDefsMedalInclude: ColDef[] = [
  { field: "athlete" },
  { field: "age" },
  { field: "country" },
  { field: "sport" },
  { field: "year" },
  { field: "date" },
  { field: "gold" },
  { field: "silver" },
  { field: "bronze" },
  { field: "total" },
];

export function ColumnUpdateDefinitions() {
  const { gridReadyHandler, gridApi } = useGridReady();
  const [forceRefresh, setForceRefresh] = useState(false);
  const rowData = useFetchOlympicWinnersSmall();
  const [columns, setColumns] = useState(colDefsMedalInclude);

  useEffect(() => {
    if (forceRefresh && gridApi) {
      gridApi.refreshCells({ force: true });
      setForceRefresh(false);
    }
  }, [forceRefresh, gridApi]);

  const setHeaderNames = () => {
    if (gridApi) {
      const newColumns = gridApi.getColumnDefs();
      newColumns.forEach((col, index) => (col.headerName = `C${index}`));
      setColumns(newColumns);
    }
  };
  const removeHeaderNames = () => {
    if (gridApi) {
      const currentColumns = gridApi.getColumnDefs();
      currentColumns.forEach((col) => (col.headerName = undefined));
      setColumns(currentColumns);
    }
  };

  const setValueFormatters = () => {
    if (gridApi) {
      const currentColumns: ColDef[] = gridApi.getColumnDefs();
      currentColumns.forEach((newColumn, index) => {
        newColumn.valueFormatter = (params) => `[${params.value}]`;
      });
      setColumns(currentColumns);
      setForceRefresh(true);
    }
  };
  const removeValueFormatters = () => {
    if (gridApi) {
      const newColumns: ColDef[] = gridApi.getColumnDefs();
      newColumns.forEach((newColumn, index) => {
        newColumn.valueFormatter = undefined;
      });
      setColumns(newColumns);
      setForceRefresh(true);
    }
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <div className="test-container">
        <div className="test-header">
          <button onClick={setHeaderNames}>Set Header Names</button>
          <button onClick={removeHeaderNames}>Remove Header Names</button>
          <button onClick={setValueFormatters}>Set Value Formatters</button>
          <button onClick={removeValueFormatters}>
            Remove Value Formatters
          </button>
        </div>
        <div
          className="ag-theme-alpine test-grid"
          style={{ height: "100%", width: "100%" }}
        >
          <AgGridReact
            rowData={rowData}
            onGridReady={gridReadyHandler}
            applyColumnDefOrder={true}
            defaultColDef={{
              resizable: true,
              sortable: true,
              initialWidth: 100,
              filter: true,
            }}
          >
            {columns.map((col) => (
              <AgGridColumn {...col} key={col.field} />
            ))}
          </AgGridReact>
        </div>
      </div>
    </div>
  );
}
