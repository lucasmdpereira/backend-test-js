const express = require('express');

const routes = express.Router();

routes.get("/", (request, response) => {
    return response.status(201).json({Hello: "World"})
});

module.exports = routes
