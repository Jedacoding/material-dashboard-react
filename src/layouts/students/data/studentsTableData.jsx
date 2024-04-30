import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
import { Avatar } from "@mui/material";

function data(students = [], handleOpenModal = () => {}) {
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
            { Header: "No", accessor: "no", align: "left", width: "0%" },
            { Header: "Nama Siswa", accessor: "name", align: "left" },
            { Header: "Jeni Kelamin", accessor: "gender", align: "center" },
            { Header: "Kelas", accessor: "class", align: "center" },
            { Header: "HP", accessor: "phone", align: "center" },
            { Header: "Aksi", accessor: "action", align: "center" },
        ],
        rows: students.map((student, uid) => ({
            no: <Typography>{uid + 1}</Typography>,
            name: <Profile image={student.image} name={student.name} />,
            gender: <Typography>{student.gender}</Typography>,
            class: <Typography>{student.class}</Typography>,
            phone: <Typography>{student.phone}</Typography>,
            action: (
                <MDButton
                    onClick={() => handleOpenModal(student.id)}
                    variant="outlined"
                    size="small"
                    color="info"
                >
                    Lihat Detil
                </MDButton>
            ),
        })),
    };
}

export default data;
