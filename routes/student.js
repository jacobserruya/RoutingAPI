const express =require ("express");
const router = express.Router();


let students =[
    {name:"poio1",id:0},
    {name:"jacob",id:1},
    {name:"maria",id:2},
    {name:"jonny",id:3},
    {name:"cleub",id:4},
]

router.get("/student",(req,res,next)=>{    
    student = students[req.body.id];
    if(student){
    res.json(student);
}else next();

})


router.get("/student/all",(req,res)=>{
    
    res.json(students);

})


router.get("/student/:id",(req,res,next)=>{
    student = students[req.params.id];
    
    res.json(student);

})


router.get("/student",(req,res)=>{
    student = students[req.query.id];
    res.json(student);

})




module.exports = router ;