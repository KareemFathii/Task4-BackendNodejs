const request = require("request")
const forecast = (longituide , latituide , callback) => {
    const url =  "https://api.weatherapi.com/v1/current.json?key=fa6f15a0d4cb472f920213103241607&q=" + longituide +"," +latituide +"&aqi=no"
    
    request({url  , json : true} ,(error , response) => {
        if(error){
            callback("there is an error in reaching the website !!" , undefined)
        }
        else if(response.body.error){
            callback( response.body.error.message , undefined)
        }

        else{

            callback(undefined ,{
                forecast : response.body.current.condition.text,
                longituide : longituide ,
                latituide : latituide ,
                temp : response.body.current.temp_c

            } )  
        }        
        
    })
}
module.exports = forecast