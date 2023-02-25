// const v = new Promise(function(resolve,rejected){
//     setTimeout(function(){
//         console.log("This is a inside the settimeout ")
//     },0);
//    resolve(295);
// });

// const r = new Promise(function(resolve,rejected){
//     setTimeout(function(){
//         console.log("This is a rejected in side the promise");
//     },0);
//     rejected(new Error ("This is a very tire full thing"));
// })

// v.then((solved)=>{
//     console.log("This is a function solved by this value v "+solved);
// })

// v.catch((error)=>{
//     console.log("This is a an error v : "+error);
// })


// r.then((solved)=>{
//     console.log("This is a function solved by this value r "+solved);
// })

// r.catch((error)=>{
//     console.log("This is a an error r : "+error);
// })



// // 2) promise chaining
// let frist  = new Promise(function(resolve,rejected){
//     let count = 0 ; 
//     if(count==0)
//     {
//         console.log(++count);
//         resolve(count);
//     }
//     else{
//         rejected(new Error("Bhai kuch to lafada he"));
//     }
// })

// frist.then((solved)=>{
//     let  second = new Promise(function(resolve,rejected){
//         if(solved==1)
//         {
//             console.log(solved++);
//             resolve("Have you ever best day of the life ");
//         }
//         else{
//             rejected(new Error("Bhai second me kuch error ayela he "));
//         }
//     })

//     second.then(function(solved){
//         console.log(solved+" Bhai puri raat yahi karta rahega kya : ");
//     }).catch(function(error){
//         console.log(error);
//     })
// }).catch((error)=>{
//     console.log(error);
// });


// 3)
// async function abcd(){
//     let p1 = await new Promise(function(resolve,rejecte){
//         setTimeout(()=>{
//             console.log("This is a promise 1 ");
//             resolve();
//         },5000);
//     })
//     let p2 =await new Promise(function(resolve,rejected){
//         setTimeout(()=>{
//             console.log("This is a promise 2 ");
//             resolve();
//         },5000);
//     })
   
   
// }
//  abcd().then(function(){
//     console.log("This is a run succesfully")
//  }).catch(function(){
//     console.log("This is a not run succesfully")
//  })


// //  4) fatch api get method
// let content = document.querySelector('#btn');
// content.addEventListener('click',async ()=>{
//     let op =await fetch("index2.html");

//     document.querySelector('.container').innerHTML = await op.text();
// })

//  5) post api
// async function postk(){
//     let option = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'H1',
//           body: 'KOLAPURI',
//           userId: 84,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       }
//     let conten =await fetch("https://jsonplaceholder.typicode.com/posts",option);
//     let ans  =await conten.json();
//     return ans;
// }

// async function abcd(){
//     let op =await postk();
//     console.log(op);
// }

// abcd();

// 6)
function outter(){
  let out = " vishv ";
  function inner(){
    console.log(out);
  }
  return inner;
}


let exp = outter();
exp();
