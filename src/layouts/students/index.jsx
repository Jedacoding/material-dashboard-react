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
import { useMaterialUIController } from "context";

function Students() {
    const [infoMessage, setInfoMessage] = useState("");
    const [originalData, setOriginalData] = useState([]);
    const [table, setTable] = useState(studentsTableData());
    const [openModal, setOpenModal] = useState(false);
    const [student, setStudent] = useState(null);
    const [controller] = useMaterialUIController();
    const { search } = controller;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setInfoMessage("Loading...");
                const { data } = await Axios.get("/students");
                if (data.length) {
                    setOriginalData(data);
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

        fetchData();
    }, []);

    useEffect(() => {
        if (search) {
            const filteredData = originalData.filter((student) => {
                return student.name.toLowerCase().includes(search.toLowerCase());
            });

            if (filteredData.length === 0) {
                setInfoMessage("No Data Found.");
            } else {
                setInfoMessage("");
            }

            setTable(studentsTableData(filteredData, handleOpenModal));
        } else {
            if (originalData.length) {
                setInfoMessage("");
                setTable(studentsTableData(originalData, handleOpenModal));
            }
        }
    }, [search]);

    const handleOpenModal = async (studentId) => {
        console.log("student id", studentId);

        try {
            const { data } = await Axios.get(`/students/${studentId}`);

            setOpenModal(true);
            setStudent(data);
        } catch (error) {
            console.log("error fetching data student:", error);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setStudent(null);
    };

    return (
        <DashboardLayout>
            <StudentModal student={student} open={openModal} handleClose={handleCloseModal} />
            <DashboardNavbar canSearch={true} />
            {search && <MDTypography color="dark">Search for "{search}"</MDTypography>}
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
                            >
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
