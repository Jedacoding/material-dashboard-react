import React, { useState } from "react";
import { Modal } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Question from "../Question";
import EmotionCard from "../EmotionCard";
import NeedHelpModal from "../NeedHelpModal";
import RateCard from "../RateCard";
import MDTypography from "components/MDTypography";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1130,
    backgroundColor: "#d1f2eb",
    boxShadow: 24,
    p: 4,
    border: "none",
    outline: "none",
};

function EmotionModal({ open, emotions, handleSend }) {
    const [selectedEmotions, setSelectedEmotions] = useState([]);
    const [currentEmotion, setCurrentEmotion] = useState(-1);
    const [needHelpOpen, setNeedHelpOpen] = useState(false);

    const handleSelectEmotion = ({ id, isNegative }) => {
        const newEmotionState = isNegative === 1 ? 0 : 1;

        // Reset selected emotions if the current emotion state changes
        if (currentEmotion !== undefined && currentEmotion !== newEmotionState) {
            setSelectedEmotions([id]); // Langsung tambahkan emosi baru setelah reset
            setCurrentEmotion(newEmotionState);
        } else {
            // Toggle emotion in the selected list
            if (selectedEmotions.includes(id)) {
                setSelectedEmotions((prev) => {
                    const newEmotions = prev.filter((e) => e !== id);

                    if (newEmotions.length === 0) {
                        setCurrentEmotion(-1);
                    }
                    return newEmotions;
                });
            } else if (selectedEmotions.length < 3) {
                setSelectedEmotions((prev) => [...prev, id]);
                setCurrentEmotion(newEmotionState);
            }
        }
    };

    const handleClick = () => {
        const worryNeeds = !currentEmotion;

        handleSend(selectedEmotions, worryNeeds);
        setSelectedEmotions([]);
        setCurrentEmotion(-1);
    };

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <MDBox sx={style}>
                <NeedHelpModal open={needHelpOpen} handleClose={() => setNeedHelpOpen(false)} />

                <MDBox mb={3} display="flex" justifyContent="space-between">
                    <Question number={1} question="Bagaimana perasaan-mu hari ini?" />

                    <MDButton
                        variant="outlined"
                        color="success"
                        style={{ textTransform: "capitalize" }}
                        onClick={() => setNeedHelpOpen(true)}
                    >
                        Butuh Bantuan?
                    </MDButton>
                </MDBox>

                <MDBox display="flex" flexWrap="wrap" gap={2}>
                    {emotions.map(({ id, image, emotion, isNegative }, key) => (
                        <MDBox key={key}>
                            <EmotionCard
                                selected={selectedEmotions.includes(id)}
                                disabled={currentEmotion === isNegative}
                                handleClick={() => handleSelectEmotion({ id, isNegative })}
                                image={image}
                                emotion={emotion}
                            />
                        </MDBox>
                    ))}
                </MDBox>

                <MDBox mt={4} mb={3}>
                    <Question number={2} question="Secara keseluruhan, bagaimana kabarmu?" />
                </MDBox>

                <MDBox style={{ width: "max-content" }}>
                    <MDBox display="flex" justifyContent="space-between" mb={1}>
                        <MDTypography variant="caption">Sangat Buruk</MDTypography>
                        <MDTypography variant="caption">Sangat Baik</MDTypography>
                    </MDBox>

                    <MDBox display="flex" gap={2}>
                        {Array(10)
                            .fill()
                            .map((_, index) => (
                                <RateCard key={index} rating={index} />
                            ))}
                    </MDBox>
                </MDBox>

                <MDBox mt={3}>
                    <MDButton
                        size="large"
                        color="success"
                        style={{
                            backgroundColor: "#66af23",
                            borderColor: "#66af23",
                            borderRadius: 4,
                            boxShadow: "none",
                            fontWeight: 500,
                            padding: "10px 40px",
                        }}
                        onClick={handleClick}
                    >
                        Kirim
                    </MDButton>
                </MDBox>
            </MDBox>
        </Modal>
    );
}

export default EmotionModal;
