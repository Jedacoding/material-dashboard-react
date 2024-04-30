import MDBox from "components/MDBox";
import { Avatar } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";

function data(absences = []) {
    const Typography = ({ children }) => (
        <MDTypography variant="button" fontWeight="medium">
            {children}
        </MDTypography>
    );

    const Profile = ({ image, name }) => (
        <MDBox display="flex" alignItems="center" lineHeight={1}>
            <Avatar alt={name} src={image} size="sm" />
            <MDBox ml={2} lineHeight={1}>
                <Typography>{name}</Typography>
            </MDBox>
        </MDBox>
    );

    return {
        columns: [
            { Header: "ID", accessor: "no", align: "left", width: "0%" },
            { Header: "Nama Siswa", accessor: "name", align: "left" },
            { Header: "Kelas", accessor: "class", align: "center" },
            { Header: "Jam Masuk", accessor: "entryTime", align: "center" },
            { Header: "Jam Pulang", accessor: "leaveTime", align: "center" },
            { Header: "Status", accessor: "status", align: "center" },
        ],
        rows: absences.map(({ className, major, entryTime, leaveTime, Student, status }, uid) => ({
            no: <Typography>{uid + 1}</Typography>,
            name: <Profile image={Student.image} name={Student.name} />,
            class: (
                <Typography>
                    {className} {major}
                </Typography>
            ),
            entryTime: <Typography>{entryTime}</Typography>,
            leaveTime: <Typography>{leaveTime ? leaveTime : "-"}</Typography>,
            status: (
                <MDButton
                    variant="text"
                    color={status == "hadir" ? "info" : status == "izin" ? "warning" : "primary"}
                >
                    {status}
                </MDButton>
            ),
        })),
    };
}

export default data;
