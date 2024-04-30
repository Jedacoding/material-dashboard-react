import React from "react";
import { Grid, Typography, Table, TableCell, TableRow } from "@mui/material";
import MDBox from "components/MDBox";

function StudentDetail({ student }) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <MDBox style={{ height: "100%", width: "100%" }}>
                    <img
                        src="https://t3.ftcdn.net/jpg/02/33/96/20/360_F_233962025_akhb1vAIu4GdHARPsRBJzlV9B9s4oXYE.jpg"
                        alt={student.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </MDBox>
            </Grid>
            <Grid item>
                <Typography variant="h3" component="h1">
                    {student.name}
                </Typography>
                <Typography variant="h3" component="h1">
                    {student.nis}
                </Typography>

                <Table>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Nama
                        </TableCell>
                        <TableCell>:</TableCell>
                        <TableCell component="th" scope="row">
                            {student.name}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Umur
                        </TableCell>
                        <TableCell>:</TableCell>
                        <TableCell component="th" scope="row">
                            {student.age} Tahun
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Kelas
                        </TableCell>
                        <TableCell>:</TableCell>
                        <TableCell component="th" scope="row">
                            {student.className}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Jenis Kelamin
                        </TableCell>
                        <TableCell>:</TableCell>
                        <TableCell component="th" scope="row">
                            {student.gender}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            TTL
                        </TableCell>
                        <TableCell>:</TableCell>
                        <TableCell component="th" scope="row">
                            {student.birth}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            Telfon
                        </TableCell>
                        <TableCell>:</TableCell>
                        <TableCell component="th" scope="row">
                            {student.phone}
                        </TableCell>
                    </TableRow>
                </Table>
            </Grid>
        </Grid>
    );
}

export default StudentDetail;
