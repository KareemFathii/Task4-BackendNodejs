
const request = require("request")
const geocode = (countryname , callback) =>{
    const geocodeingurl = "https://api.iso-maps.com/v1/weather/city?city="+countryname+"&lang=en-GB&units=metric&api_key=dCd9t5L0wWZRud06Ibkt70mJYpVOiay4E2BQlZ1tMM8inxiutnYNn4wEvFtn";
    request({url : geocodeingurl , json : true} , (error, response) => {
        if(error){
            callback(error , undefined)
        }
      else if(response.body.result_message){
            callback(response.body.result_message , undefined)
        }
        else if(response.body.error){
            callback(response.body.error,undefined)
        }
        else{
            callback(undefined , {
                longituide :  response.body.coord.lon,
                latituide : response.body.coord.lat
            })
        }


    })


}
module.exports = geocode