import { useFetchData } from "./useFetchData";

export const useFetchOlympicWinnersSmall = () => {
  const rowData = useFetchData(
    "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json"
  );
  return rowData;
};
