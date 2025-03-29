import { useLocation } from "react-router-dom";

import Router from "./routers/Router";
import { useState } from "react";
import { CommonContext } from "./contexts/CommonContext";
import LayoutIndex from "./components/layouts/LayoutIndex";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/styles/App.css";

function App() {
  const { pathname } = useLocation();
  const [testContext, setTestContext] = useState("default value");
  return (
    <CommonContext.Provider value={{ testContext, setTestContext }}>
      <LayoutIndex pathname={pathname}>
        <Router />
      </LayoutIndex>
    </CommonContext.Provider>
  );
}

export default App;
