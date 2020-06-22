const express = require ('express');
const  path = require('path');
const logger = require('./middleware/logger');
const app = express();

//init middleware
//app.use(logger);

// Body parser as middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));


//set a static folder
app.use(express.static(path.join(__dirname,'public')));

//members api routes
app.use('/api/members', require('./routes/api/members'));

//listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server running on ${PORT}`))