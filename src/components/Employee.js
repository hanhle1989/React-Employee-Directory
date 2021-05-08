import React from "react";
import axios from "axios";
import EmployeeData from "./EmployeeData";
import { MDBContainer} from "mdbreact";


class Employee extends React.Component {
  state = {
    employeeRecords: [],
  };
  componentDidMount = () => {
    axios
      .get("https://randomuser.me/api/?results=2000&nat=us,ca,br,fr,ch")
      .then((records) => {
        let data = records.data.results;
        let employeeRecordstemp = [];
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          let erecord = {
            name: data[i].name.first + " " + data[i].name.last,
            email: data[i].email,
            phone: data[i].cell,
            nationality: data[i].nat,
          };
          employeeRecordstemp.push(erecord);
        }
        console.log(employeeRecordstemp);
        this.setState({ employeeRecords: employeeRecordstemp });
      });
  };

  render() {
    return (
      <div>
        <MDBContainer>
        <EmployeeData employees={this.state.employeeRecords} />
        </MDBContainer>
      </div>
    );
  }
}

export default Employee;
