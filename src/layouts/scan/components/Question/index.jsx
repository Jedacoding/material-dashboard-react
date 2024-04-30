import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { formatNumber } from "utils/time";

export default function Question({ number, question }) {
    return (
        <MDBox>
            <MDTypography display="flex" gap={2} alignItems="center">
                <MDTypography
                    component="span"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    color="white"
                    style={{
                        backgroundColor: "#2f63b6",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                    }}
                >
                    Q
                </MDTypography>
                <MDTypography component="span" color="black">
                    {formatNumber(number)}. <strong>{question}</strong>
                </MDTypography>
            </MDTypography>
        </MDBox>
    );
}
