import React from "react";
import "./ScanButton.css";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

const style = {
    borderRadius: 4,
    textTransform: "capitalize",
    boxShadow: "none",
};

export default function ScanButton({ children, bgcolor = "info", scanEffect, toggleScanning }) {
    return (
        <MDButton
            id={scanEffect ? "scan_button" : undefined}
            onClick={toggleScanning}
            variant="contained"
            color={bgcolor}
            style={style}
        >
            <MDBox display="flex" color="white" position="relatif" zIndex={1}>
                {children}
            </MDBox>
        </MDButton>
    );
}
