import { useState } from 'react';
import InputForm from './InputForm';
import AltitudeDisplay from './AltitudeDisplay';
import HISDisplay from './HISDisplay';
import ADIDisplay from './ADIDisplay';
import type { FlightData } from '../api/flightApi';

const Dashboard = () => {

    const [flightData, setFlightData] = useState<FlightData>({
        altitude: 0,
        his: 0,
        adi: 0
    });

    return (
        <div className="dashboard">
            <h1>Flight Monitor</h1>

            <InputForm onDataSaved={setFlightData} />

            <div className="displays">
                <AltitudeDisplay altitude={flightData.altitude} />
                <HISDisplay his={flightData.his} />
                <ADIDisplay adi={flightData.adi} />
            </div>
        </div>
    );
};

export default Dashboard;