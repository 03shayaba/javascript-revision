import express  from "express";
// import { userLogin,userdetails } from "./controller/user.js";
import router from './routes/user-routes.js'
const app = express();
const PORT = 3003;
app.use('/', router)
app.use('/user' ,router)

app.listen(`${PORT}` , function(){
    console.log("server is running")
})