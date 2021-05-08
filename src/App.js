import React from "react";
import Employee from "./components/Employee";
import "./index.css";
import { MDBContainer, MDBTypography } from 'mdbreact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MDBContainer>    
          <MDBTypography tag='h1' variant="h1">
            HANH SOLO CORPORATION
            </MDBTypography>
            <h3>GLOBAL EMPLOYEE DIRECTORY</h3>
          </MDBContainer> 
      </header>
      <Employee />
    </div >
  );
}

export default App;
