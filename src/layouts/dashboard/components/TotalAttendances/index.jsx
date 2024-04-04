import React from "react";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Data
import data from "layouts/dashboard/components/TotalAttendances/data";

function TotalAttendances() {
  const { total } = data();
  return (
    <Card>
      <MDBox
        mx={2}
        mt={-3}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
      >
        <MDTypography variant="h6" color="white">
          Absensi Siswa Hari Ini
        </MDTypography>
        <MDTypography variant="h6" color="white" fontWeight="light">
          4 April 2024
        </MDTypography>
      </MDBox>
      <MDBox pt={3} display="flex" justifyContent="space-between" padding="1rem 2rem">
        {total.map(({ text, count }) => (
          <MDBox textAlign="center">
            <MDTypography
              variant="h5"
              textTransform="capitalize"
              color={text.color}
              fontWeight="regular"
            >
              {text.label}
            </MDTypography>
            <MDTypography variant="h4" color="black" fontWeight="light">
              {count}
            </MDTypography>
          </MDBox>
        ))}
      </MDBox>
    </Card>
  );
}

export default TotalAttendances;
