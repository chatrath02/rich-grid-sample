import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import {
  colDefsMedalInclude,
  colDefsMedalExclude,
} from "../common/gridColDefs";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";
import "./ColumnAddRemoveSample.css";
// https://www.ag-grid.com/javascript-grid-column-updating-definitions/

export function ColumnAddRemoveSample() {
  const { gridReadyHandler } = useGridReady();
  const rowData = useFetchOlympicWinnersSmall();
  const [columnDefs, setColumnDef] = useState(colDefsMedalInclude);
  const [showMedals, setShowMedals] = useState(true);

  const onClickExcludeColumns = () => {
    setColumnDef(colDefsMedalExclude);
    setShowMedals(false);
  };

  const onClickIncludeColumns = () => {
    setColumnDef(colDefsMedalInclude);
    setShowMedals(true);
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <div className="test-container">
        <div className="test-header">
          <button onClick={onClickExcludeColumns} disabled={!showMedals}>
            Exclude Medal
          </button>
          <button onClick={onClickIncludeColumns} disabled={showMedals}>
            Include Medal
          </button>
        </div>
        <div
          className="ag-theme-alpine test-grid"
          style={{ height: "100%", width: "100%" }}
        >
          <AgGridReact
            rowData={rowData}
            onGridReady={gridReadyHandler}
            defaultColDef={{ resizable: true, sortable: true, width: 100 }}
          >
            {columnDefs.map((col) => (
              <AgGridColumn {...col} key={col.field} />
            ))}
          </AgGridReact>
        </div>
      </div>
    </div>
  );
}
