// function myfunction(){
//     let a = document.getElementById('over').value
//    document.getElementById('huhu').textContent="you are entered "+a+" over";
// }

// var subButton = document.getElementById('subButton');
// subButton.addEventListener('click', myfunction, false); 
// let teama=document.getElementById('name_a').value;
// let teamb=document.getElementById('name_b').value;
// let over=document.getElementById('over').value;
// let wideball=document.getElementById('wide_yes').value;
// let noball=document.getElementById('noball_yes').value;
function myfunction()
{   var teama=document.getElementById('name_a').value;
    var teamb=document.getElementById('name_b').value;
    var over=document.getElementById('over').value;
    var wideball=document.getElementById('wide_yes').value;
    var noball=document.getElementById('noball_yes').value;
    let tempname1 = "unknown1";
    let tempname2 = "unknown2";
    // if(isNaN(over))
    // {

    // }
    console.log(teama);
    let result1=teama ?? tempname1;
    let result2=teamb ?? tempname2;
    document.getElementById('Run').innerText= `${result1} VS ${result2} `
    document.getElementById('input-1').innerHTML=`<h1> which team has the frist batting</h1> 
    <div class="wide_container">
                <label for="toss">Select which team has frist batting :  </label>
                <select name="toss" id="toss" style="padding: 5px 10px; margin-left: 1rem;">
                  <option value=${result1}>${result1}</option>
                  <option value=${result2}>${result2}</option>
                </select>
                <br>   
                <button type="submit" class="btn" id="sub2Button"  onclick=home()>submit</button>
            </div>`
    var team1 = document.getElementById('toss').value;
    console.log(team1);
}

function home(){
    document.getElementById('input-1').innerHTML=`<h1> ${team1} </h1> `
}

