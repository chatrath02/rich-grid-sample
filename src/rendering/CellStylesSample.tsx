import { CellClassParams, ValueParserParams } from "ag-grid-community";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React from "react";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";
import "./CellStylesSample.css";

function numberParser(params: ValueParserParams) {
  var newValue = params.newValue;
  var valueAsNumber;
  if (newValue === null || newValue === undefined || newValue === "") {
    valueAsNumber = null;
  } else {
    valueAsNumber = parseFloat(params.newValue);
  }
  return valueAsNumber;
}
function numberToColor(val: number) {
  if (val === 0) {
    return "#ffaaaa";
  } else if (val == 1) {
    return "#aaaaff";
  } else {
    return "#aaffaa";
  }
}

function cellStyle(params: any) {
  var color = numberToColor(params.value);
  return { backgroundColor: color };
}

const ragCellClassRules = {
  "rag-green-outer": (params: CellClassParams) => {
    return params.value === 2008;
  },
  "rag-amber-outer": (params: CellClassParams) => {
    return params.value === 2004;
  },
  "rag-red-outer": (params: CellClassParams) => {
    return params.value === 2000;
  },
};

function ragRenderer(params: any) {
  return '<span class="rag-element">' + params.value + "</span>";
}

export function CellStylesSample() {
  const { gridReadyHandler } = useGridReady();
  // set the row data when grid is ready
  const rowData = useFetchOlympicWinnersSmall();

  return (
    <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
      <AgGridReact
        onGridReady={gridReadyHandler}
        rowData={rowData}
        defaultColDef={{
          flex: 1,
          minWidth: 150,
          editable: true,
        }}
      >
        <AgGridColumn field="athlete" />
        <AgGridColumn
          field="age"
          valueParser={numberParser}
          cellClassRules={{
            "rag-green": "x < 20",
            "rag-amber": "x >= 20 && x < 25",
            "rag-red": "x >= 25",
          }}
        />
        <AgGridColumn field="country" />
        <AgGridColumn
          field="year"
          valueParser={numberParser}
          cellClassRules={ragCellClassRules}
          cellRenderer={ragRenderer}
        />
        <AgGridColumn field="date" cellClass="rag-amber" />
        <AgGridColumn
          field="sport"
          cellClass={(params: any) =>
            params.value === "Swimming" ? "rag-green" : "rag-amber"
          }
        />
        <AgGridColumn
          field="gold"
          valueParser={numberParser}
          cellStyle={{ backgroundColor: "#aaffaa" }}
        />
        <AgGridColumn
          field="silver"
          valueParser={numberParser}
          cellStyle={cellStyle}
        />
        <AgGridColumn
          field="bronze"
          valueParser={numberParser}
          cellStyle={cellStyle}
        />
      </AgGridReact>
    </div>
  );
}
