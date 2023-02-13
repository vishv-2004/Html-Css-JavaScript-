// this is call factory function
function createObject(dabelii, samosai) {
  return (food = {
    dabeli: dabelii,
    samosa: samosai,
    printall: function () {
      console.log("This is a " + this.dabeli);
      console.log("This is a " + this.samosa);
    },
  });
}

//no we want to create the obj
let store1 = createObject(12, 34);
//********** uncomment for factory function
// store1.printall();

// *********************this is a call constructure function
function constructurefunction(student, faculty) {
  (this.student = student),
    (this.faculty = faculty),
    (this.printall = function () {
      console.log("this is a student " + this.student);
      console.log("this is a faculty " + this.faculty);
    });
}

let chankya = new constructurefunction(5000, 300);
chankya.printall();

//now we created the internal function is work

let createConstructure = Function(
  "student",
  "faculty",
  ` this.student=student,
this.faculty=faculty,
this.printall = function(){
    console.log("this is a student "+this.student);
    console.log("this is a faculty "+this.faculty);
}`
);

let shajanand = new constructurefunction(10000, 300);
shajanand.printall();

//dyanamic nature object we are usaing the chanakya
//add the feild
chankya.goods = "principal";
chankya.printall1 = function () {
  console.log("this is a goods " + this.goods);
};
chankya.printall();
chankya.printall1();

//delete the feild
delete chankya.goods;
chankya.printall1();

//primitive and non-primitive
//nnbbssu
//references primitive array,object,function

//in primitive that are deep copy mean they pass the value
//in refrences that are shalloew copy they pass the address
// for example
let a = 10;
let b = a;
console.log("this is a root number" + a);
console.log("this is a root number" + b);
a++;
console.log("this is a plus number" + a);
console.log("this is a root number" + b);
console.log("so this is a deepcopy");

let a1 = { value: 10 };
let b1 = a1;
console.log("this is a root number " + a1.value);
console.log("this is a root number " + b1.value);
a1.value++;
console.log("this is a plus number " + a1.value);
console.log("this is a root number " + b1.value);
console.log("this is a shallow copy");

// *********************for in loop      (also we can use for find in the loop)
let fora = { value1: 10, value2: 20, value3: 30 };
for (let i in fora) {
  console.log("this is a key : " + i + " this is a value : " + fora[i]);
}

if ("value3" in fora) {
  console.log("ohk you win the game ");
} else {
  console.log("apke pass koi scheam nai he soory");
}

const inarray = [10, 20, 30, 340, 56, 7, 8879, 990, 8];
for (let i in inarray) {
  console.log("This is a key : " + i + " this is a value : " + inarray[i]);
}

// *********************for of loop and for each loop**********
console.log("This is a with for in loop");
for (let i of inarray) {
  console.log(i);
}
//****************for each loop******************
console.log("This is a with for of loop");
inarray.forEach((Element, index, array) => {
  console.log(Element + " " + index + " " + " " + array);
});

//*****************object cloaning****************
//1)assign
let copyassign = Object.assign({}, chankya);
console.log("Now this is a Deep Copy ");
for (let i in copyassign) {
  console.log("This is a key : " + i + " this is a value : " + copyassign[i]);
}
//2) for in loop
let copyforin = {};
for (let i in copyassign) {
  copyforin[i] = copyassign[i];
}
for (let i in copyforin) {
  console.log("This is a key : " + i + " this is a value : " + copyforin[i]);
}

// 3)spread
let copyspread = { ...store1, ...copyforin };
console.log("this is a spread");
for (let i in copyspread) {
  console.log("This is a key : " + i + " this is a value : " + copyspread[i]);
}
//****************template literelas*******************
let Templitreals = `this is frist line
this is fifth line
this is forth line
this is thied line
this is second line`;
console.log(Templitreals);
//**********************created the date**************
const apnaDate = new Date();
console.log(apnaDate);
const apnaDate1 = new Date("12:00 03 jan 2004");
console.log(apnaDate1);
console.log(
  "This is a date " +
    apnaDate.getDate() +
    "-" +
    (apnaDate.getMonth() + 1) +
    "-" +
    apnaDate.getFullYear()
);
console.log(
  "This is a Time " +
    Math.abs(apnaDate.getHours() - 12) +
    ":" +
    apnaDate.getMinutes() +
    ":" +
    apnaDate.getSeconds()
);
//******************Arrays*******************
let arraytry = [1, 3, 5, 7];
let newlength = arraytry.push(90);
console.log(arraytry);
console.log(newlength);
let newshift = arraytry.unshift(-9);
console.log(arraytry);
console.log(newshift);
//*****************searching***********
// 1)index of
let findTheIndex = arraytry.indexOf(-9);
console.log("This is a index of -9 form the index 0 : " + findTheIndex);

findTheIndex = arraytry.indexOf(-9, -1);
console.log("This is a index of -9 form the index 1 : " + findTheIndex);
// 2)includes
if (arraytry.includes(-9)) {
  console.log("this is a also include the nagetive value ");
} else {
  console.log("this is a not include the nagetive value ");
}

const arrayOfTheObject = [{ value1: 10},
    {value3: 30},
    {value2: 20}
];
console.log(arrayOfTheObject);
//now we have to find the object in array so we can not find the directaly we have to use the find function now we see
 _op=arrayOfTheObject.find(function(Element){
    return Element.value1==10;
});
console.log(_op);
//*********************arrow function
_op=arrayOfTheObject.find(Element=>Element.value1==100);

console.log(_op);
// *********************remove the elements in array
console.log(arraytry);

let d=arraytry.pop();
console.log(d);
d=arraytry.shift();
console.log(d);
d=arraytry.splice(0,2);
console.log(d);
console.log("This all are vadela elements : "+arraytry);
// *********************delete all the elements*********************
let DeletAllElement = [12,34,33,23];
// 1)
DeletAllElement.length = 0;
console.log(DeletAllElement);
DeletAllElement = [12,34,33,23];
// 2)
DeletAllElement.splice(0,DeletAllElement.length);
console.log(DeletAllElement);
// 3)
const aop = [1,2,3,4,5,6,7];
let count=0;
let len = aop.length;
for (let i = 0; i < len ; i++)
{
    count=aop.pop();
    console.log("This is a "+i+" This is a poped value : "+count);
}
console.log(aop);
// *****************combining & slicing function*****
let frist = [1,2,3];
let second = [4,5,6];
let three = frist.concat(second);
console.log(three);
let newslice = three.slice(0,3);
console.log(newslice);
//copy the array with slice
let copyarray = three.slice();
console.log("This is a copy array "+copyarray);
let spreadthree = [`This is a spreadthree `,...frist,...second];
console.log(spreadthree);

// combining and slicing on object
fora = [{ value1: 10},{value2: 20},{value3: 30}];
let fora1= [{value4: 40},{value5: 50},{value6: 60}];
let foracombination = fora.concat(fora1);
for (let j in foracombination)
{
    for (let i in foracombination[j])
{
    console.log("this is a key : "+i+" This is a value : "+foracombination[j][i]);
}
}
// ***********concatination of the objects
let fristobj = {value:19,var:90};
let secondobj = {value1:191,var1:901};
let thirdobj = {};
for (let i in fristobj)
{
    thirdobj[i]=fristobj[i];
}

for (let i in secondobj)
{
    thirdobj[i]=secondobj[i];
}
console.log(thirdobj);
//**********************slice of the  array we have to created the obj to entites and then slice karke fir store kara dene ka
let ekdmnewobj =Object.entries(thirdobj);
ekdmnewobj=ekdmnewobj.slice(0,2);
let finallycombined = {}
for (let i in ekdmnewobj)
{
    finallycombined[ekdmnewobj[i][0]]=ekdmnewobj[i][1];
}
console.log(finallycombined);

// ****************itreate the array
for (let i of three)
{
    console.log(i);
}
console.log("This is a for each loop");
three.forEach((Element)=>console.log(Element));
count=0;
let joinop = three.join(count);
console.log(joinop);
// ***********shorting
three.push(100);
console.log(three);
three.sort();
console.log("This is a shorting alphabatic");
console.log(three);
console.log("This is a shorting numeric style ");
let compare = (a,b)=>a-b;
three.sort(compare);
console.log(three);
// ***************reverse the array
console.log("This is a reverse the array ");
console.log(three);
three.reverse();
console.log(three);
// *************Filter
console.log(three);
let Filterop = three.filter((Element)=>Element>=3);
console.log(Filterop);
//****************map
let mapop =  three.filter((Element)=>Element>=3).map(Element=>Element+1);
console.log(mapop);