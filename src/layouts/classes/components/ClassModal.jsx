import React from "react";
import { Box, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import Icon from "@mui/material/Icon";
import ClassSchedule from "./ClassSchedule";

const StyledBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    background: "white",
    boxShadow: theme.shadows[24],
    padding: theme.spacing(2),
}));

export default function ClassModal({
    currentSchedule,
    handleSetCurrentSchedule,
    handleSaveCurrentSchedule,
    open,
    alert,
    handleCloseAlert,
    handleClose,
}) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledBox>
                {alert && (
                    <MDAlert color={alert.color} dismissible onClose={handleCloseAlert}>
                        {alert.alert}
                    </MDAlert>
                )}

                {currentSchedule ? (
                    <ClassSchedule
                        currentSchedule={currentSchedule}
                        handleSetCurrentSchedule={handleSetCurrentSchedule}
                    />
                ) : (
                    <MDTypography variant="h6" textAlign="center" color="info" fontWeight="light">
                        Loading...
                    </MDTypography>
                )}

                <MDButton
                    onClick={handleSaveCurrentSchedule}
                    style={{ marginTop: 20 }}
                    variant="outlined"
                    color="info"
                >
                    <Icon>save</Icon>&nbsp;Simpan
                </MDButton>
            </StyledBox>
        </Modal>
    );
}
