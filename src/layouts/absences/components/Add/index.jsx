import React from "react";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Card, FormControl, InputLabel, OutlinedInput, MenuItem, Select } from "@mui/material";

export default function AddAbsence() {
    return (
        <DashboardLayout>
            <DashboardNavbar />

            <MDBox pt={6} pb={3}>
                <Card>
                    <MDBox
                        mx={2}
                        mt={-3}
                        py={3}
                        px={2}
                        variant="gradient"
                        bgColor="primary"
                        borderRadius="lg"
                        coloredShadow="primary"
                    >
                        <MDBox>
                            <MDTypography variant="h6" color="white">
                                Tambah Absensi
                            </MDTypography>
                        </MDBox>
                    </MDBox>

                    <MDBox p={5}></MDBox>
                </Card>
            </MDBox>
        </DashboardLayout>
    );
}
