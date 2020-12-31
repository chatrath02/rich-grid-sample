import { ColDef } from "ag-grid-community";
import React from "react";

// set Action Types
export enum ActionType {
  SET_ROW_DATA = "SET_ROW_DATA",
  REMOVE_ROW_DATA = "REMOVE_ROW_DATA",
  SHOW_MEDALS = "SHOW_MEDALS",
  REMOVE_MEDALS = "REMOVE_MEDALS",
}

// set state
type State = {
  rowData: any[];
  columnDefs: ColDef[];
};

// actions to be done
type Action =
  | { type: "SET_ROW_DATA"; payload: State }
  | { type: "REMOVE_ROW_DATA" }
  | { type: "SHOW_MEDALS" | "REMOVE_MEDALS"; payload: ColDef[] };

export const initialState: State = {
  rowData: [],
  columnDefs: [],
};

export const reducer: React.Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case ActionType.SET_ROW_DATA:
      return {
        ...state,
        rowData: action.payload.rowData,
        columnDefs: action.payload.columnDefs,
      };
    case ActionType.REMOVE_ROW_DATA:
      return { ...state, rowData: [], columnDefs: [] };
    case ActionType.SHOW_MEDALS:
    case ActionType.REMOVE_MEDALS:
      return { ...state, columnDefs: action.payload };
    default:
      return state;
  }
};
type ContextType = {
  state: State;
  dispatch?: Action;
};

export const AppContext = React.createContext<ContextType>({
  state: initialState,
});
