import { useState } from 'react';

interface Props {
    adi: number;
}

const ADIDisplay = ({ adi }: Props) => {
    const [mode, setMode] = useState<"text" | "visual">("visual");

    const getColor = (): string => {
        if (adi >= 100) return "blue";
        if (Math.abs(adi) <= 5) return "green";
        
        const ratio = Math.abs(adi) / 100;
        const r = 0;
        const g = Math.round(255 * (1 - ratio));
        const b = Math.round(255 * ratio);
        return `rgb(${r}, ${g}, ${b})`;
    };

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
                    <p>ADI</p>
                    <p>{adi}</p>
                </div>
            )}

            {mode === "visual" && (
                <div className="adi-circle" 
                style={{ backgroundColor: getColor() }}/>
            )}

        </div>
    );
};

export default ADIDisplay;