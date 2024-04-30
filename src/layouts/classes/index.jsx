import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import classesTableData from "layouts/classes/data/classesTableData";
import Axios from "helpers/axios";
import ClassModal from "./components/ClassModal";

function Classes() {
    const [infoMessage, setInfoMessage] = useState("");
    const [table, setTable] = useState(classesTableData());
    const [openModal, setOpenModal] = useState(false);
    const [alertModal, setAlertModal] = useState(null);
    const [currentSchedule, setCurrentSchedule] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setInfoMessage("Loading...");
                const { data } = await Axios.get("/classes");
                if (data.length) {
                    setTable(classesTableData(data, handleOpenModal));
                    setInfoMessage("");
                } else {
                    setInfoMessage("No Data Found.");
                }
            } catch (error) {
                console.error("Error fetching classes data:", error);
                setInfoMessage(error.message);
            }
        };
        fetchData();
    }, []);

    const handleOpenModal = async (id) => {
        try {
            setAlertModal(null);
            setCurrentSchedule(null);
            setOpenModal(true);

            const { data } = await Axios.get("/schedules/" + id);

            setCurrentSchedule(data);
        } catch (error) {
            console.error("Error fetching schedule:", error);
            setCurrentSchedule(null);
        }
    };

    const handleCloseModal = () => setOpenModal(false);

    const handleSetCurrentSchedule = (arrayId, key, changeValue) => {
        let tempSchedule = [...currentSchedule];
        tempSchedule[arrayId][key] = changeValue;

        setCurrentSchedule(tempSchedule);
    };

    const handleSaveCurrentSchedule = () => {
        currentSchedule.forEach(async (schedule) => {
            try {
                await Axios.put("/classes/schedule", {
                    id: schedule.id,
                    entryTime: schedule.entryTime,
                    isActive: schedule.isActive,
                });

                setAlertModal({ color: "success", alert: "Successfully Updated" });
            } catch (error) {
                console.error("Error updating schedule:", error);
            }
        });
    };

    const handleCloseAlert = () => setTimeout(() => setAlertModal(null), 500);

    return (
        <DashboardLayout>
            <ClassModal
                currentSchedule={currentSchedule}
                handleSetCurrentSchedule={handleSetCurrentSchedule}
                handleSaveCurrentSchedule={handleSaveCurrentSchedule}
                alert={alertModal}
                handleCloseAlert={handleCloseAlert}
                open={openModal}
                handleClose={handleCloseModal}
            />
            <DashboardNavbar />
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
                                bgColor="success"
                                borderRadius="lg"
                                coloredShadow="info"
                            >
                                <MDTypography variant="h6" color="white">
                                    Daftar Kelas
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

export default Classes;
