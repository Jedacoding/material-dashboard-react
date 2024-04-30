import React, { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import SuccessAnimation from "assets/images/icons/success.gif";

export default function ScanResult({ result }) {
    const [show, setShow] = useState(false);
    const styles = {
        transition: ".2s",
        opacity: show ? 1 : 0,
    };

    useEffect(() => {
        setShow(true);

        setTimeout(() => {
            setShow(false);
        }, 3000);
    }, [result]);

    return (
        <MDBox pt={4} textAlign="center" style={styles}>
            {result && (
                <>
                    <img src={SuccessAnimation} width={100} />

                    {result.success ? (
                        <MDBox>
                            <MDTypography variant="h2">{result?.student.name}</MDTypography>
                            <MDTypography variant="h2" fontWeight="light">
                                {result?.student.nis}
                            </MDTypography>
                        </MDBox>
                    ) : (
                        <MDTypography variant="h2" fontWeight="light">
                            {result?.errors[0].msg}
                        </MDTypography>
                    )}
                </>
            )}
        </MDBox>
    );
}
