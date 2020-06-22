const moment = require('moment');
//middleware
// Always call next last so u can move to next middleware function
//every time we make an http request, this middleware will run
const logger = (req, res, next) =>{
    //logs url that has been requested
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

module.exports = logger;