//**************************************READ**********************************/

// this will return one element only 
let a = document.getElementById('id');
console.log(a)
// this will return objects of all class name
let a1 = document.getElementsByClassName('header')
console.log(a1)
// this is same as the className
let a2= document.getElementsByTagName('h1')
console.log(a2)

//by queryselectore
//this all are return the that all frist accurence for ex header class find kare to je class header frist avse ee send kari dese
let b = document.querySelector('.header');
console.log(b)
let b1 = document.querySelector('#id');
console.log(b1)
let b2 = document.querySelector('h1')
console.log(b2)

//by queryselectoreall apde badhi jovti hoy tyre

let c = document.querySelectorAll('.header')
console.log(c)
let c1  = document.querySelectorAll('#id')
console.log(c1)
let c2 =document.querySelectorAll('h1')
console.log(c2)


//**************************************UPDATE********************************/
// 1) innerHtml
let frist = document.getElementById('id')
frist.innerHTML='<h3>THIS IS A CHANGE BY THE INNERHTML</h3>'
// 2) outerHtml
let second = document.getElementById('id1')
second.outerHTML='<h3 class="header" id="id2">THIS IS A CHANGE BY THE OUTERHTML</h3>'
// 3)TextContent
let third = document.getElementById('id2')
third.textContent = "THIS IS A CHANGE BY TEXTCONTENT"
// 4)innerText
let fourth = document.getElementById('id3')
console.log(fourth.innerText)
//this is a same as the textContent but in innerText me hidden proprty vale content nai ata

//**************************************CREATE********************************/
let child = document.createElement('p')
child.textContent = "THIS IS FULLY ADDED BY JS"
frist.appendChild(child);
// this is a always added in last
// if we want there are diff place then we are using the insertAdjcent 
let child2 = document.createElement('p')
child2.textContent = "THIS IS A ADD BY INSERTADCENT"
let koli = document.getElementById('id4')
koli.insertAdjacentElement('afterend',child2);
//**************************************DELETE********************************/
let pr = document.getElementById('remove');
let ch = document.getElementById('id4');
// parentname.removeChild(childname);
pr.removeChild(ch);

//*******************************style********************************/
let kl=document.getElementById('id5');
kl.style.backgroundColor='pink'
kl.style.color='black'

let id6 = document.getElementById('id6');
id6.style.cssText +='text-align:center;'
//or we want to use remove old all css and new then use thistype of 
// id6.style.cssText = 'text-align:center;'

let id7 = document.getElementById('id7');
id7.setAttribute('style','color:black; background-color:white; text-align:center');
id7.setAttribute('id','THISISAADDEDBYTHESETATTRIBUTE');
console.log(document.getElementById('THISISAADDEDBYTHESETATTRIBUTE'));
//THIS IS  A CLASSNAME  this is a return the string
let id8 = document.getElementById('id8');
console.log(id8.className);
id8.className+='wo';
console.log(id8.className)
// this is a classlist 
let id9 = document.getElementById('id9');
for (let i of id9.classList){
    console.log(i);
}
//this add is adding the attribute
id9.classList.add('header1');
console.log(id9.className);
function f(kaik)
{
    console.log(kaik);
}
//this remove is removeing the attribute
id9.classList.remove('header');
f(id9.className);
//this toggle is the if this class is present then remove the class and if this class is not present in the class then it will be remove the class
id9.classList.toggle('hidden');
console.log(id9.classList.contains('hidden'))
id9.classList.toggle('hidden');
console.log(id9.classList.contains('hidden'))

