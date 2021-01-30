import React from "react";
import { useFxData } from "./FxDataServices";
import { FxQuoteMatrix } from "./FxQuoteMatrix";
import { TraderAppContext } from "./store";

export function TraderApp() {
  const state = useFxData();
  return (
    <TraderAppContext.Provider value={{ state }}>
      <FxQuoteMatrix />
    </TraderAppContext.Provider>
  );
}
