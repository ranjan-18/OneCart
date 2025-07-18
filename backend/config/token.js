import jwt from 'jsonwebtoken'

export const gentoken=async (UserId)=>{
    try {
        let token=await jwt.sign({UserId},process.env.JWT_SECRET,{expiresIn:"7d"});
        return token;
    } catch (error) {
        console.log("token error");
        
        
    }
}