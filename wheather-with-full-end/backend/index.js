import express from "express" ;
import cors from "cors" ;
import fetch from "node-fetch";
import deotenv from "dotenv";

deotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());


app.get ('/api/weather', async(req,res)=>{
    try{

        const city = req.query.city || "Delhi"
        const apiKey = process.env.WEATHER_API_KEY;
        const response = await fetch(
             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        res.json(data);
    }catch(error){
        res.status(500).json({error:"Failed to fetch weather data"})
    }
})



app.listen(PORT , () =>{
    console.log(`Server running on   http://localhost:${PORT} `);
})


