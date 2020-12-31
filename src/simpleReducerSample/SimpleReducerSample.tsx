import React, { useMemo, useReducer } from "react";
import { useFetchOlympicWinnersSmall } from "../hooks/useFetchOlympicWinnersSmall";
import { GridComponentMemoized } from "./GridComponent";
import { ActionType, AppContext, initialState, reducer } from "./store";
import {
  colDefsMedalExclude,
  colDefsMedalInclude,
} from "../common/gridColDefs";

export function SimpleReducerSample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const rowData = useFetchOlympicWinnersSmall();
  const contextValue = useMemo(() => {
    return { state };
  }, [state]);

  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>Simple Example using Hooks (with useContext and useReducer)</h1>
        <button
          onClick={() =>
            dispatch({
              type: ActionType.SET_ROW_DATA,
              payload: { rowData, columnDefs: colDefsMedalInclude },
            })
          }
          className="btn btn-primary"
        >
          Populate Row Data
        </button>
        <button
          onClick={() => dispatch({ type: ActionType.REMOVE_ROW_DATA })}
          className="btn btn-primary"
        >
          Remove Row Data
        </button>
        <button
          onClick={() =>
            dispatch({
              type: ActionType.SHOW_MEDALS,
              payload: colDefsMedalInclude,
            })
          }
          className="btn btn-primary"
        >
          Show Medals
        </button>
        <button
          onClick={() =>
            dispatch({
              type: ActionType.REMOVE_MEDALS,
              payload: colDefsMedalExclude,
            })
          }
          className="btn btn-primary"
        >
          Remove Medals
        </button>
        <GridComponentMemoized />
      </div>
    </AppContext.Provider>
  );
}
