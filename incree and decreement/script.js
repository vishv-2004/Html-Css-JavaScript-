let mainvalue = document.querySelector("[mainvalue]");
let increement = document.querySelector("[increement]");
let decreement = document.querySelector("[decreement]");
let value=0;
increement.addEventListener('click',()=>{
    value++;
    update();
})
decreement.addEventListener('click',()=>{
    value--;
    update();
})
function update(){
    mainvalue.textContent = value;
}
