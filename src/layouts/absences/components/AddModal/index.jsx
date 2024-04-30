import { Modal, Box, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import { useState } from "react";
import Axios from "helpers/axios";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function AddModal({ open, handleClose }) {
    const [nis, setNis] = useState("");
    const [kehadiran, setKehadiran] = useState(0);
    const [entryTime, setEntryTime] = useState("07:00:00");
    const [leaveTime, setLeaveTime] = useState("10:00:00");
    const [reason, setReason] = useState("");

    const handleSubmit = async () => {
        handleClose();

        // try {
        //     let params = {
        //         nis,
        //         attendanceId: kehadiran,
        //         entryTime: kehadiran == 1 ? entryTime : null,
        //         leaveTime: kehadiran == 1 ? leaveTime : null,
        //         caption: reason,
        //     };

        //     const { data } = await Axios.post("/reports/presence", params);

        //     console.log(data);

        //     handleClose();
        // } catch (err) {
        //     console.log("error fetching data", err);
        // }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <MDBox mb={2}>
                    <MDInput
                        style={{ width: "100%" }}
                        label="NIS"
                        type="text"
                        variant="standard"
                        value={nis}
                        onChange={(e) => setNis(e.target.value)}
                        autoFocus
                    />
                </MDBox>

                <MDBox mb={2}>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={(e) => setKehadiran(e.target.value)}
                        >
                            <FormControlLabel
                                value={1}
                                control={<Radio />}
                                label={
                                    <MDTypography variant="h6" fontWeight="regular" color="success">
                                        Hadir
                                    </MDTypography>
                                }
                            />
                            <FormControlLabel
                                value={2}
                                control={<Radio />}
                                label={
                                    <MDTypography variant="h6" fontWeight="regular" color="warning">
                                        Sakit
                                    </MDTypography>
                                }
                            />
                            <FormControlLabel
                                value={3}
                                control={<Radio />}
                                label={
                                    <MDTypography variant="h6" fontWeight="regular" color="info">
                                        Izin
                                    </MDTypography>
                                }
                            />
                            <FormControlLabel
                                value={4}
                                control={<Radio />}
                                label={
                                    <MDTypography variant="h6" fontWeight="regular" color="error">
                                        Tanpa Keterangan
                                    </MDTypography>
                                }
                            />
                        </RadioGroup>
                    </FormControl>
                </MDBox>

                <MDBox mb={2} display="flex" gap={3}>
                    <MDBox flex={1}>
                        <MDInput
                            style={{ width: "100%" }}
                            label="Jam masuk"
                            value={entryTime}
                            onChange={(e) => setEntryTime(e.target.value)}
                            type="time"
                            variant="standard"
                            format="HH:mm:ss"
                        />
                    </MDBox>

                    <MDBox flex={1}>
                        <MDInput
                            style={{ width: "100%" }}
                            label="Jam pulang"
                            value={leaveTime}
                            onChange={(e) => setLeaveTime(e.target.value)}
                            type="time"
                            variant="standard"
                            format="HH:mm:ss"
                        />
                    </MDBox>
                </MDBox>

                <MDBox mb={2}>
                    <MDInput
                        label="Alasan..."
                        style={{ width: "100%" }}
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        variant="standard"
                        multiline
                        rows={5}
                    />
                </MDBox>

                <MDBox mt={3}>
                    <MDButton
                        size="large"
                        color="success"
                        style={{
                            backgroundColor: "#66af23",
                            borderColor: "#66af23",
                            borderRadius: 4,
                            boxShadow: "none",
                            fontWeight: 500,
                            padding: "10px 40px",
                        }}
                        onClick={handleSubmit}
                    >
                        Simpan
                    </MDButton>
                </MDBox>
            </Box>
        </Modal>
    );
}
