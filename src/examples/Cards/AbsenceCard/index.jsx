import React from "react";
import { Card, Icon, Avatar } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";

export default function AbsenceCard({ avatar = null, name, caption, isEntry }) {
    return (
        <Card>
            <MDBox p={2} display="flex" gap={2}>
                <MDBox>
                    <Avatar alt={name} src={avatar} />
                </MDBox>

                <MDBox style={{ flex: 1 }}>
                    <MDTypography component="h5" variant="h6">
                        {name}
                    </MDTypography>
                    <MDTypography component="p" variant="caption">
                        {caption}
                    </MDTypography>
                </MDBox>
                <MDBox>
                    <MDTypography
                        display="flex"
                        alignItems="center"
                        fontWeight="regular"
                        color={isEntry ? "info" : "error"}
                        variant="caption"
                        textTransform="capitalize"
                    >
                        <Icon fontSize="small">{isEntry ? "login" : "logout"}</Icon>&nbsp;
                        {isEntry ? "masuk" : "pulang"}
                    </MDTypography>
                </MDBox>
            </MDBox>
        </Card>
    );
}
