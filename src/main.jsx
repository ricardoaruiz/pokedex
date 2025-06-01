import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { router } from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </StrictMode>,
);
