document.body.onkeydown= function(e){
let y=document.createElement('p');
y.textContent = e.key
document.body.appendChild(y);
}
