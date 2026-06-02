interface Props {
    altitude: number;
    mode: "text" | "visual";
}

const AltitudeDisplay = ({ altitude, mode }: Props) => {

    // זה כדי להגביל את המיקום של החץ בין 3% ל 97% כדי שלא יחרוג מהסרגל
    const position = Math.min(97, Math.max(3, (altitude / 3000) * 100));

    return (
        <div className="display-container">

            {mode === "text" && (
                <div className="text-display">
                    <p>Altitude</p>
                    <p>{altitude}</p>
                </div>
            )}

            {mode === "visual" && (
                <div className="altitude-visual">
                    <div className="altitude-scale">
                        <div>3000</div>
                        <div>2000</div>
                        <div>1000</div>
                        <div>0</div>
                    </div>
                    <div className="altitude-bar-container">
                      <div className="altitude-bar">

                        <div className="altitude-arrow"
                        style={{ bottom: `${position}%` }}/>
                         
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};  

export default AltitudeDisplay;
