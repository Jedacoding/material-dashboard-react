import React, { useEffect, useState } from "react";
import Axios from "helpers/axios";
import InfoMessage from "examples/InfoMessage";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import data from "layouts/scan/components/NewestAbsences/data";

function NewestAbsences() {
    const [newestAbsences, setNewestAbsences] = useState([]);
    const [infoMessage, setInfoMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setInfoMessage("Loading...");
                const { data } = await Axios.get("/report/attendances?limit=3");

                setNewestAbsences(data);

                if (data.length) {
                    setInfoMessage("");
                } else {
                    setInfoMessage("No Data Found.");
                }
            } catch (error) {
                console.error("Error fetching students data:", error);
                setInfoMessage(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <MDBox py={1} display="flex" flexDirection="column" gap={2}>
            <MDTypography variant="h5" color="dark">
                Absen Terbaru
            </MDTypography>

            {infoMessage && (
                <InfoMessage color={infoMessage === "Loading..." ? "info" : "error"}>
                    {infoMessage}
                </InfoMessage>
            )}

            {data(newestAbsences)}
        </MDBox>
    );
}

export default NewestAbsences;
