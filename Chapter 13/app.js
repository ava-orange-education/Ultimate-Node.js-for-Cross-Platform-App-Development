const express = require('express');
const app = express();
const PORT = 3000;

const debug = require('debug')('myapp');

// loops example, using /employees route
app.get('/employees', (req, res) => {
    const query = req.query;
    console.log(query)
    debug('This is request query params', query);
    const employees = [{
            id: 1,
            name: "Ajay Sharma",
            salary: 20000,
            age: 30,
            doj: "12-12-2000"
        },
        {
            id: 2,
            name: "John wick",
            salary: 20000,
            age: 30,
            doj: "12-12-2000"
        }
    ];
    let filtered = [];

    if (query) {
        if (query.name) {
            filtered = employees.filter(item => item.name.indexOf(query.name) >= 0);
        } else if (query.id) {
            filtered = employees.filter(item => item.id == query.id);
        } else {
            filtered = employees
        }
    }

    res.json({
        filtered
    });
});

app.listen(PORT, () => debug('listening on port ' + PORT));

