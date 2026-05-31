import express from "express";
import cors from "cors";
import flightRoutes from "./routes/flightRoutes";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/flights", flightRoutes);

app.use(errorHandler);

export default app;