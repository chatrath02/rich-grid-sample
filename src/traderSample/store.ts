import React from "react";

export enum TraderAppActionType {
  FX_DATA_CHANGED = "FX_DATA_CHANGED",
}

export type StateTradeData = {
  fxData: any[];
};

export type TraderAppAction = { type: "FX_DATA_CHANGED"; payload: any[] };

export const initialState: StateTradeData = {
  fxData: [],
};

export const reducerTraderApp: React.Reducer<
  StateTradeData,
  TraderAppAction
> = (state, action): StateTradeData => {
  switch (action.type) {
    case TraderAppActionType.FX_DATA_CHANGED:
      return {
        ...state,
        fxData: action.payload,
      };
    default:
      return state;
  }
};

export type TraderAppContextType = {
  state: StateTradeData;
  dispatch?: React.Dispatch<TraderAppAction>;
};

export const TraderAppContext = React.createContext<TraderAppContextType>({
  state: initialState,
});
