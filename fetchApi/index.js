function newElementchahiye(data)
{
    let newelemt = document.createElement('h1');
    newelemt.textContent=data;
    document.body.appendChild(newelemt);
}
let API_KEY = "0f062932ab6aff1228156172f3ec4294";
async function fetchdata()
{   let latitude = 33.44
    let longitude = -94.04
   try{
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    let jsondata =await data.json();
    let op = jsondata.main.temp;
    newElementchahiye(op);
   }
   catch(err)
   {
        console.log("This is a my error and this is made by me ",err); 
   }
}
// "let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid=${API_KEY}&units=metric`);"