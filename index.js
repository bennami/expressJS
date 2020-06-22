const express = require ('express');
const  path = require('path');
const exphdbs = require('express-handlebars');
const logger = require('./middleware/logger');
const app = express();
const members = require('./members')

//init middleware
//app.use(logger);

// handlebars middleware
app.engine('handlebars', exphdbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body parser as middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req,res)=> res.render('index', {
        title: 'Member App',
        members
    })
   );

//set a static folder
app.use(express.static(path.join(__dirname,'public')));

//members api routes
app.use('/api/members', require('./routes/api/members'));

//listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server running on ${PORT}`))