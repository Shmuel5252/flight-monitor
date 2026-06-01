import { useState } from 'react';

interface Props {
    his: number;
}

const HISDisplay = ({ his }: Props) => {
    const [mode, setMode] = useState<"text" | "visual">("visual");

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
                    VISUAL
                </button>
            </div>

            {mode === "text" && (
                <div className="text-display">
                    <p>HIS</p>
                    <p>{his}</p>
                </div>
            )}

            {mode === "visual" && (
                <div className="his-visual">

                    <div 
                    className="compass-ring"
                    style={{ transform: `rotate(${-his}deg)` }}>

                    <span className="compass-label top">0</span>
                    <span className="compass-label right">90</span>
                    <span className="compass-label bottom">180</span>
                    <span className="compass-label left">270</span>
                 </div>

                 <div className="compass-needle" />

                </div>
            )}
        </div>
    );
};

export default HISDisplay;

