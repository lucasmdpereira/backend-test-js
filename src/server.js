import express from 'express';
import { routes } from './controller/routes.js';

const app    = express();
const port = 3000;

app.use(express.json());
app.use(routes)

app.listen(port, () => console.log(`server running at port ${port}`));

export { app }
