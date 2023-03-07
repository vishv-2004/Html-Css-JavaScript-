let apducounter = 0;

async function winning(
  fristteamrun,
  run,
  ans1,
  ans,
  fristteamwicket,
  fristteamnoball,
  fristteamwideball,
  fristteamdotball,
  remain,
  noballdisplay,
  wideballdisplay,
  dotball,
  wicket
) {
  let winnerteamname;
  let winnerteamrun = fristteamrun - run;
  if (winnerteamrun == 0) {
    winnerteamname = `${ans} and ${ans1}`;
  } else if (winnerteamrun > 0) {
    winnerteamname = ans;
  } else {
    winnerteamname = ans1;
  }
  winnerteamrun = Math.abs(winnerteamrun);
  let content = await fetch("winnig.html");
  document.querySelector(".container").outerHTML = await content.text();
  document.getElementById('tableteam1').textContent = ans;
  document.getElementById('tableteam2').textContent = ans1;
  document.getElementById("winnerteam").textContent = winnerteamname;
  document.getElementById("winbyrun").textContent = winnerteamrun;
  document.getElementById("fristteamrun").textContent = fristteamrun;
  document.getElementById("secondteamrun").textContent = run;
  document.getElementById("fristteamwicket").textContent = fristteamwicket;
  document.getElementById("secondteamwicket").textContent = wicket;
  document.getElementById("fristteamwideball").textContent = fristteamwideball;
  document.getElementById("secondteamwideball").textContent = wideballdisplay;
  document.getElementById("fristteamnoball").textContent = fristteamnoball;
  document.getElementById("secondteamnoball").textContent = noballdisplay;
  document.getElementById("fristteamdotball").textContent = fristteamdotball;
  document.getElementById("secondteamdotball").textContent = dotball;
}

function extra1() {
  let content = document.querySelectorAll(".row1");
  Array.from(content).forEach((e, outerindex) => {
    let innercontent = e.querySelectorAll(".row_member1");
    Array.from(innercontent).forEach((Element, innerindex) => {
      Element.addEventListener("input", () => {
        let thisrun = parseInt(Element.value);
        if (!isNaN(thisrun) && thisrun < 0 && thisrun > -3) {
          let newelement = document.createElement("input");
          newelement.setAttribute("type", "number");
          newelement.setAttribute("name", "run");
          newelement.setAttribute("class", "row_member1");
          newelement.setAttribute("placeholder", `${outerindex}.${innerindex}`);

          Element.insertAdjacentElement("afterend", newelement);
        }
      });
    });
  });
}
function remainrun(
  fristteamrun,
  run,
  ans1,
  ans,
  fristteamwicket,
  fristteamnoball,
  fristteamwideball,
  fristteamdotball,
  noballdisplay,
  wideballdisplay,
  dotball,
  wicket
) {
  let remain = fristteamrun - run + 1;
  if (remain > 0 ) {
    document.getElementById("needrun").textContent = remain;
  } else {
    winning(
      fristteamrun,
      run,
      ans1,
      ans,
      fristteamwicket,
      fristteamnoball,
      fristteamwideball,
      fristteamdotball,
      remain,
      noballdisplay,
      wideballdisplay,
      dotball,
      wicket
    );
  }
  document.getElementById("winning").addEventListener("click", () => {
    if (confirm("Yor are fill the all run field ?")) {
      winning(
        fristteamrun,
        run,
        ans1,
        ans,
        fristteamwicket,
        fristteamnoball,
        fristteamwideball,
        fristteamdotball,
        remain,
        noballdisplay,
        wideballdisplay,
        dotball,
        wicket
      );
    }
  });
  // if(apducounter==1)
  // {
  //   winning(
  //     fristteamrun,
  //     run,
  //     ans1,
  //     ans,
  //     fristteamwicket,
  //     fristteamnoball,
  //     fristteamwideball,
  //     fristteamdotball,
  //     remain,
  //     noballdisplay,
  //     wideballdisplay,
  //     dotball,
  //     wicket
  //   );
   
  // }

  // document.getElementById("winning").addEventListener("click", () => {
  //   if (confirm("Yor are fill the all run field ?")) {
  //     winning(
  //       fristteamrun,
  //       run,
  //       ans1,
  //       ans,
  //       fristteamwicket,
  //       fristteamnoball,
  //       fristteamwideball,
  //       fristteamdotball,
  //       remain,
  //       noballdisplay,
  //       wideballdisplay,
  //       dotball,
  //       wicket
  //     );
  //   }
  // });
}
function update1(run, noball, wideball, wicket, dotball) {
  document.getElementById("runupdate1").textContent = run;
  document.getElementById("noballvalue1").textContent = noball;
  document.getElementById("wideballvalue1").textContent = wideball;
  document.getElementById("wicketupdate1").textContent = wicket;
  document.getElementById("dotballvalue1").textContent = dotball;
}
function allvalue1(
  wideball,
  noball,
  fristteamrun,
  ans1,
  ans,
  fristteamwicket,
  fristteamnoball,
  fristteamwideball,
  fristteamdotball
) {
  let wicket = 0;
  let run = 0;
  let noballdisplay = 0;
  let wideballdisplay = 0;
  let dotball = 0;
  let content = document.getElementsByClassName("row_member1");
  Array.from(content).forEach((e, index) => {
    let op = parseInt(content[index].value);
    // no ball

    if (!isNaN(op) && op == -1) {
      noballdisplay++;
      if (noball === "yes") {
        run++;
      }
    }
    // wide ball
    else if (!isNaN(op) && op == -2) {
      wideballdisplay++;
      if (wideball === "yes") {
        run++;
      }
    }
    // wide ball
    else if (!isNaN(op) && op == -3) {
      wicket++;
    }
    //dot ball
    else if (!isNaN(op) && op == 0) {
      dotball++;
    }
    //run
    else if (!isNaN(op) && op >= 0) {
      run += op;
    }
  });
  update1(run, noballdisplay, wideballdisplay, wicket, dotball);
  remainrun(
    fristteamrun,
    run,
    ans1,
    ans,
    fristteamwicket,
    fristteamnoball,
    fristteamwideball,
    fristteamdotball,
    noballdisplay,
    wideballdisplay,
    dotball,
    wicket
  );
}
function thirdid1(
  wideball,
  noball,
  fristteamrun,
  ans1,
  ans,
  fristteamwicket,
  fristteamnoball,
  fristteamwideball,
  fristteamdotball
) {
  let content = document.querySelector(".overcontainer1");
  document.getElementById("teamname1").textContent = ans1;
  content.addEventListener("input", () => {
    allvalue1(
      wideball,
      noball,
      fristteamrun,
      ans1,
      ans,
      fristteamwicket,
      fristteamnoball,
      fristteamwideball,
      fristteamdotball
    );
  });
  
}
function overset1(over) {
  over = parseInt(over);
  for (let i = 1; i < over; i++) {
    let newelement = document.createElement("div");
    newelement.setAttribute("class", "row1");
    for (let j = 0; j <= 5; j++) {
      let innernewelement = document.createElement("input");
      innernewelement.setAttribute("type", "number");
      innernewelement.setAttribute("type", "number");
      innernewelement.setAttribute("name", "run");
      innernewelement.setAttribute("class", "row_member1");
      innernewelement.setAttribute("placeholder", `${i}.${j}`);
      newelement.appendChild(innernewelement);
    }
    let superdiv = document.querySelector(".overcontainer1");
    superdiv.insertAdjacentElement("beforeend", newelement);
  }
}
async function index4(teama, teamb, over, wideball, noball, ans, ans1) {
  let fristteamrun = document.getElementById("runupdate").textContent;
  let fristteamwicket = document.getElementById("wicketupdate").textContent;
  let fristteamnoball = document.getElementById("noballvalue").textContent;
  let fristteamwideball = document.getElementById("wideballvalue").textContent;
  let fristteamdotball = document.getElementById("dotballvalue").textContent;
  let opcontent = await fetch("index4.html");
  document.querySelector(".container").outerHTML = await opcontent.text();
  thirdid1(
    wideball,
    noball,
    fristteamrun,
    ans1,
    ans,
    fristteamwicket,
    fristteamnoball,
    fristteamwideball,
    fristteamdotball
  );
  overset1(over);
  extra1();
  
}
function overset(over) {
  over = parseInt(over);
  for (let i = 1; i < over; i++) {
    let newelement = document.createElement("div");
    newelement.setAttribute("class", "row");
    for (let j = 0; j <= 5; j++) {
      let innernewelement = document.createElement("input");
      innernewelement.setAttribute("type", "number");
      innernewelement.setAttribute("type", "number");
      innernewelement.setAttribute("name", "run");
      innernewelement.setAttribute("class", "row_member");
      innernewelement.setAttribute("placeholder", `${i}.${j}`);
      newelement.appendChild(innernewelement);
    }
    let superdiv = document.querySelector(".overcontainer");
    superdiv.insertAdjacentElement("beforeend", newelement);
  }
}
function extra() {
  let content = document.querySelectorAll(".row");
  Array.from(content).forEach((e, outerindex) => {
    let innercontent = e.querySelectorAll(".row_member");
    Array.from(innercontent).forEach((Element, innerindex) => {
      Element.addEventListener("input", () => {
        let thisrun = parseInt(Element.value);
        if (!isNaN(thisrun) && thisrun < 0 && thisrun > -3) {
          let newelement = document.createElement("input");
          newelement.setAttribute("type", "number");
          newelement.setAttribute("name", "run");
          newelement.setAttribute("class", "row_member");
          newelement.setAttribute("placeholder", `${outerindex}.${innerindex}`);

          Element.insertAdjacentElement("afterend", newelement);
        }
      });
    });
  });
}
function teamname(teamname) {
  document.getElementById("teamname").textContent = teamname;
}
function update(run, noball, wideball, wicket, dotball) {
  document.getElementById("runupdate").textContent = run;
  document.getElementById("noballvalue").textContent = noball;
  document.getElementById("wideballvalue").textContent = wideball;
  document.getElementById("wicketupdate").textContent = wicket;
  document.getElementById("dotballvalue").textContent = dotball;
}
function allvalue(wideball, noball) {
  let wicket = 0;
  let run = 0;
  let noballdisplay = 0;
  let wideballdisplay = 0;
  let dotball = 0;
  let count = 0;
  let content = document.getElementsByClassName("row_member");
  Array.from(content).forEach((e, index) => {
    let op = parseInt(content[index].value);
    // no ball

    if (!isNaN(op) && op == -1) {
      noballdisplay++;
      if (noball === "yes") {
        run++;
      }
    }
    // wide ball
    else if (!isNaN(op) && op == -2) {
      wideballdisplay++;
      if (wideball === "yes") {
        run++;
      }
    }
    // wide ball
    else if (!isNaN(op) && op == -3) {
      wicket++;
    }
    //dot ball
    else if (!isNaN(op) && op == 0) {
      dotball++;
    }
    //run
    else if (!isNaN(op) && op >= 0) {
      run += op;
    }
  });
  update(run, noballdisplay, wideballdisplay, wicket, dotball);
}
function thirdid(wideball, noball) {
  let content = document.querySelector(".overcontainer");
  content.addEventListener("input", () => {
    allvalue(wideball, noball);
  });
}
async function index3(teama, teamb, over, wideball, noball, ans, ans1) {
  let content = await fetch("index3.html");
  document.querySelector(".container").outerHTML = await content.text();
  thirdid(wideball, noball);
  teamname(ans);
  overset(over);
  extra();

  document.getElementById("nextteam").addEventListener("click", () => {
    if (confirm("you fill the all runs of the all over")) {
      index4(teama, teamb, over, wideball, noball, ans, ans1);
    }
  });
}

async function index2(teama, teamb, over, wideball, noball) {
  let content = await fetch("index2.html");

  document.getElementsByClassName("container")[0].outerHTML =
    await content.text();
  document.getElementById("team_1").innerText = await teama;
  document.getElementById("team_2").innerText = await teamb;

  document.getElementById("subteamname").addEventListener("click", () => {
    let ans = document.getElementById("choosebat").value;
    let ans1;
    if (teama === ans) {
      ans1 = teamb;
    } else {
      ans1 = teama;
    }
    index3(teama, teamb, over, wideball, noball, ans, ans1);
  });
}

document.getElementById("subButton").addEventListener("click", () => {
  var teama = document.getElementById("name_a").value;
  var teamb = document.getElementById("name_b").value;
  var over = document.getElementById("over").value;
  var wideball = document.getElementById("wide_yes").value;
  var noball = document.getElementById("noball_yes").value;
  if(teama && teamb )
  {
  index2(teama, teamb, over, wideball, noball);
  }
  else
  {
    alert("Plzz Fill The Team Name .");
  }
});
