import { ColDef } from "ag-grid-community";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import React from "react";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { useGridReady } from "../hooks/useGridReady";

/// https://www.ag-grid.com/javascript-grid-column-definitions/

export function ColumnDefinitionSample() {
  // component state management
  const { gridReadyHandler } = useGridReady();
  const rowData = useFetchOlympicWinnersSmall();

  const defaultColDef: ColDef = {
    width: 150,
    editable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    resizable: true,
  };

  const columnTypes: {
    [key: string]: ColDef;
  } = {
    numberColumn: {
      width: 130,
      filter: "agNumberColumnFilter",
    },
    medalColumn: {
      width: 100,
      columnGroupShow: "open",
      filter: false,
    },
    nonEditableColumn: { editable: false },
    dateColumn: {
      filter: "agDateColumnFilter",
      filterParams: {
        comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
          const dateParts = cellValue.split("/");
          const day = Number(dateParts[0]);
          const month = Number(dateParts[1]) - 1;
          const year = Number(dateParts[2]);
          const cellDate = new Date(year, month, day);
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          } else {
            return 0;
          }
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "600px" }}>
      <div style={{ height: "100%", boxSizing: "border-box" }}>
        <div
          className="ag-theme-alpine"
          style={{ height: "100%", width: "100%" }}
        >
          <AgGridReact
            onGridReady={gridReadyHandler}
            rowData={rowData}
            defaultColDef={defaultColDef}
            animateRows={true}
            columnTypes={columnTypes}
          >
            <AgGridColumn headerName="Athlete" field="athlete" />
            <AgGridColumn headerName="Sport" field="sport" />
            <AgGridColumn
              headerName="Age"
              field="age"
              type={["numberColumn", "centreAligned"]}
            />
            <AgGridColumn headerName="Year" field="year" type="numberColumn" />
            <AgGridColumn
              headerName="Date"
              field="date"
              type={["dateColumn", "nonEditableColumn"]}
              width={220}
            />
            <AgGridColumn headerName="Medals" groupId="medalsGroup">
              <AgGridColumn headerName="Gold" field="gold" type="medalColumn" />
              <AgGridColumn
                headerName="Silver"
                field="silver"
                type="medalColumn"
              />
              <AgGridColumn
                headerName="Bronze"
                field="bronze"
                type="medalColumn"
              />
              <AgGridColumn
                headerName="Total"
                field="total"
                type="medalColumn"
                columnGroupShow="closed"
              />
            </AgGridColumn>
          </AgGridReact>
        </div>
      </div>
    </div>
  );
}
