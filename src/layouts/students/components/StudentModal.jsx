import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import StudentDetail from "./StudentDetail";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    background: "white",
    boxShadow: theme.shadows[24],
    padding: theme.spacing(2),
}));

export default function StudentModal({ student, open, handleClose }) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledBox>
                {student ? (
                    <StudentDetail student={student} />
                ) : (
                    <Typography>Loading...</Typography>
                )}

                <Link to="/absen/catat">
                    <MDButton
                        variant="outlined"
                        style={{ marginTop: 10 }}
                        size="small"
                        color="info"
                    >
                        Catat Kehadiran
                    </MDButton>
                </Link>
            </StyledBox>
        </Modal>
    );
}
