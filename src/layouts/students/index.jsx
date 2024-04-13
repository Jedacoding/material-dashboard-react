import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import studentsTableData from "layouts/students/data/studentsTableData";
import Axios from "helpers/axios";
import StudentModal from "./components/StudentModal";

function Students() {
    const [infoMessage, setInfoMessage] = useState("");
    const [table, setTable] = useState(studentsTableData());
    const [openModal, setOpenModal] = useState(false);
    const [student, setStudent] = useState(null);

    useEffect(() => {
        callApi();
    }, []);

    const handleOpenModal = async (studentId) => {
        setOpenModal(true);

        const { data } = await Axios.get(`/student/${studentId}`);
        setStudent(data);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setStudent(null);
    };

    const callApi = async () => {
        try {
            setInfoMessage("Loading...");
            const { data } = await Axios.get("/student");

            if (data.length) {
                setTable(studentsTableData(data, handleOpenModal));
                setInfoMessage("");
            } else {
                setInfoMessage("No Data Found.");
            }
        } catch (error) {
            console.error("Error fetching students data:", error);
            setInfoMessage(error.message);
        }
    };

    return (
        <DashboardLayout>
            <StudentModal student={student} open={openModal} handleClose={handleCloseModal} />
            <DashboardNavbar canSearch={true} />
            <MDBox pt={6} pb={3}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
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
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <MDBox>
                                    <MDTypography variant="h6" color="white">
                                        Daftar Siswa
                                    </MDTypography>
                                    <MDTypography
                                        variant="h6"
                                        color="white"
                                        fontWeight="light"
                                        fontSize={14}
                                    >
                                        Angkatan 2023/2024
                                    </MDTypography>
                                </MDBox>
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
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Students;
