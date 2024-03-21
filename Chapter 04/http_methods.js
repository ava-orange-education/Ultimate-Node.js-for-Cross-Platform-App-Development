const http = require("http");




const app = http.createServer(function (req, res) {

});

// returns the list of students
app.get('/students', function (req, res) {

    res.json(students);

});

let students = [];

// add student
app.post("/students", function (req, res) {
    var student = req.body;

    students.push(student);

    res.json({ message: "Record Added" });
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

// update student by id
app.put("/students/:id", function (req, res) {
    var id = req.params.id;

    var student = req.body;

    // updating user with the specific id
    for (var i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            students[i] = student;
            break;
        }
    }

    res.json({ message: "Record Updated" });
});

// patch resource

app.patch("/students/:id", function (req, res) {
    var id = req.params.id;
    var student = req.body;
      
    for (var i = 0; i < students.length; i++) {
      if (students[i].id == id) {
        
      // replacing only specific properties 
        for (var key in student) {
          students[i][key] = student[key];
        }
        break;
          
      }
    }
    res.json({ message: "Record Updated using patch" });
  });

// deleting ressource
app.delete("/students/:id", function (req, res) {
    var id = req.params.id;
      
    for (var i = 0; i < students.length; i++) {
      if (students[i].id == id) {
        students.splice(i, 1);
        break;
      }
    }
      
    res.json({ message: "Record Deleted" });
  });