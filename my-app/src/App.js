import React, { useState } from "react";
import Header from "./Header";
import ResourceTable from "./ResourceTable";
import resources from "./data/resources";
import "./App.css";

function App() {
  const [darkMode, toggleDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="container">
        <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />
        <ResourceTable resources={resources} />
      </div>
    </div>
  );
}

export default App;
