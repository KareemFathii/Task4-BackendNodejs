const searchbtn = document.getElementById("searchbtn")
const formbtn =  document.getElementById("form1")
const address = document.getElementById("address")
const forecastdata =document.getElementById("forecast")
const loc = document.getElementById("location")
const lat = document.getElementById("latituide")
const long = document.getElementById("longituide")
const err = document.getElementById("error")
const gen = document.getElementById("general")
// console.log(address)
formbtn.addEventListener("submit" , (e)=>{
    e.preventDefault()
    gen.style.display="none"
    long.style.display="none"
    lat.style.display="none"
    forecastdata.style.display="none"
    err.style.display="none"
    loc.style.display="none"
    
    weatherfn()
    formbtn.reset()
})

async function weatherfn(){ 
    try{
        const resp = await fetch("http://localhost:3000/weather?country="+address.value)
        console.log(address.value)
        const data = await resp.json()
        if(data.error){
            err.style.display = "block"
            err.innerHTML = data.error    
        }
        else{
            setTimeout(() => {
                loc.style.display = "block"
                loc.innerHTML =`The Location name is ${data.location} ` 
                // loc.innerHTML = address.value  
            }, 1000);
            setTimeout(() => {
                long.style.display = "block"
                long.innerHTML = `The longituide  is ${data.response.longituide}  ` 
                console.log(long)
            }, 2000);
            setTimeout(() => {
                lat.style.display = "block"
                lat.innerHTML = `The latituide is ${data.response.latituide}  ` 
                console.log(data.latituide)
            }, 3000);
            setTimeout(() => {
                forecastdata.style.display = "block"
                forecastdata.innerHTML = `The weather in ${data.location} is ${data.response.forecast} and the temp is ${data.response.temp} Now `
            }, 4000);
            err.style.display = "none"
        }
    }
    catch(e) {
        console.log(e)
    }

}