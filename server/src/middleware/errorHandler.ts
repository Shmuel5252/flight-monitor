import { Request, Response, NextFunction } from 'express';

interface AppError extends Error {
    statusCode?: number;
}

const errorHandler = (
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const status = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error(`Error: ${status}: ${message}`);

    res.status(status).json({
        error: message,
    });
};

export default errorHandler;