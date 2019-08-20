
module.exports = function(app) {

    var doctor = require('./doctor');
    app.post('/createDoctor',doctor.createDoctor);
    app.post('/search',doctor.search);
    app.get('/removeDoctor/:id', doctor.removeDoctor);
    app.post('/updateDoctor',doctor.updateDoctor);
    app.get('/newhospDetail/:id',doctor.newhospDetail);
};




