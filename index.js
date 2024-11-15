var express = require("express")
var app = express();
var jwt = require("jsonwebtoken");
var mysalt = "secretkey";
var cors = require("cors");
app.use(cors());
app.use(express.json());

app.listen(8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server started succesfully");
});
  const loginCredentials = { username: "RMZade2112", password: "2" };
  const userDetails = {
    FullName: "Rahul",
    Username: "RMZade2112",
    DOB: "24/05/2002",
    City: "Sausar",
    Email: "rahulzade2112@gmail.com",
    Phone: "6262757846",
    avatar:"https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg"
  };

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === loginCredentials.username) {
    if (password === loginCredentials.password) {
      var token = jwt.sign(userDetails, mysalt);
      res.status(200).send(token);
      console.log(token);
    }
  } 
});

app.post("/removedp",(req,res)=>{
var token =req.headers.authorization;
var decoded = jwt.verify(token,mysalt);
console.log(decoded)
if(decoded){
  const updatedUser={...userDetails}
  updatedUser.avatar="";
  var updatedToken=jwt.sign(updatedUser,mysalt);
  res.status(200).send({msg:"DP remove Successfully" ,token:updatedToken})
}else{
  res.status(200).send({msg:"Unauthorized request"})
}
});


