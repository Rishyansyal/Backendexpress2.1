import { Request, Response, NextFunction } from 'express';

// Create an item
export const home = (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World');
};