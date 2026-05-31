import mongoose, { Schema, Document } from "mongoose";

export interface IFlight extends Document {
    altitude: number;
    his: number;
    adi: number;
}

const FlightSchema = new Schema<IFlight>(
    {
        altitude: {
            type: Number,
            required: true,
            min: 0,
            max: 3000,
        },
        his: {
            type: Number,
            required: true,
            min: 0,
            max: 360,
        },
        adi: {
            type: Number,
            required: true,
            min: -100,
            max: 100,
        },
    },
    {
        timestamps: true,
    }
);

const Flight = mongoose.model<IFlight>("Flight", FlightSchema);

export default Flight;

