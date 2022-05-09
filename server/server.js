const express=require("express");
const sql=require("mysql");
// dotenv for maintaining global values like NODE_ENV
require("dotenv").config();

const cors=require("cors");
const bcrypt=require("bcrypt");
const saltRounds=10;
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port= process.env.PORT || 9000;
//--------------------- Serve Assets ---------------------//
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
  }


const db=sql.createConnection({
      user: "root",
      host: "localhost",
      password: "Nithish14@",
      database: "learningdb",
});

app.post("/reg",(req,res)=>{
     const name=req.body.name;
     const email=req.body.email;
     const password=req.body.password;

     bcrypt.hash(password,saltRounds,(err,hash)=>{
         if(err){
             console.log(err);
         }
         

        db.query("INSERT INTO register_db (name,email,password) VALUES (?,?,?)",[name,email,hash],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send({msg: result});
            }
        });
     });

     
});

app.post("/course",(req,res)=>{
        const name=req.body.name;
        const email=req.body.email;
        const coursename=req.body.coursename;
        console.log(req.body);
        const Idnum=req.body.Idnum;
        const Instructors=req.body.Instructors;
        const duration=req.body.duration;

        db.query("INSERT INTO coursedetail_db (name,email,coursename,Idnum,Instructors,duration) VALUES(?,?,?,?,?,?)",[name,email,coursename,Idnum,Instructors,duration],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.send({msg :result});
            }
        });
});


app.post("/login",(req,res)=>{
     const name=req.body.name;
     const email=req.body.email;
     const password=req.body.password;

     db.query("SELECT * FROM register_db WHERE name=? AND email=?;",[name,email],(err,result)=>{
          if(err){
              res.send({err : err});
          }
        
           if(result.length > 0){
              bcrypt.compare(password,result[0].password,(error,response)=>{
                  if(response){
                      res.send(result);
                  }
                  else{
                      res.send({message: "Wrong email/password combination!"});
                  }
                
              });
            }
          else{
              res.send({message2: "user doesn't exist"});
          }
     });
});

app.delete("/unenroll/:name",(req,res)=>{
    const name=req.body.name;
    db.query("DELETE FROM coursedetail_db WHERE email=?;",name,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    })
});

app.listen(port,()=>{
    console.log(`server started and listening to the port ${port}`);
});