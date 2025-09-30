import express from 'express';
import itemRoutes from './routes/itemRoutes';
import homeRoutes from './routes/homeRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);
app.use("/", homeRoutes);
app.use

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;