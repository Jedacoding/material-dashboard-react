import { Modal, Box, FormGroup, FormControlLabel, Checkbox, Icon } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function NeedHelpModal({ open, handleClose }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <MDBox textAlign="right" mt={-3} mr={-3}>
                    <MDButton iconOnly size="large" onClick={handleClose}>
                        <Icon>close</Icon>
                    </MDButton>
                </MDBox>

                <MDBox mt={-3}>
                    <MDTypography variant="h5" color="info" component="h2">
                        Apa yang terjadi?
                    </MDTypography>
                </MDBox>

                <MDBox mt={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Kekhawatiran terkait COVID-19"
                        />
                        <FormControlLabel control={<Checkbox />} label="Masalah dengan teman" />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Masalah keluarga di rumah"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Stres akibat tuntutan sekolah"
                        />
                        <FormControlLabel control={<Checkbox />} label="Lainnya" />
                    </FormGroup>
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
                    >
                        Kirim
                    </MDButton>
                </MDBox>
            </Box>
        </Modal>
    );
}
