
global.users = [

]
global.jwtPrivateKey = "kuchubawal";

const express = require("express");
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes );



app.listen(3000, ()=> console.log('Listening on port 3000...'));