import React, { Component } from "react";
import "./App.css";
import Routes from "./navigation/Routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faChevronRight);

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
