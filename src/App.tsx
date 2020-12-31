import React from "react";
import "./App.css";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// import { GetStarted } from "./getStarted/GetStarted";
// import { ColumnDefinitionSample } from "./columns/ColumnDefinitionSample";
// import { ColumnHeadersSample } from "./columns/ColumnHeadersSample";
// import { ColumnGroupSample } from "./columns/ColumnGroupSample";
// import { ColumnUpdateDefinitions } from "./columns/ColumnUpdateDefinitions";
// import { ColumnAddRemoveSample } from "./columns/ColumnAddRemoveSample";
// import { ColumnUpdateDefMatchingColumns } from "./columns/ColumnUpdateDefMatchingColumns";
// import { ColumnUpdateEvents } from "./columns/ColumnUpdateEvents";
// import { AutoColumnGroupSample } from "./rows/AutoColumnGroupSample";
// import { MultiGroupSample } from "./rows/MultiGroupSample";
// import { AddValuesToLeafSample } from "./rows/AddValuesToLeafSample";
// import { HideOpenParentsSample } from "./rows/HideOpenParentsSample";
import { SimpleReducerSample } from "./simpleReducerSample/SimpleReducerSample";

function App() {
  return (
    <div className="App">
      {/* <div>
        <GetStarted />
      </div>
      <div>
        <ColumnDefinitionSample />
      </div>
      <div>
        <ColumnHeadersSample />
      </div> */}
      {/* <div>
        <ColumnGroupSample />
      </div> */}
      {/* <div>
        <ColumnAddRemoveSample />
      </div> */}
      {/* <div>
        <ColumnUpdateDefinitions />
      </div> */}
      {/* <div>
        <ColumnUpdateDefMatchingColumns />
      </div> */}
      {/* <div>
        <ColumnUpdateEvents />
      </div> */}
      {/* <div>
        <AutoColumnGroupSample />
      </div> */}
      {/* <div>
        <MultiGroupSample />
      </div> */}
      {/* <div>
        <AddValuesToLeafSample />
      </div> */}
      {/* <div>
        <HideOpenParentsSample />
      </div> */}
      <div>
        <SimpleReducerSample />
      </div>
    </div>
  );
}

export default App;
