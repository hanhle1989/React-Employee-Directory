import React from "react";
import { MDBDataTable } from "mdbreact";

const EmployeeData = (props) => {
  const data = {
    columns: [
      {
        label: "Picture",
        field: "picture",
        sort: "asc",
      },
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
        label: "Address",
        field: "address",
        sort: "asc",
      },
      {
        label: "Country",
        field: "country",
        sort: "asc",
      }
    ],
    rows:props.employees
  };
  console.log("Props", props);
  return <MDBDataTable sorting={true} striped bordered data={data} />;
};

export default EmployeeData;
