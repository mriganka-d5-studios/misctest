const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = class Auth {

    constructor(userid, email, password, permissions){
        this.userid = userid;
        this.email = email;
        this.password = password;
        this.permissions = permissions;
    }

    saveUser = async ()=> {
        const salt = await bcrypt.genSalt(10);
        const cryptpass = await bcrypt.hash(this.password, salt);
        const newUser= {userid : this.userid , email : this.email, password : cryptpass, permissions : this.permissions};
        users.push(newUser);
        const token = jwt.sign(newUser,jwtPrivateKey)
        return [token, newUser];
    }
    
    login = async ()=>{
        let authUser ={};
        let currUser = users.find(user=>{
            // console.log(user.userid, this.userid)
            return user.userid === this.userid;
        });

        if(currUser){
             const validPassword = await bcrypt.compare(this.password, currUser.password);
             if(!validPassword){
                authUser.Message = "Not valid user or password!!!";
             }else{
                authUser.userid = currUser.userid;
                authUser.permissions= currUser.permissions;
             }

             console.log(authUser);
             const token = jwt.sign(authUser,jwtPrivateKey)
             return token;
            
        }else{
            authUser.Message = "Not valid user or password!!!";
            console.log(authUser);
            return authUser;        
        }

        
    
    }
}