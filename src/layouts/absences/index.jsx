import React, { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Grid, Card } from "@mui/material";
import absencesTableData from "layouts/absences/data/absencesTableData";
import DataTable from "examples/Tables/DataTable";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import Axios from "helpers/axios";
import { Link } from "react-router-dom";
import AddModal from "./components/AddModal";

function Absences() {
    const [infoMessage, setInfoMessage] = useState("");
    const [table, setTable] = useState(absencesTableData());
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setInfoMessage("Loading...");
                const { data } = await Axios.get("/report/attendances");

                console.log(data);

                if (data.length) {
                    setTable(absencesTableData(data));
                    setInfoMessage("");
                } else {
                    setInfoMessage("No Data Found.");
                }
            } catch (error) {
                console.error("Error fetching presences data:", error);
                setInfoMessage(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <DashboardLayout>
            <DashboardNavbar />

            <AddModal open={openModal} handleClose={() => setOpenModal(false)} />

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
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <MDBox>
                            <MDTypography variant="h6" color="white">
                                Daftar Absensi
                            </MDTypography>
                        </MDBox>

                        <MDButton
                            variant="gradient"
                            color="dark"
                            onClick={() => setOpenModal(true)}
                            style={{ textTransform: "capitalize" }}
                        >
                            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                            &nbsp;Tambah Absen
                        </MDButton>
                    </MDBox>
                    <MDBox pt={3}>
                        <DataTable
                            table={table}
                            isSorted={false}
                            entriesPerPage={false}
                            showTotalEntries={false}
                            noEndBorder
                        />
                    </MDBox>

                    {infoMessage && (
                        <MDBox display="flex" justifyContent="center" mt={-3} pb={3}>
                            <MDTypography
                                variant="h6"
                                color={infoMessage === "Loading..." ? "info" : "error"}
                                fontWeight="light"
                            >
                                {infoMessage}
                            </MDTypography>
                        </MDBox>
                    )}
                </Card>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Absences;
