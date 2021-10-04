const express =require("express");
const app = express();
const PORT =3000;
const path =require("path")
const student =require("./routes/student")

app.use ("/",express.static(path.join(__dirname,'client')))




let hiPeople = (req,res)=>{

    res.send("<h1>HI PEOPLE TEST</h1>") 
 
 }
let sebody = (req,res,next)=>{
    console.log(req.body);
    next();
}
app.use("/",express.json())
app.use("/",express.urlencoded())
app.use("/",sebody) //pra todas de dentro tbm!
app.get("/",hiPeople)

app.use("/",student)


app.listen(PORT,()=>{

    console.log(`console is runnig on port ${PORT}`);
})