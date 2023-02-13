function box(){
    return obj = {
        key11: "value1",
        key2:"value2",
        key3:"value3",
        printall:function(){
            console.log("this is a " + this.key11);
            console.log("this is a " + this.key2);
            console.log("this is a " + this.key3);
        },
    }
}

const pappu = box();
// pappu.printall(); 



function car(){
    this.tyears = "TVS",
    this.model = "Fortuner",
    this.price = "5000000",
    this.printall1 = function(){
        console.log("this is a "+this.tyears);
        console.log("this is a "+this.model);
        console.log("this is a "+this.price);
    }
}


//  car = Function(` this.tyears = "TVS",
// this.model = "Fortuner",
// this.price = "5000000",
// this.printall1 = function(){
//     console.log("this is a "+this.tyears);
//     console.log("this is a "+this.model);
//     console.log("this is a "+this.price);
// }`);

let vishv = new car();
vishv.color = "black";
vishv.printall2 = function(){
    console.log("this is a " +this.tyears);
    console.log("this is a "+this.model);
    console.log("this is a "+this.price);
    console.log("this is a "+this.color);
}
// vishv.printall2();
// delete vishv.price;
// let a  = Object.values(vishv)
// console.log("This is a threw for loop");

// for (let i of Object.entries(vishv)){
//     console.log(i[0] + " values "+i[1]);

// }

let det1 = {};
 
for (let i in vishv)
{
    det1[i] = vishv[i];
}
console.log(det1);
vishv.model="heriere";
console.log(vishv);
console.log(det1);


let det2 = Object.assign({},det1);
console.log(det2);
det1.model="nano";
console.log(det1);
console.log(det2);


let det3= {...det2};
console.log(det3);

let str="vishv";

let str1 = new String("patel");
let keys = Object.entries(str1);
console.log("This is a thing")
console.log(keys);

let  array=[12,4,3,4,4,4];
let aa =new Array(1,2,3,3,44,4);
console.log(aa);