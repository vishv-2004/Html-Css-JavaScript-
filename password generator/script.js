let slider = document.getElementById('passwordlengthslider');
let slidervalueshow = document.querySelector("[slidervalueshow]");
let coptbtn = document.querySelector('.fa-copy');
let copyshow = document.querySelector('.activen')
let slidervalue = 10;
let passwordstore = document.querySelector('input');
let checkboxall = document.querySelectorAll("[checkbox]");
let strength = document.getElementById('strength');
let mainbutton = document.querySelector("[mainbutton]");
let password = "";
let checkboxcounter =0;
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
// slider ke sath kelte he 
showvalue();
function showvalue(){
    slidervalue = slider.value;
    slidervalueshow.textContent = slidervalue;
    let need = slider.value*5;
    slider.style.backgroundSize=(need)+"% 100%";
   

}
slider.addEventListener('input',showvalue);
//copy
function displayfail(){
    copyshow.textContent = "copy failed"
    display();
}
function display(){
    copyshow.classList.remove('activen');
    setTimeout(()=>{
        copyshow.classList.add('activen');
    },2000);
}
async function copy(){
    if(passwordstore.value)
    {
        await navigator.clipboard.writeText(passwordstore.value).then(display).catch(displayfail);

    }
}
coptbtn.addEventListener('click',copy);

//chech box counter
function checkcounter(){
checkboxcounter=0;
checkboxall.forEach(e=>{if(e.checked)checkboxcounter++;})
// In Case This Is Also Possible Special Case
if(slider.value < checkboxcounter)
{
    slider.value = checkboxcounter;
    showvalue();
}
}

checkboxall.forEach(e=>{
    e.addEventListener('click',checkcounter);
})

//strength
function setcolor(background)
{
    strength.style.backgroundColor=`${background}`;
    strength.style.boxShadow=`${background} 0px 0px 12px 1px`;
}
function knowstrength()
{
    if(slidervalue >= 10 && checkboxcounter >= 3)
    {
        setcolor("rgb(0,255,0)");
    }
    else if(slidervalue >= 5 && checkboxcounter >=2)
    {
        setcolor("rgb(255,255,0)");
    }
    else
    {
        setcolor("rgb(255,0,0)");
    }
}
let funarr=[];
//PassGenreatore
function sufflepass(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}
function randomeintgen(min,max)
{
    return Math.ceil(Math.random()*(max-min))+min;
}
function randomeuppercase()
{
    return String.fromCharCode(randomeintgen(65,90));
}
function randomelowercase()
{
    return String.fromCharCode(randomeintgen(97,122));
}
function randomeint(){
    return randomeintgen(0,9);
}
function randomesymoble(){
    let rindex = randomeintgen(1,symbols.length-1);
    return symbols[rindex];
}
//gen pass
function passwordgen(){
    let newpassword="";
    funarr=[];
    if(checkboxall[0].checked)
        funarr.push(randomeuppercase);
    if(checkboxall[1].checked)
        funarr.push(randomelowercase);
    if(checkboxall[2].checked)
        funarr.push(randomeint)
    if(checkboxall[3].checked)
        funarr.push(randomesymoble)
    //compalsary addition
    for(let i=0;i<funarr.length;i++)
    {
        newpassword+=funarr[i]();
    }
    for(let i=0;i<slidervalue-funarr.length;i++)
    {
        let newindex = randomeintgen(0,funarr.length-1);
        newpassword+=funarr[newindex]();
    }
    return newpassword;
}
mainbutton.addEventListener('click',()=>{
    
    checkcounter();
    if(checkcounter==0)
    {
        return;
    }
    if(slider.value < checkboxcounter)
    {
        slider.value = checkboxcounter;
        showvalue();
    }
   
    password=""
    password+=passwordgen();
    password = sufflepass(Array.from(password));

    passwordstore.value =password;
    knowstrength();
})

