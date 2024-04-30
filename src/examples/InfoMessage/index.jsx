import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function InfoMessage({ children, color }) {
    return (
        <MDBox textAlign="center">
            <MDTypography component="h2" variant="h6" color={color} fontWeight="light">
                {children}
            </MDTypography>
        </MDBox>
    );
}
