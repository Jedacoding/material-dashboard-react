import "./Clock.css";

export default function Clock({ hours, minutes, seconds, color }) {
    const rotate = {
        hours: hours * 30 + Math.round(minutes / 12) + "deg",
        minutes: minutes * 6 + "deg",
        seconds: seconds * 6 + "deg",
    };

    const rotation = (degrees) => ({ transform: `rotateZ(${degrees})` });

    return (
        <div id="clock">
            <div className="hour-hand" style={rotation(rotate.hours)}></div>
            <div className="min-hand" style={rotation(rotate.minutes)}></div>
            <div className="sec-hand" style={rotation(rotate.seconds)}></div>

            <span className="twelve">12</span>
            <span className="one">1</span>
            <span className="two">2</span>
            <span className="three">3</span>
            <span className="four">4</span>
            <span className="five">5</span>
            <span className="six">6</span>
            <span className="seven">7</span>
            <span className="eight">8</span>
            <span className="nine">9</span>
            <span className="ten">10</span>
            <span className="eleven">11</span>
        </div>
    );
}
