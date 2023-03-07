const API_KEY = "0f062932ab6aff1228156172f3ec4294";

function renderwetherinformation(temp1) {
  cityname.textContent = temp1?.name;
  wetherdesc.textContent = temp1?.weather?.[0]?.description;
  temprature.textContent = temp1?.main?.temp;
  windspeedvalue.textContent = `${temp1?.wind?.speed}m/s`;
  humidityvalue.textContent = `${temp1?.main?.humidity}%`;
  cloudes.textContent = `${temp1?.clouds?.all}%`;
  countryflag.src = `https://flagcdn.com/144x108/${temp1?.sys?.country.toLowerCase()}.png`
  wetherimage.src =  `http://openweathermap.org/img/w/${temp1?.weather?.[0]?.icon}.png`;
}
async function showWether(lat, lon) {
  try {
    let content = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    let temp = await content.json();
    loadingscreen.classList.remove("activey");
    loadingscreen.classList.add("activen");

    wethershowingcontiner.classList.remove("activen");
    wethershowingcontiner.classList.add("activey");
    renderwetherinformation(temp);
  } catch (err) {
    loadingscreen.classList.remove("activey");
    loadingscreen.classList.add("activen");
    alert("refresh the website Check The Internet");
  }
}
const userinterface = document.querySelector("[user-wether]");
const searchinterface = document.querySelector("[search-wehter]");
const formcontainer = document.querySelector("[form-container]");
const wethershowingcontiner = document.querySelector(
  "[wethershowing-container]"
);
const cityname = document.querySelector("[city-name]");
const wetherimage = document.querySelector("[wether-image]");
const wetherdesc = document.querySelector("[wether-desc]");
const temprature = document.querySelector("[temp]");
const windspeedvalue = document.querySelector("[windspeed-value]");
const humidityvalue = document.querySelector("[humidity-value]");
const cloudes = document.querySelector("[clouds-value]");
const grantaccess = document.querySelector("[grant-access]");
const loadingscreen = document.querySelector("[loading-screen]");
const grantaccessbtn = document.querySelector("[grant-access-btn]");
const inp = document.querySelector("[data-searchinput]");
const notfound = document.querySelector("[not-found]");
let countryflag = document.querySelector("[country-flag]");
let currenttab = userinterface;
currenttab.classList.add("bg");
sessioncordinates();
function switchtab(clickedtab) {
  if (currenttab != clickedtab) {
    currenttab.classList.remove("bg");
    currenttab = clickedtab;
    currenttab.classList.add("bg");
    if (!formcontainer.classList.contains("activey")) {
      //user interface pe he and search interface pe click karela he
      formcontainer.classList.remove("activen");
      formcontainer.classList.add("activey");
      grantaccess.classList.remove("activey");
      grantaccess.classList.add("activen");
      notfound.classList.remove("activey");
      notfound.classList.add("activen");
      wethershowingcontiner.classList.remove("activey");
      wethershowingcontiner.classList.add("activen");
    } else {
      notfound.classList.remove("activey");
      notfound.classList.add("activen");
      formcontainer.classList.add("activen");
      formcontainer.classList.remove("activey");
      wethershowingcontiner.classList.remove("activey");
      wethershowingcontiner.classList.add("activen");
      sessioncordinates();
    }
  }
}
function sessioncordinates() {
  const cordinates = sessionStorage.getItem("user-location");
  if (!cordinates) {
    //this condition shows you don't have local cordinates
    grantaccess.classList.remove("activen");
    grantaccess.classList.add("activey");
  } else {
    const { lat, lon } = JSON.parse(cordinates);
    loadingscreen.classList.remove("activen");
    loadingscreen.classList.add("activey");
    showWether(lat, lon);
  }
}
userinterface.addEventListener("click", () => {
  switchtab(userinterface);
});
searchinterface.addEventListener("click", () => {
  switchtab(searchinterface);
});
grantaccessbtn.addEventListener("click", () => {
  gethelocation();
});
function setthelocation(position) {
  lati = position?.coords?.latitude;
  loni = position?.coords?.longitude;
  const obj = {
    lat: lati,
    lon: loni,
  };
  sessionStorage.setItem("user-location", JSON.stringify(obj));
  sessioncordinates();
}
function gethelocation() {
  if (navigator.geolocation) {
    grantaccess.classList.remove("activey");
    grantaccess.classList.add("activen");

    navigator.geolocation.getCurrentPosition(setthelocation);
  } else {
    alert("Your browser dont support the location apis");
  }
}
formcontainer.addEventListener("submit", (e) => {
  notfound.classList.remove("activey");
  notfound.classList.add("activen");
  wethershowingcontiner.classList.remove("activey");
  wethershowingcontiner.classList.add("activen");
  e.preventDefault();
  if (inp.value === "") return;
  else {
    let space = inp.value;
    loadingscreen.classList.remove("activen");
    loadingscreen.classList.add("activey");
    showWetherwithlocation(inp.value);
  }
});
function erroeok() {
  notfound.classList.add("activey");
  notfound.classList.remove("activen");
}
async function showWetherwithlocation(space) {
  try {
    let content = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${space}&appid=${API_KEY}&units=metric`
    );
    content = await content.json();

    loadingscreen.classList.remove("activey");
    loadingscreen.classList.add("activen");
    if (content?.name) {
      wethershowingcontiner.classList.remove("activen");
      wethershowingcontiner.classList.add("activey");
      renderwetherinformation(content);
    } else {
      console.log("poche che");
      erroeok();
    }
  } catch (err) {
    loadingscreen.classList.remove("activey");
    loadingscreen.classList.add("activen");
    erroeok();
    alert("This City Is Not Found");
  }
}
