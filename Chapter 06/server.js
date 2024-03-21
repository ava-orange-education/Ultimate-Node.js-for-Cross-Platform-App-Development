const express = require("express");
const Employee = require("./employee_schema");
const Connection = require("./connection");

// Create an express application.
const app = express();
app.use(express.json());

// Create a POST endpoint to receive data from user.
app.post("/", async (req, res) => {
    // Destructuring data from body of request.
    const {
        name,  
        dob,
        address,
        phone
    } = req.body;

    try {
        // Create a new employee.
        const employee = new Employee({
            name: name,
            dob: dob,
            address: address,
            phone: phone
        });

        // Insert the employee in the database.
        await employee.save();

        res.send("Employee Saved Successfully.");
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

app.listen(3000, function (err) {
    if (err) console.log(err);
    Connection();
    console.log("Server listening on http://localhost:3000");
});

