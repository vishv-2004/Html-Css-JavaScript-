const input = document.querySelector(".inputfield");
const formcontainer = document.querySelector(".searchbar");
const btn = document.querySelector(".btn");
const url = "https://api.github.com/users/";
const month = [
  "Jan",
  "Fab",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nev",
  "Dec",
];
const root=document.documentElement.style;
const imagesrc = document.querySelector("[profileImage]");
const profilename = document.querySelector("[profile-name]");
const profilelink = document.querySelector("[profile-link]");
const uijoineddate = document.querySelector(".joined-date");
const uiboi = document.querySelector(".aboutprofile");
const uirepos = document.querySelector(".repos-number");
const uifollowers = document.querySelector(".followes-number");
const uifollowing = document.querySelector(".following-number");
const uilocation = document.querySelector(".location");
const uiblog = document.querySelector(".blog-link");
const uitwitter = document.querySelector(".twitter");
const uicompany = document.querySelector(".company-name");
const notfound= document.querySelector(".not-found");
const darktext = document.querySelector("[darktext]");
const darksvg = document.querySelector("[darksvg]");
const changeui = document.querySelector(".lightordark");
let lastsearched =[];
let counter=0;
let dark = false;
// Event listners
//1) input button for enter
function rr(){
  uiboi.classList.remove("not");
    uilocation.classList.remove("not");
    uiblog.classList.remove("not");
    uitwitter.classList.remove("not");
    uicompany.classList.remove("not");
}
input.onkeydown = (e) => {
  if (e.key === "Enter") {
    notfound.style.display="none";
    rr();
    if (input.value) {
      findprofile(input.value);
     
    }
  }
};
//2) search button
btn.addEventListener("click", () => {
    notfound.style.display="none";
    rr();
  if (input.value) {
    findprofile(input.value);
    
  }
});
async function findprofile(username) {
  try{
    console.log(username);
    let content = await fetch(`https://api.github.com/users/${username}`);
    content = await content.json();
    console.log(content)
    rendercontent(content);
  }
  catch(err){
    notfound.style.display="block";
    console.log("This is a lastSearched",lastsearched[counter-2]);
    if(counter>=2)findprofile(lastsearched[counter-2]);
    else findprofil
    e("vishv-2004");
  }

}
function rendercontent(content) {
  function checknull(frist,second) {
    if (frist === "" || frist === null)
    { console.log(second);
      second.classList.add("not");
      return true;
    }
    return false;
  }
  lastsearched[counter++] = content?.login;
  imagesrc.src = content?.avatar_url;
  if(content?.name==""||content?.name==null)
  {
    console.log("first")
    profilename.textContent = content?.login;
  }
  else
  {
    console.log("second")
    profilename.textContent = content?.name;
  }
  profilelink.textContent = `@${content?.login}`;
  profilelink.setAttribute("href", `https://github.com/${content?.login}`);
  let array = content?.created_at.split("-");
  let month1 = month[parseInt(array[1]) - 1];
  date = array[2].slice(0, 2);
  uijoineddate.textContent = `Joined ${date} ${month1} ${array[0]}`;
  uiboi.textContent = checknull(content?.bio,uiboi)?"This profile has no bio":content?.bio;
  uirepos.textContent = content?.public_repos;
  uifollowers.textContent = content?.followers;
  uifollowing.textContent = content?.following;
  uilocation.textContent = checknull(content?.location,uilocation)
    ? "Not Avilible"
    : content?.location;
  uiblog.textContent = checknull(content?.blog,uiblog)
    ? "Not Avalible"
    : content?.blog;
  uiblog.setAttribute("href", content?.blog);
  uitwitter.textContent = checknull(content?.twitter_username,uitwitter)
    ? "Not Avalible"
    : content?.twitter_username;
  uicompany.textContent = checknull(content?.company,uicompany)
    ? "Not Avalible"
    : content?.company;
}
//light and darkmode
changeui.addEventListener('click',()=>{
    if(dark==false)
    {
      darkmode();
    }
    else
    {
      lightmode();
    }
})
function darkmode(){
  root.setProperty("--lm-bg", "#141D2F");
  root.setProperty("--lm-bg-content", "#1E2A47");
  root.setProperty("--lm-text", "white");
  root.setProperty("--lm-text-alt", "white");
  root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)"); 
  root.setProperty("--lm-icon-bg", "brightness(1000%)");
  root.setProperty("--normal-text","#ffffff");
  darktext.textContent = "LIGHT";
  darksvg.src = 'assets/images/sun-icon.svg';
  dark=true;
}
function lightmode(){
  root.setProperty("--lm-bg","#f6f8ff");
  root.setProperty("--lm-bg-content","#fefefe");
  root.setProperty("--lm-text","#4b6a9b");
  root.setProperty("--lm-text-alt","#2b3442");
  root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
  root.setProperty("--normal-text","#000000");
  dark=false;
  root.setProperty("--lm-icon-bg", "brightness(100%)");
  darksvg.src = 'assets/images/moon-icon.svg';
}
findprofile("vishv-2004");
