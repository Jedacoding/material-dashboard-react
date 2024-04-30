import { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";
import socket from "helpers/socket";

function Settings() {
    const [qrCode, setQrCode] = useState("");
    const [infoMessage, setInfoMessage] = useState("");

    useEffect(() => {
        console.log(socket);
        function onConnect() {
            setInfoMessage("a user connected");
        }
        function onQR(url) {
            setQrCode(url);
        }
        function onLoading() {
            setInfoMessage("Loading...");
        }
        function onSuccess() {
            setInfoMessage("Sukses");
        }
        socket.on("connect", onConnect);
        socket.on("qr", onQR);
        socket.on("loading", onLoading);
        socket.on("success", onSuccess);
        return () => {
            socket.off("connect", onConnect);
        };
    }, []);

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
                        bgColor="dark"
                        borderRadius="lg"
                        coloredShadow="dark"
                    >
                        <MDTypography variant="h6" color="white" fontWeight="regular">
                            Hubungkan Whatsapp untuk Nontifikasi kepada Wali Siswa
                        </MDTypography>
                    </MDBox>
                    <MDBox p={4} pt={3}>
                        <Grid container spacing={6} alignItems="center">
                            <Grid item xs={12} lg={9}>
                                <MDBox>
                                    <ol
                                        style={{
                                            fontSize: 14,
                                            margin: "25px 0 25px 20px",
                                        }}
                                    >
                                        <li>Buka Whatsapp di telepon Anda</li>
                                        <li>
                                            Ketuk&nbsp;
                                            <MDButton variant="text" color="dark" size="small">
                                                <Icon>more_vert</Icon>&nbsp; Menu
                                            </MDButton>
                                            &nbsp; atau&nbsp;
                                            <MDButton variant="text" color="dark" size="small">
                                                <Icon>settings</Icon>&nbsp; Settings
                                            </MDButton>
                                            &nbsp; dan pilih Perangkat Tertaut
                                        </li>
                                        <li>
                                            Ketuk&nbsp;
                                            <MDButton variant="text" color="dark" size="small">
                                                <Icon>smartphone</Icon>&nbsp; Tautkan Perangkat
                                            </MDButton>
                                        </li>
                                        <li>
                                            Arahkan telepon Anda ke layar ini untuk memindai kode QR
                                        </li>
                                    </ol>

                                    {/* <MDBox>
                                        <MDButton variant="text" color="error">
                                            Keluar Perangkat
                                        </MDButton>
                                    </MDBox> */}
                                </MDBox>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                {qrCode.length ? (
                                    <img src={qrCode} alt="QR Code" />
                                ) : (
                                    <MDTypography
                                        color="info"
                                        textAlign="center"
                                        fontWeight="light"
                                    >
                                        {infoMessage}
                                    </MDTypography>
                                )}
                            </Grid>
                        </Grid>
                    </MDBox>
                </Card>
            </MDBox>

            <Footer />
        </DashboardLayout>
    );
}

export default Settings;
