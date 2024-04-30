import React from "react";
import "./RateCard.css";
import { Card, CardContent } from "@mui/material";
import MDTypography from "components/MDTypography";

export default function RateCard({ rating }) {
    return (
        <Card id="rate-card">
            <CardContent className="rate">
                <MDTypography variant="h6" fontWeight="bold">
                    {rating}
                </MDTypography>
            </CardContent>
        </Card>
    );
}
