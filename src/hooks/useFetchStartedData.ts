import { useFetchData } from "./useFetchData";

export const useFetchStartedData = () => {
  const rowData = useFetchData(
    "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json"
  );
  return rowData;
};
