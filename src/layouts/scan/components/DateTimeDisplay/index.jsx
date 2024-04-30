import { useState, useEffect } from "react";
import "./DateTimeDisplay.css";
import Clock from "./components/Clock";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { formatDate, formatNumber } from "utils/time";

export default function DateTimeDisplay({ dateColor = "info" }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [formatHours, setFormatHours] = useState({});

    useEffect(() => {
        const dateInterval = setInterval(() => setCurrentDate(new Date()), 1000);

        return () => clearInterval(dateInterval);
    }, []);

    return (
        <MDBox pb={2}>
            <MDBox mb={1} textAlign="center">
                <MDTypography display="block" variant="button" fontWeight="light">
                    {formatDate(currentDate)}
                </MDTypography>

                <MDTypography
                    className={`${dateColor === "error" && "fadeInOut"}`}
                    variant="h3"
                    color={dateColor}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 0.7,
                    }}
                >
                    {formatNumber(currentDate.getHours())}
                    <MDTypography component="span">:</MDTypography>
                    {formatNumber(currentDate.getMinutes())}
                    <MDTypography component="span">:</MDTypography>
                    {formatNumber(currentDate.getSeconds())}
                </MDTypography>
            </MDBox>
            <MDBox mb={1}>
                <Clock
                    hours={currentDate.getHours()}
                    minutes={currentDate.getMinutes()}
                    seconds={currentDate.getSeconds()}
                    color="info"
                />
            </MDBox>
        </MDBox>
    );
}
