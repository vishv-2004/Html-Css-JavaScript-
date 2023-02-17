function calculatoreapna(...args) {
  index = 1;
  count = 0;
  for (; index < args.length; index = index + 2) {
    proindex = parseInt(check(args));
    if(proindex == -1)
    {
        break;
    }
    console.log("This is a index proindex: " + proindex);
    whichindex = indexofop(args[proindex]);
    console.log("This is a whichindex " + whichindex);
    if (proindex == -1 || whichindex == -1) {
      break;
    }
    switch (whichindex) {
      case 1:
        console.log("This is a main args : "+args);
        ans = args[proindex - 1] * args[proindex + 1];
        args.splice(proindex - 1, 3, ans);
        index = -1;
        console.log("This is a update args"+args);
        break;

      case 2:
        console.log("This is a main args : "+args);
        ans = args[proindex - 1] / args[proindex + 1];
        args.splice(proindex - 1, 3, ans);
        index = -1;
        console.log("This is a update args"+args);
        break;
      case 3:
        console.log("This is a main args : "+args);
        ans = args[proindex - 1] + args[proindex + 1];
        args.splice(proindex - 1, 3, ans);
        index = -1;
        console.log("This is a update args"+args);
        break;
      case 4:
        console.log("This is a main args : "+args);
        ans = args[proindex - 1] - args[proindex + 1];
        args.splice(proindex - 1, 3, ans);
        index = -1;
        console.log("This is a update args"+args);
        break;
      case 5:
        console.log("This is a main args : "+args);
        ans = args[proindex - 1] ** args[proindex + 1];
        args.splice(proindex - 1, 3, ans);
        index = -1;
        console.log("This is a update args"+args);
        break;
      case 6:
        console.log("This is a main args : "+args);
        ans = args[proindex - 1] % args[proindex + 1];
        args.splice(proindex - 1, 3, ans);
        index = -1;
        console.log("This is a update args"+args);
        break;
      default:
        console.log("Plzz userbhai input sahi dalo ");
    }
  }
}
function check(args1) {
  indexi = args1.indexOf("*");
  console.log(indexi);
  if (indexi != -1) return indexi;
  indexi = args1.indexOf("/");
  console.log(indexi);
  if (indexi != -1) return indexi;
  indexi = args1.indexOf("+");
  console.log(indexi);
  if (indexi != -1) return indexi;
  indexi = args1.indexOf("-");
  console.log(indexi);
  if (indexi != -1) return indexi;
  indexi = args1.indexOf("**");
  console.log(indexi);
  if (indexi != -1) return indexi;
  indexi = args1.indexOf("%");
  console.log(indexi);
  if (indexi != -1) return indexi;
  else return -1;
}
function indexofop(args) {
  
  if (args == '*') {
    return 1;
  } else if (args == "/") {
    return 2;
  } else if (args == "+") {
    return 3;
  } else if (args == "-") {
    return 4;
  } else if (args == "**") {
    return 5;
  } else if (args == "%") {
    return 6;
  }
 }

calculatoreapna(1, "/", 2, "*", 90, "+", 3, "-", 3);
indexofop("*");
