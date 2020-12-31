import { GridApi, ColumnApi, AgGridEvent } from "ag-grid-community";
import { useEffect, useState } from "react";

export const useGridReady = () => {
  const [gridApi, setGridApi] = useState<GridApi>();
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi>();

  useEffect(() => {
    if (gridApi && gridColumnApi) {
      //gridApi.sizeColumnsToFit();
    }
  }, [gridApi, gridColumnApi]);

  const gridReadyHandler = (e: AgGridEvent) => {
    if (e.api && e.columnApi) {
      setGridApi(e.api);
      setGridColumnApi(e.columnApi);
    }
  };
  return { gridReadyHandler, gridApi, gridColumnApi };
};
