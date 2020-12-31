import { ColDef } from "ag-grid-community";

export const colDefsMedalInclude: ColDef[] = [
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

export const colDefsMedalExclude: ColDef[] = [
  { field: "athlete" },
  { field: "age" },
  { field: "country" },
  { field: "sport" },
  { field: "year" },
  { field: "date" },
];

export const colDefsRowGroup: ColDef[] = [
  { field: "athlete", minWidth: 200 },
  { field: "age" },
  { field: "country", rowGroup: true },
  { field: "sport", minWidth: 200 },
  { field: "year", rowGroup: true },
  { field: "date" },
  { field: "gold" },
  { field: "silver" },
  { field: "bronze" },
  { field: "total" },
];
