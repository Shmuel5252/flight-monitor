import { Request, Response, NextFunction } from 'express';

const validateFlight = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { altitude, his, adi } = req.body;

    if (altitude === undefined || his === undefined || adi === undefined) {
        res.status(400).json({ error: "All fields are required: altitude, his, adi" });
        return;
}

if (altitude < 0 || altitude > 3000) {
    res.status(400).json({ error: "Altitude must be between 0 and 3000" });
    return;
}

if (his < 0 || his > 360) {
    res.status(400).json({ error: "HIS must be between 0 and 360" });
    return;
}

if (adi < -100 || adi > 100) {
    res.status(400).json({ error: "ADI must be between -100 and 100" });
    return;
}

next();
};

export default validateFlight;