const EmployeeModel = require('../model/employee');

// Create and Save a new employee
exports.create = async (req, res) => {
    if (!req.body.email && !req.body.firstName && !req.body.lastName && !req.body.phone) {
        res.status(400).send({ message: "Content can not be empty!" });
    }
    
    const employee = new EmployeeModel({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    });
    
    await employee.save().then(data => {
        res.send({
            message:"Employee created successfully!!",
            employee:data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating employee"
        });
    });
};

// Retrieve all employees from the database.
exports.findAll = async (req, res) => {
    try {
        const employee = await EmployeeModel.find();
        res.status(200).json(employee);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
};

// Find a single Employee with an id
exports.findOne = async (req, res) => {
    try {
        const employee = await EmployeeModel.findById(req.params.id);
        res.status(200).json(employee);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

// Update a employee by the id in the request
exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    await EmployeeModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Employee not found.`
            });
        }else{
            res.send({ message: "Employee updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};

// Delete a employee with the specified id in the request
exports.remove = async (req, res) => {
    await EmployeeModel.findByIdAndRemove(req.params.id).then(data => {
        if (!data) {
          res.status(404).send({
            message: `Employee not found.`
          });
        } else {
          res.send({
            message: "Employee deleted successfully!"
          });
        }
    }).catch(err => {
        res.status(500).send({
          message: err.message
        });
    });
};

