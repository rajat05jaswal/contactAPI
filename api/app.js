'use strict';
module.exports = function (app) {
    //Initialize models
    require('./models/contact');
    
    //Initialize routes
    let contactRoutes = require('./routes/contact-route');
    contactRoutes(app);
};