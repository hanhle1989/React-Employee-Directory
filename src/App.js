import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import EmployeeTable from "./components/EmployeeTable";
import Results from "./components/Results";

import './App.css';

function App() {
  return (
    <div>
        <Header />
        <Search />
        <EmployeeTable />
        <Results />
    </div>
);
}

export default App;
