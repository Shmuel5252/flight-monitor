interface Props {
    his: number;
    mode: "text" | "visual";
}

const HISDisplay = ({ his, mode }: Props) => {

    return (
        <div className="display-container">

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

