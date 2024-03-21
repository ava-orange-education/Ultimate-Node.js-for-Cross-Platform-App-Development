const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// setting the templating engine on the app.
app.set('view engine', 'ejs');

// setting path to views folder
app.set('views', path.join(__dirname, '/views')); 


app.get('/', (req, res) => {
    res.render('home.ejs', {
        msg: "Hello World !!"
    }); 
});

// loops example, using /cats route
app.get('/employees', (req, res) => {
    const employees = [{
            name: "Ajay Sharma",
            salary: 20000,
            age: 30,
            doj: "12-12-2000"
        },
        {
            name: "John wick",
            salary: 20000,
            age: 30,
            doj: "12-12-2000"
        }
    ];

    res.render('employeeList.ejs', {
        employees
    });
});

app.listen(PORT, () => console.log('listening on port ' + PORT));