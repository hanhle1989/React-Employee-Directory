import React from "react";
import { MDBDataTable } from "mdbreact";

const EmployeeData = (props) => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
      },
      {
        label: "Nationality",
        field: "nat",
        sort: "asc",
      },
    ],
    rows:props.employees
  };
  console.log("Props", props);
  return <MDBDataTable sorting={true} striped bordered data={data} />;
};

export default EmployeeData;
