var doctordata = require('../app/schema/doctor');

exports.createDoctor = function(req, res) {
console.log(req.body);
var newDetails={
    name:req.body.name,
    qualification: req.body.qualification,
    specialization: req.body.specialization,
    address:req.body.address,
    patientDetails:[]
};
if(req.body.patientDetails){
     for (var i = 0; i < req.body.patientDetails.length; i++) {
        newDetails.patientDetails.push({
            name:req.body.patientDetails[i].name,
            age:req.body.patientDetails[i].age,
            complaint:req.body.patientDetails[i].complaint
        })
    }
}
   doctordata.create(newDetails,function(error, detail) {
        console.log(error);
        console.log(detail);
            if (error) {
                res.send({ error: error });

            } else {
                res.send({ doctor: detail });
                console.log(detail);
            }
        });

}
exports.search = function(req, res) {
    console.log('search'+ req.body.searchDoctor);
    var query = doctordata.find();

    if (!!req.body.searchDoctor) {
        console.log("inside")
        query.where('$or').equals([
            { name: { '$regex': new RegExp(req.body.searchDoctor, 'i') } },
            { qualification: { '$regex': new RegExp(req.body.searchDoctor, 'i') } }            
        ]);
    }
    console.log(JSON.stringify(query._conditions));
    query.exec(function(err, detail) {
        if (err) {
            res.send({ error: err });
            console.log('no records found in the data')
        } else {
            res.send({ doctor: detail });
        }
    });
}

exports.removeDoctor = function(req, res) {
    console.log('remove');
 console.log(req.params.id);
   doctordata.remove({
            "_id": req.params.id
        },

        function(err, deletedDetail) {
            console.log(err);
            if (err) {
                res.send(err);
            } else {

                res.send(deletedDetail);

            }
        })
};

exports.updateDoctor = function(req, res) {

    doctordata.findById({ "_id": req.body._id }, function(err, data) {
        if (err) {
            res.send({ error: err });
        } else {
            data.name = req.body.name;
            data.qualification = req.body.qualification;
            data.specialization = req.body.specialization;
            data.address = req.body.address;
            data.patientDetails = req.body.patientDetails;

            data.save(function(error, savedata) {
                if (error) {
                    res.send(error);
                } else {
                    res.send({ savedata });
                    console.log(savedata);

                }
            })

        }
    });
};

exports.newhospDetail = function(req, res) {
    console.log(req.params.id);
    doctordata.findById({ "_id": req.params.id }, function(err, data) {
        if (err) {
            res.send({ error: err });
        } else {
            res.send({ doctor:data });
            console.log(data);
        }
    });
};

