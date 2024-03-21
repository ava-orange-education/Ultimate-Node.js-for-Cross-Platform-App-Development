
const employee = new Employee({
    name: name,
    dob: dob,
    address: address,
    phone: phone
});

// Insert the employee in the database.
await employee.save();

Employee.collection.insert(
    [ {
        name: name,
        dob: dob,
        address: address,
        phone: phone
    },{
        name: name,
        dob: dob,
        address: address,
        phone: phone
    }]
  ) 
  
Employee.create([NewEmployee1,NewEmployee2,NewEmployee3])
  .then((data)=>{
    resolve(data);
  }).catch((err)=>{
     reject(err); 
 })

 User.find([query],[callback])

 User.findOne([query],[fieldsToReturn],[callback])

 User.findById(id,[fieldsToReturn],[callback])