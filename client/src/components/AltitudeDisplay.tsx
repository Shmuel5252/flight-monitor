import { useState } from 'react';

interface Props {
    altitude: number;
}

const AltitudeDisplay = ({ altitude }: Props) => {
    const [mode, setMode] = useState<"text" | "visual">("visual");

    const percentage = (altitude / 3000) * 100;

    return (
        <div className="display-container">

            <div className="mode-buttons">
                <button
                className={mode === "text" ? "active" : ""}
                 onClick={() => setMode("text")}>
                    TEXT
                </button>
                <button
                className={mode === "visual" ? "active" : ""}
                 onClick={() => setMode("visual")}>
                    VISUAL</button>
            </div>

            {mode === "text" && (
                <div className="text-display">
                    <p>Altitude</p>
                    <p>{altitude}</p>
                </div>
            )}

            {mode === "visual" && (
                <div className="visual-display">
                    <div className="scale">
                        <span>3000</span>
                        <span>2000</span>
                        <span>1000</span>
                        <span>0</span>
                    </div>

                    <div className="bar-container">
                        <div className="bar-fill"
                        style={{ height: `${percentage}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};  

export default AltitudeDisplay;
