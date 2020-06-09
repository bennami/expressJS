const express  = require('express');
const  path = require('path');
const app = express();

//route

  const members  =  [
    {
      id: 1,
      name: 'sharon',
      email: 'sharon@hey.com',
      status: 'active'
    },
    {
      id: 1,
      name: 'bob',
      email: 'bob@hey.com',
      status: 'inactive'
    },
    {
      id: 1,
      name: 'wim',
      email: 'wim@hey.com',
      status: 'active'
    }
  ];

  //this route gets all members
  app.get('/api/members',(req,res)=>res.json(members));



//set a static folder
app.use(express.static(path.join(__dirname,'public')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server running on ${PORT}`))