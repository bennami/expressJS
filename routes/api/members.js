const express = require('express');
const router = express.Router();
const uuid = require("uuid")
const members = require('../../members.js');

// gets all members
router.get('/',(req,res)=>res.json(members));

//get single member
router.get('/:id', (req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        //req.params.id is a string, so u need to parseInt
        res.json(members.filter(member => member.id === parseInt(req.params.id) ));
    }else{
        res.status(400).json({msg: `no member with id of ${req.params.id}`});
    }
});

//create member
// we can use the same rout as long as they are different methods, i used / for the get request above
router.post('/',(req,res)=>{
   const newMember = {
       id: uuid.v4(),
       name: req.body.name,
       email: req.body.email,
       status: 'active'

   }

   if(!newMember.name || !newMember.email){
       res.status(400).json({msg: 'please include email and name'});
   }

   members.push(newMember);
   res.json(members)
});

//update member
router.delete('/:id', (req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){

        //req.params.id is a string, so u need to parseInt
        res.json({msg: 'member deleted',members: members.filter(member => member.id !== parseInt(req.params.id) )});
    }else{
        res.status(400).json({msg: `no member with id of ${req.params.id}`});
    }
});


//delete member
router.put('/:id', (req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        const updatedMember = req.body;
        members.forEach(member=>{
            if(member.id === parseInt(req.params.id)){
                member.name = updatedMember.name ? updatedMember.name : member.name;
                member.email = updatedMember.email ? updatedMember.email : member.email;
                res.json({msg:'member updated', member });
            }
        })
        //req.params.id is a string, so u need to parseInt
        res.json(members.filter(member => member.id === parseInt(req.params.id) ));
    }else{
        res.status(400).json({msg: `no member with id of ${req.params.id}`});
    }
});


module.exports = router;