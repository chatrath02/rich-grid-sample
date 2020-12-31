import { ColDef } from "ag-grid-community";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";
import "./ColumnAddRemoveSample.css";
// https://www.ag-grid.com/javascript-grid-column-updating-definitions/
// the state does not seem to be working on this library
const athleteColumn: ColDef = {
  headerName: "Athlete",
  valueGetter: (p) => p.data.athlete,
};

const colDefsMedalInclude: ColDef[] = [
  athleteColumn,
  {
    colId: "myAgeCol",
    headerName: "Age",
    valueGetter: (p) => p.data.age,
  },
  {
    headerName: "Country",
    headerClass: "country-header",
    valueGetter: (p) => p.data.country,
  },
  { field: "sport" },
  { field: "year" },
  { field: "date" },
  { field: "gold" },
  { field: "silver" },
  { field: "bronze" },
  { field: "total" },
];

const colDefsMedalExclude: ColDef[] = [
  athleteColumn,
  {
    colId: "myAgeCol",
    headerName: "Age",
    valueGetter: (p) => p.data.age,
  },
  {
    headerName: "Country",
    headerClass: "country-header",
    valueGetter: (p) => p.data.country,
  },
  { field: "sport" },
  { field: "year" },
  { field: "date" },
];

export function ColumnUpdateDefMatchingColumns() {
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
