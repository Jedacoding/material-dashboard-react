import MDBox from "components/MDBox";
import AbsenceCard from "examples/Cards/AbsenceCard";

export default function data(data) {
    const modifiyCaption = (isEntry, entryTime, leaveTime, caption) => {
        const status = isEntry ? "masuk" : "pulang";
        const time = isEntry ? entryTime.slice(0, 5) : leaveTime.slice(0, 5);
        const modifiedCaption = (caption = isEntry ? `, ${caption}` : "");

        return `${status} sekolah pada pukul ${time}${modifiedCaption}.`;
    };

    const cards = data.map(({ id, Student, entryTime, leaveTime, caption }) => {
        const isEntry = leaveTime ? false : true;
        const modifiedCaption = modifiyCaption(isEntry, entryTime, leaveTime, caption);

        return (
            <MDBox key={id}>
                <AbsenceCard
                    avatar={Student.image}
                    name={Student.name}
                    isEntry={isEntry}
                    caption={modifiedCaption}
                />
            </MDBox>
        );
    });

    return cards;
}
