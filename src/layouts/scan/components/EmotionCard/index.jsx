import React from "react";
import "./EmotionCard.css";
import { Icon, Card, CardContent } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const style = {
    width: 40,
    height: 40,
    backgroundColor: "#2f63b6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: "50%",
    position: "absolute",
    top: "-15px",
    right: "-15px",
};

export default function EmotionCard({ image, emotion, selected, disabled, handleClick }) {
    return (
        <Card
            // id="emotion_card"
            onClick={handleClick}
            className={`${selected ? "active" : ""} ${disabled ? "disabled" : ""}`}
        >
            {selected && (
                <MDBox style={style}>
                    <Icon fontSize="medium">check</Icon>
                </MDBox>
            )}

            <CardContent className="emoji">
                <img src={`${import.meta.env.VITE_API_BASE_URL}/data/emojis/${image}`} width={65} />
            </CardContent>
            <CardContent className="emotion">
                <MDTypography variant="h6" textTransform="capitalize" fontWeight="bold">
                    {emotion}
                </MDTypography>
            </CardContent>
        </Card>
    );
}
