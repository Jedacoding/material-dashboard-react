import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

function data(classes = [], handleOpenModal = () => {}) {
    const Typography = ({ children, fontWeight = "medium" }) => (
        <MDTypography variant="button" fontWeight={fontWeight}>
            {children}
        </MDTypography>
    );

    return {
        columns: [
            { Header: "No", accessor: "no", align: "center", width: "0%" },
            { Header: "Kelas", accessor: "class", align: "center" },
            { Header: "Jurusan", accessor: "major", align: "center" },
            { Header: "Aksi", accessor: "action", align: "center", width: "20%" },
        ],
        rows: classes.map(({ id, name, major }, uid) => ({
            no: <Typography>{uid + 1}</Typography>,
            class: <Typography>{name}</Typography>,
            major: <Typography>{major}</Typography>,
            action: (
                <MDButton
                    onClick={() => handleOpenModal(id)}
                    variant="outlined"
                    size="small"
                    color="success"
                >
                    Jadwal
                </MDButton>
            ),
        })),
    };
}

export default data;
