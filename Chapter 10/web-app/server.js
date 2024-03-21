import express from 'express';
import { urlencoded, json } from 'body-parser';
import Connection from './connection';
const EmployeeRoute = require('./app/routes/employee');

const app = express();

app.use(urlencoded({ extended: true }));

app.use(json());

app.use('/employee',EmployeeRoute);

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});

app.listen(3000, () => {
    // connecting to database once server is running
    Connection();
    console.log("Server is listening at http://localhost:3000");
});

node.js server