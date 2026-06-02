import { useState } from "react";
import { saveFlightData } from "../api/flightApi";
import type { FlightData } from "../api/flightApi";

interface Props {
  onDataSaved: (data: FlightData) => void;
  onClose?: () => void;
}

const InputForm = ({ onDataSaved, onClose }: Props) => {
  const [altitude, setAltitude] = useState<string>("");
  const [his, setHis] = useState<string>("");
  const [adi, setAdi] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    if (altitude === "" || his === "" || adi === "") {
      setError("All fields are required");
      return;
    }
    setError("");
    const altitudeNum = Number(altitude);
    const hisNum = Number(his);
    const adiNum = Number(adi);

    // לוודא שהערכים בטווחים הנכונים כדי להימנע משגיאות בצד שרת
    if (altitudeNum < 0 || altitudeNum > 3000) {
      setError("Altitude must be between 0 and 3000");
      return;
    }
    if (hisNum < 0 || hisNum > 360) {
      setError("HIS must be between 0 and 360");
      return;
    }
    if (adiNum < -100 || adiNum > 100) {
      setError("ADI must be between -100 and 100");
      return;
    }

    try {
      const data: FlightData = {
        altitude: altitudeNum,
        his: hisNum,
        adi: adiNum,
      };
      await saveFlightData(data);

      onDataSaved(data);
    } catch (err) {
      setError("Failed to save data. Check server connection.");
    }
  };

  return (
    <div className="input-form-overlay" onClick={onClose}>
      <div className="input-form" onClick={(e) => e.stopPropagation()}>
        <div className="field">
          <label>Altitude</label>
          <input
            type="number"
            value={altitude}
            placeholder="0-3000"
            onChange={(e) => setAltitude(e.target.value)}
          />
        </div>
        <div className="field">
          <label>HIS</label>
          <input
            type="number"
            value={his}
            placeholder="0-360"
            onChange={(e) => setHis(e.target.value)}
          />
        </div>
        <div className="field">
          <label>ADI:</label>
          <input
            type="number"
            value={adi}
            placeholder="-100 to 100"
            onChange={(e) => setAdi(e.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button className="send-btn" onClick={handleSubmit}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default InputForm;
