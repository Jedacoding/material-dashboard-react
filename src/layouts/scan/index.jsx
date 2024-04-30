import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import { Grid, Icon } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import CoverLayout from "layouts/scan/components/CoverLayout";
import DateTimeDisplay from "./components/DateTimeDisplay";
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import EmotionModal from "./components/EmotionModal";
import ScanButton from "./components/ScanButton";
import ScanIcon from "assets/images/icons/scan.png";
import ScanResult from "./components/ScanResult";
import NewestAbsences from "./components/NewestAbsences";
import Axios from "helpers/axios";

function Scan() {
    const [openModal, setOpenModal] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const [scanResult, setScanResult] = useState(null);
    const [hasScanned, setHasScanned] = useState(false);
    const [emotions, setEmotions] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isScanning && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isScanning]);

    useEffect(() => {
        const fetchEmotionsData = async () => {
            try {
                const { data } = await Axios.get("/emotions");

                console.log("emotions:", data);

                setEmotions(data);
            } catch (error) {
                console.error("Error fetching emotions:", error);
            }
        };

        fetchEmotionsData();
    }, []);

    const sendChat = async (data) => {
        try {
            const { absence, student } = data;
            const status = absence.status == "entry" ? "Masuk" : "Pulang";
            const keterangan = absence.late ? "Terlambat" : "Tepat Waktu";

            const msg = `*SMK 12369 HONGKONG*\nAbsensi Siswa, ${absence.date}\n\nAbsensi : *${status}*\nNIS : ${student.nis}\nNama Siswa : ${student.name}\nKelas : ${student.className}\nJam Absen : ${absence.time}\nKeterangan : ${keterangan}\n\n_Note: Jangan membalas pesan ini, ini adalah pesan otomatis yang dikirim oleh Sistem Aplikasi Absensi Siswa._`;

            const response = await Axios.post("/chat/send", {
                phone: "6281247026219",
                chat: msg,
            });

            console.log("chat data:", response);
        } catch (error) {
            console.log("Error sending chat", error);
        }
    };

    const handleScanned = async (e) => {
        e.preventDefault();

        try {
            const { data } = await Axios.post("/report/attendances/scan", {
                barcode: inputRef.current.value,
                timestamp: new Date().getTime(),
            });
            console.log("🚀 ~ handleScanned ~ data:", data);

            // inputRef.current.value = "";

            setScanResult(data);
            setHasScanned(true);

            // if (data.success) {
            //     fetchData();
            //     sendChat(data);
            // }

            // setTimeout(() => {
            //     if (data.success && data.absence.status === "entry") {
            //         return setOpenModal(true);
            //     }

            //     setHasScanned(false);
            // }, 3000);
        } catch (error) {
            console.log("Error hitting endpoint:", error);
        }
    };

    const handleSend = async (selectedEmotions, worryNeeds) => {
        try {
            const { data } = await Axios.post("/reports/emotion", {
                studentId: scanResult.student.id,
                classId: scanResult.student.classId,
                firstEmotion: selectedEmotions[0],
                secondEmotion: selectedEmotions[1],
                thirdEmotion: selectedEmotions[2],
                worryNeeds,
            });

            console.log(data);
        } catch (err) {
            console.log("error posting data", err);
        }

        setOpenModal(false);

        setTimeout(() => setHasScanned(false), 3000);
    };

    return (
        <CoverLayout image={bgImage}>
            <EmotionModal emotions={emotions} open={openModal} handleSend={handleSend} />

            <Grid container spacing={2} style={{ display: "flex", alignItems: "stretch" }}>
                <Grid item xs={12} s={12} md={12} lg={4} xl={3}>
                    <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <MDBox py={3} px={4} textAlign="center">
                            <DateTimeDisplay dateColor={isScanning ? "error" : "info"} />

                            <MDBox>
                                <ScanButton
                                    bgcolor={isScanning ? "error" : "info"}
                                    canEffect={!isScanning}
                                    toggleScanning={() => setIsScanning(!isScanning)}
                                >
                                    <Icon fontSize="large">
                                        {isScanning ? "pause" : "play_arrow"}
                                    </Icon>
                                    &nbsp; {isScanning ? "Selesai" : "Mulai"} Scan
                                </ScanButton>
                            </MDBox>
                        </MDBox>
                    </Card>
                </Grid>
                <Grid item xs={12} s={12} md={12} lg={8} xl={9}>
                    <Card style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <MDBox py={2} px={4} style={{ height: "100%" }}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} s={12} md={12} lg={12} xl={7}>
                                    <MDBox component="form" onSubmit={handleScanned}>
                                        <MDBox display="flex" alignItems="center" gap={1}>
                                            <MDTypography
                                                component="img"
                                                src={ScanIcon}
                                                width={55}
                                            />
                                            <MDTypography variant="h5" color="dark">
                                                Absen Scan QR Code
                                            </MDTypography>
                                        </MDBox>

                                        <MDBox mt={2}>
                                            <MDInput
                                                ref={(node) => {
                                                    if (node) {
                                                        inputRef.current =
                                                            node.getElementsByTagName("input")[0];
                                                    }
                                                }}
                                                type="text"
                                                label="Scan ID"
                                                variant="standard"
                                                fullWidth
                                                autoComplete={false}
                                                disabled={!isScanning}
                                            />
                                        </MDBox>

                                        <ScanResult result={scanResult} />
                                    </MDBox>
                                </Grid>
                                <Grid item xs={12} s={12} md={12} lg={12} xl={5}>
                                    <NewestAbsences />
                                </Grid>
                            </Grid>
                        </MDBox>
                    </Card>
                </Grid>
            </Grid>
        </CoverLayout>
    );
}

export default Scan;
