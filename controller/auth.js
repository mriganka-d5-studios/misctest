const AuthModel = require('../model/auth');

exports.addUser = async (req, res, next)=>{
    const authModel = new AuthModel(req.body.userid, req.body.email, req.body.password, req.body.permissions);
    const savedUser = await authModel.saveUser();
    res.header('x-auth-token', savedUser[0]).send(savedUser[1]);
};

exports.login = async (req, res, next)=>{
    const userid=req.body.userid;
    const password=req.body.password;
    const authModel = new AuthModel(userid,null,password);
    const token = await authModel.login();
    res.header('x-auth-token',token).send("Now you are logged in");
    
};