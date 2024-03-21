if (mongoose.Types.ObjectId.isValid(id)) {
    Employee.findByIdAndUpdate(id, {
        $set: {
            name: employee.name
        }
    }, {
        new: true
    }).then((docs) => {
        if (docs) {
            resolve({
                success: true,
                data: docs
            });
        } else {
            reject({
                success: false,
                data: "no such employee exist"
            });
        }
    }).catch((err) => {
        reject(err);
    })
} else {
    reject({
        success: "false",
        data: "provide correct key"
    });
}


Employee.update({_id:id},{$set:{name:employee.name,state:employee.state}},
    {multi:true,new:true})
     .then((docs)=>{
       if(docs) {
         resolve({success:true,data:docs});
       } else {
         reject({success:false,data:"no such employee exist"});
       }
    }).catch((err)=>{
       reject(err);
    })
    