import React from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TotalAttendance from "layouts/dashboard/components/TotalAttendance";
import { formatDate } from "utils/time";

function DailyAttendance({ cards }) {
    return (
        <Card>
            <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
            >
                <MDTypography variant="h6" color="white">
                    Absensi Siswa Hari Ini
                </MDTypography>
                <MDTypography variant="h6" fontSize={14} color="white" fontWeight="light">
                    {formatDate(new Date())}
                </MDTypography>
            </MDBox>
            <MDBox pt={3} display="flex" justifyContent="space-between" padding="1rem 2rem">
                {cards.map((card, idx) => (
                    <TotalAttendance title={card.title} count={card.count} key={idx} />
                ))}
            </MDBox>
        </Card>
    );
}

DailyAttendance.defaultProps = {
    cards: [],
};

export default DailyAttendance;
