import express from 'express'
import { userdetails, userLogin } from '../controller/user.js';

 const router = express.Router();

router.get('/login' , userLogin);
router.get("/signup" , userdetails);
export default router;