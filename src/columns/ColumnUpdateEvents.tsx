import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";
import { ColDef } from "ag-grid-community";
import "./ColumnUpdateEvents.css";

// https://www.ag-grid.com/javascript-grid-column-updating-definitions/
// raise issue with ag-grid people in the col.sort cannot be set to null and if these are stateful attributes

export function ColumnUpdateEvents() {
  const rowData = useFetchOlympicWinnersSmall();
  const { gridReadyHandler, gridColumnApi } = useGridReady();
  const [columns, setColumns] = useState<ColDef[]>([
    { field: "athlete" },
    { field: "age" },
    { field: "country" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
  ]);

  // button handlers
  const onSortOn = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((col) => {
      if (col.field === "age") {
        console.log(col.sort);
        col.sort = "desc";
      }
      if (col.field === "athlete") {
        col.sort = "asc";
      }
    });
    setColumns(columnDefs);
  };

  const onSortOff = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((col) => {
      col.sort = undefined; // cannot set to null
    });
    setColumns(columnDefs);
  };
  const onWidthNarrow = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((colDef) => {
      if (colDef.field === "age" || colDef.field === "athlete") {
        colDef.width = 100;
      }
    });
    setColumns(columnDefs);
  };
  const onWidthNormal = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((colDef) => {
      colDef.width = 200;
    });
    setColumns(columnDefs);
  };
  const onHide = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((colDef) => {
      if (colDef.field === "age" || colDef.field === "athlete") {
        colDef.hide = true;
      }
    });
    setColumns(columnDefs);
  };
  const onShow = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((colDef) => {
      colDef.hide = false;
    });
    setColumns(columnDefs);
  };
  const onPivotOn = () => {
    if (gridColumnApi) {
      gridColumnApi.setPivotMode(true);

      const columnDefs = [...columns];
      columnDefs.forEach((colDef) => {
        if (colDef.field === "country") {
          colDef.pivot = true;
        }
      });
      setColumns(columnDefs);
    }
  };
  const onPivotOff = () => {
    if (gridColumnApi) {
      gridColumnApi.setPivotMode(false);

      const columnDefs = [...columns];
      columnDefs.forEach((colDef) => {
        colDef.pivot = false;
      });
      setColumns(columnDefs);
    }
  };
  const onRowGroupOn = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((colDef) => {
      if (colDef.field === "athlete") {
        colDef.rowGroup = true;
      }
    });
    setColumns(columnDefs);
  };
  const onRowGroupOff = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((colDef) => {
      colDef.rowGroup = false;
    });
    setColumns(columnDefs);
  };
  const onAggFuncOn = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((colDef) => {
      if (
        colDef.field === "gold" ||
        colDef.field === "silver" ||
        colDef.field === "bronze"
      ) {
        colDef.aggFunc = "sum";
      }
    });
    setColumns(columnDefs);
  };
  const onAggFuncOff = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((colDef) => {
      colDef.aggFunc = undefined;
    });
    setColumns(columnDefs);
  };
  const onPinnedOn = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((colDef) => {
      if (colDef.field === "athlete") {
        colDef.pinned = "left";
      }
      if (colDef.field === "age") {
        colDef.pinned = "right";
      }
    });
    setColumns(columnDefs);
  };
  const onPinnedOff = () => {
    const columnDefs = [...columns];
    columnDefs.forEach((colDef) => {
      colDef.pinned = undefined;
    });
    setColumns(columnDefs);
  };
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <div className="test-container">
        <div className="test-header">
          <div className="test-button-row">
            <div className="test-button-group">
              <button onClick={onSortOn}>Sort On</button>
              <button onClick={onSortOff}>Sort Off</button>
            </div>
            <div className="test-button-group">
              <button onClick={onWidthNarrow}>Width Narrow</button>
              <button onClick={onWidthNormal}>Width Normal</button>
            </div>
            <div className="test-button-group">
              <button onClick={onHide}>Hide Cols</button>
              <button onClick={onShow}>Show Cols</button>
            </div>
            <div className="test-button-group">
              <button onClick={onPivotOn}>Pivot On</button>
              <button onClick={onPivotOff}>Pivot Off</button>
            </div>
            <div className="test-button-group">
              <button onClick={onRowGroupOn}>Row Group On</button>
              <button onClick={onRowGroupOff}>Row Group Off</button>
            </div>
            <div className="test-button-group">
              <button onClick={onAggFuncOn}>Agg Func On</button>
              <button onClick={onAggFuncOff}>Agg Func Off</button>
            </div>
            <div className="test-button-group">
              <button onClick={onPinnedOn}>Pinned On</button>
              <button onClick={onPinnedOff}>Pinned Off</button>
            </div>
          </div>
        </div>
        <div
          className="ag-theme-alpine test-grid"
          style={{ height: "100%", width: "100%" }}
        >
          <AgGridReact
            rowData={rowData}
            onGridReady={gridReadyHandler}
            defaultColDef={{
              sortable: true,
              resizable: true,
              width: 150,
              enableRowGroup: true,
              enablePivot: true,
              enableValue: true,
            }}
          >
            {columns.map((col) => (
              <AgGridColumn {...col} />
            ))}
          </AgGridReact>
        </div>
      </div>
    </div>
  );
}
