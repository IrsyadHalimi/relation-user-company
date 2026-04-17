/** Express application setup */
import express from 'express';
import cookieParser from 'cookie-parser';
import relationRoutes from './routes/relation.route';

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/relation', relationRoutes);

export default app;