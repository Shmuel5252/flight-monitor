import { useState } from "react";
import { saveFlightData } from "../api/flightApi";
import type { FlightData } from "../api/flightApi";

interface Props {
    onDataSaved: (data: FlightData) => void;
}

const InputForm = ({ onDataSaved }: Props) => {
    const [altitude, setAltitude] = useState<number>(0);
    const [his, setHis] = useState<number>(0);
    const [adi, setAdi] = useState<number>(0);
    const [error, setError] = useState<string>("");

    const handleSubmit = async () => {
        setError("");

        if (altitude < 0 || altitude > 3000) {
            setError("Altitude must be between 0 and 3000");
            return;
        }
        if (his < 0 || his > 360) {
            setError("HIS must be between 0 and 360");
            return;
        }
        if (adi < -100 || adi > 100) {
            setError("ADI must be between -100 and 100");
            return;
        }

        try {
            const data: FlightData = { altitude, his, adi };
            await saveFlightData(data);

            onDataSaved(data);
        }catch (err) {
            setError("Failed to save data. Check server connection.");
            }
    };

    return (
        <div className="input-form">
            <div className="field">
                <label>Altitude:</label>
                <input
                    type="number"
                    value={altitude}
                    onChange={(e) => setAltitude(Number(e.target.value))}
                />
            </div>
            <div className="field">
                <label>HIS:</label>
                <input
                    type="number"
                    value={his}
                    onChange={(e) => setHis(Number(e.target.value))}
                />
            </div>
            <div className="field">
                <label>ADI:</label>
                <input
                    type="number"
                    value={adi}
                    onChange={(e) => setAdi(Number(e.target.value))}
                />
            </div>
            {error && <div className="error">{error}</div>}
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
};

export default InputForm;
