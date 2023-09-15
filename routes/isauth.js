const jwt = require("jsonwebtoken");

const JWT_SECRETE = "this is my secret";
const fetchuser = (req,res,next)=>{
    
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message:"enter Valid Token"})
    }
    const data = jwt.verify(token,JWT_SECRETE)
    req.userId = data.id 
    next()
}

module.exports = fetchuser