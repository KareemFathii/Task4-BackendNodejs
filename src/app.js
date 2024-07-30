const geo = require("../forecastdata/geo")
const forecast = require("../forecastdata/forecast")

const express = require("express")
const app = express()
const port = process.env.port | 3000


app.set("view engine" , "hbs")
const path = require("path")
const x = path.join(__dirname , "../public")
app.use(express.static(x))

app.get("/weather", (req,res) =>{
    if(!req.query.country){
        return res.send({
            error : "Must provide a country"
        }
        )
    }
    geo(req.query.country , (error, response) => {
        if(error){
            return res.send({error})
        }
        forecast(response.latituide , response.longituide, (error , response ) =>{
            if(error){
                return res.send({error})
            }
            res.send({ 
                location :  req.query.country ,
                response : response   
            })
        })
    })
})


app.get("/", (req,res) =>{
    res.render("index", {
       
    })
})


app.listen(port , ()=>{
    console.log("app is listening at port 3000")
})