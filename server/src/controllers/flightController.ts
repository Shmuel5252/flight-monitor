 import { Request, Response, NextFunction } from 'express';
import Flight from '../models/Flight';

export const saveFlight = async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try {
        const { altitude, his, adi } = req.body;
        
        const flight = new Flight({ altitude, his, adi });
        await flight.save();
         
        res.status(201).json({ 
            message: "Flight data saved successfully", 
            data: flight 
        });
    } catch (error) {
        next(error);
    }
};

