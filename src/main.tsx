import * as React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "celestia-ui/dist/style.css";
import RouterProvider from "./providers/RouterProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>
);
