import { useState } from "react";
import "./App.css";
import productContext from "./Context/appContext";
import Routing from "./pages/Routing";

function App() {
  const [showLog, setShowLog] = useState(false);
  return (
    <>
      <productContext.Provider
        value={{
          showLog: showLog,
          setShowLog: setShowLog,
        }}
      >
        <Routing />
      </productContext.Provider>
    </>
  );
}

export default App;
