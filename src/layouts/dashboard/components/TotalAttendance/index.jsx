import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const TotalAttendance = ({ title, count }) => (
  <MDBox textAlign="center">
    <MDTypography variant="h5" textTransform="capitalize" color={title.color} fontWeight="regular">
      {title.text}
    </MDTypography>
    <MDTypography variant="h4" color="black" fontWeight="light">
      {count}
    </MDTypography>
  </MDBox>
);

export default TotalAttendance;
