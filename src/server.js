const express = require('express');
const app    = express();
const routes = require('./controller/routes');

app.use(express.json());
app.use(routes)

app.listen(3000, () => 'server running on port 3000');