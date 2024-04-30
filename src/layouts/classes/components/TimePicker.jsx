import React, { useEffect } from "react";

function TimePicker({ id, time, setTime }) {
    useEffect(() => {
        $(".clockpicker." + id).clockpicker({
            afterDone: function () {
                const el = $(`.clockpicker.${id} input`);
                const time = el.val();

                setTime(time);
            },
        });
    }, []);

    return (
        <div
            className={"clockpicker d-flex " + id}
            data-placement="left"
            data-align="top"
            data-autoclose="true"
        >
            <input type="text" className="form-control" value={time} onChange={() => {}} />
        </div>
    );
}

export default TimePicker;
