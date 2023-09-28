const express = require('express');
const route = require('./routes')
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require("./swagger.json")
const app = express();


const corsOptions = {
  origin: 'https://cine-catalog-api-q9db-git-main-diego-rogers-projects.vercel.app/api-docs/', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: false, 
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(route)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
module.exports = app;