import React, { MouseEvent } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useGridReady } from "../hooks/useGridReady";
import { useFetchStartedData } from "../hooks/useFetchStartedData";

///https://www.ag-grid.com/react-grid/

export function GetStarted() {
  const { gridReadyHandler, gridApi } = useGridReady();
  const rowData = useFetchStartedData();

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (gridApi) {
      const selectedNodes = gridApi.getSelectedNodes();
      const selectedData = selectedNodes.map((node) => node.data);
      const selectedDataStringPresentation = selectedData
        .map((node) => node.make + " " + node.model)
        .join(", ");
      alert(`Selected nodes: ${selectedDataStringPresentation}`);
    } else {
      alert("GridApi has not been set");
    }
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <button onClick={onButtonClick}>Get selected rows</button>
      <AgGridReact
        onGridReady={gridReadyHandler}
        rowSelection="multiple"
        rowData={rowData}
        groupSelectsChildren={true}
        autoGroupColumnDef={{
          headerName: "Model",
          field: "model",
          cellRenderer: "agGroupCellRenderer",
          cellRendererParams: {
            checkbox: true,
          },
        }}
      >
        <AgGridColumn
          field="make"
          sortable={true}
          filter={true}
          checkboxSelection={true}
          rowGroup={true}
        ></AgGridColumn>
        <AgGridColumn field="model" sortable={true} hide={true} />
        <AgGridColumn
          field="price"
          sortable={true}
          filter={true}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
}
