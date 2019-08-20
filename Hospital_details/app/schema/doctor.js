var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
    name: String,
    qualification: String,
    specialization: String,
    address:String,
     patientDetails:[{
    	name: String,
    	age: Number,
    	complaint:String
    }]
   });
module.exports = mongoose.model('doctordata', DoctorSchema);