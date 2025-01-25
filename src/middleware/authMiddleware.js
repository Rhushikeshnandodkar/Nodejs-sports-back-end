const jwt = require("jsonwebtoken")

const protect = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1]
    if (!token){
        return res.status(401).json({succecss:  false, message : "Not authorized"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    }catch(error){
        console.log(error)
    }
}

const authorize = (...roles) => {
    return (req, res, next) =>{
        console.log(req.user.user_type, roles[0])
        if(!roles[0].includes(req.user.user_type)){
            return res.status(403).json({
                success: false,
                message : "You don't have permission to perform this action"
            })
        }
        next()
    }
}
module.exports = { protect, authorize }