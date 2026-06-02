import { useState } from 'react';
import InputForm from './InputForm';
import AltitudeDisplay from './AltitudeDisplay';
import HISDisplay from './HISDisplay';
import ADIDisplay from './ADIDisplay';
import type { FlightData } from '../api/flightApi';

const Dashboard = () => {

    const [flightData, setFlightData] = useState<FlightData | null>(null);
    const [mode, setMode] = useState<"text" | "visual">("visual");
    const [showForm, setShowForm] = useState<boolean>(false);

    return (
        <div className="dashboard">
            <h1>Flight Monitor</h1>

            <div className="mode-buttons">
                <button className={mode === "text" ? "active" : ""}
                 onClick={() => setMode("text")}>
                TEXT
                </button>
                <button className={mode === "visual" ? "active" : ""}
                 onClick={() => setMode("visual")}>
                    VISUAL
                </button>
                <button onClick={() => setShowForm(!showForm)}>+</button>
            </div>

            {showForm && <InputForm onDataSaved={(data) => {
                setFlightData(data);
                setShowForm(false);
            }} onClose={() => setShowForm(false)} />}

            <div className="displays">
                <AltitudeDisplay altitude={flightData?.altitude ?? 0} mode={mode} />
                <HISDisplay his={flightData?.his ?? 0} mode={mode} />
                <ADIDisplay adi={flightData?.adi ?? 0} mode={mode} />
            </div>
        </div>
    );
};

export default Dashboard;