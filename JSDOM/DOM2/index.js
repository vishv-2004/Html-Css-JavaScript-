// 1)
// let a = document.getElementById('wrapper')
// let div = document.createElement('div');
// function printop(){
//     console.log("THIS IS MY  TH PARA")
// }
// for (let i = 1 ; i <= 100 ; i++)
// {
//     let newelement = document.createElement('p')
//     newelement.textContent="THIS IS MY "+i+" TH PARA"
//     div.appendChild(newelement);
//     newelement.addEventListener('click',function(){
//         console.log("THIS IS MY "+i+" TH PARA")
//     });
// }
// document.body.appendChild(div); 

// 2) this is a second optimisation cuz function is a object then we are create new object for the every child then is require the extra space if we are using this type this is reqire only one object
// newelement.addEventListener('click',printop)

// 3) this is a optimise the code we are put the addeventlistner only on the div not all child 

let a = document.getElementById('wrapper')
let div = document.createElement('div');
function printop(event){
    if(event.target.nodeName==='P')
    console.log(event.target.textContent);

}
div.addEventListener('click',printop);
for (let i = 1 ; i <= 100 ; i++)
{
    let newelement = document.createElement('p')
    newelement.textContent="THIS IS MY "+i+" TH PARA"
    div.appendChild(newelement);
}
document.body.appendChild(div); 

