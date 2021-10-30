import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WatherContextProvider } from "./hooks/WatherHook";
import { GlobalStyles } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <WatherContextProvider>
      <App />
    </WatherContextProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
