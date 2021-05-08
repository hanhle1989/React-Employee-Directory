import React from "react";
import Employee from "./pages/Employee";
import "./index.css";
import { MDBContainer, MDBTypography } from 'mdbreact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MDBContainer>    
          <MDBTypography tag='h1' variant="h1">
            HANH CORP GLOBAL EMPLOYEE DIRECTORY
          </MDBTypography>
          </MDBContainer> 
      </header>
      <Employee />
    </div>
  );
}

export default App;
