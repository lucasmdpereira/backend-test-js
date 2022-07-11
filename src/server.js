import express from 'express';
import { routes } from './controller/routes.js';

const app    = express();

app.use(express.json());
app.use(routes)

app.listen(3000, () => 'server running on port 3000');