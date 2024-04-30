import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import TimePicker from "./TimePicker";
import MDTypography from "components/MDTypography";

export default function ClassSchedule({ currentSchedule, handleSetCurrentSchedule }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    <TableRow sx={{ td: { fontWeight: "bold" } }}>
                        <TableCell>Hari</TableCell>
                        <TableCell align="center">Entry Time</TableCell>
                        <TableCell align="center">Aktif</TableCell>
                    </TableRow>
                    {currentSchedule.map((schedule, arrayId) => (
                        <TableRow key={schedule.id}>
                            <TableCell style={{ textTransform: "capitalize" }}>
                                {schedule.day}
                            </TableCell>
                            <TableCell align="center">
                                <TimePicker
                                    id={arrayId}
                                    time={schedule.entryTime}
                                    setTime={(time) =>
                                        handleSetCurrentSchedule(arrayId, "entryTime", time)
                                    }
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Switch
                                    checked={schedule.isActive}
                                    onChange={() =>
                                        handleSetCurrentSchedule(
                                            arrayId,
                                            "isActive",
                                            !schedule.isActive
                                        )
                                    }
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {currentSchedule.length === 0 && (
                <MDTypography
                    variant="h6"
                    textAlign="center"
                    color="error"
                    py={2}
                    fontWeight="light"
                >
                    No Data Found.
                </MDTypography>
            )}
        </TableContainer>
    );
}
