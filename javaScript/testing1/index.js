//we can call before write that function that call hoisting
cow();
function cow() {
  console.log("This is a animale");
}
// *********************named assignment function
let f_var = function dog() {
  console.log("bark");
};

f_var();
// dog(); we can not call threw the dog()

// ********************anonymas assigment function
let f2_var = f_var;
f2_var();

// ********************arguments
function sum(a,b)
{ console.log(arguments);
  return a+b;
}

// if we are sending the parameter they are stored in the object argument
sum(1,2,34,5,5,6,90);

// we are Createing Dynamic sum
// this ... calls the rest opretor
function sumd(...args)
{
  total = 0 ;
  for (i of args)
  {
    total += i;
  }
  return total;
}

console.log("This is a sum of the dynamic input : "+sumd(1,2,3,4,5,6));
// we are create the dynamic calculatore
function dynamiccalc(...args)
{
  index = 1 ;
  let ans=0;
  count=0;
  for (;index < args.length ; index=index+2)
  {
    count++;
    if(args[index]==='+')
    {
      ans = args[index-1]+args[index+1];
      args.splice(index-1,3,ans);
      index=-1;
      
    }
    else if(args[index]==='-')
    {
      ans = args[index-1]-args[index+1];
      args.splice(index-1,3,ans);
      index=-1;
    }
    else if(args[index]==='*')
    {
      ans = args[index-1]*args[index+1];
      args.splice(index-1,3,ans);
      index=-1;
    }
    else if(args[index]==='/')
    {
      ans = args[index-1]/args[index+1];
      args.splice(index-1,3,ans);
      index=-1;
    }
    else if(args[index]==='**')
    {
      ans = args[index-1]**args[index+1];
      args.splice(index-1,3,ans);
      index=-1;
    }
  }
  return args;
}
let ans1 = dynamiccalc(1,'+',2,'-',5,'+',90,'*',34,'/',2,'**',5);
console.log(count);
console.log(ans1);


const collage = {
    study:5,
    madem:4,
    kaneka:1,
    Fname:"vishv",
    Lname:"patel",
    get Fullname()
    {
      console.log(`${this.Fname}  ${this.Lname}`);
    },
    set Fullname(value)
    {
    
      if(typeof value != 'string')
      throw new Error("Plzz Enter the string ");
      value=value.split(' ');
      console.log("This is a value : "+value);
      this.Fname=value[0];
      this.Lname=value[1];
    }
}

collage.Fullname;



//try and catch

try{
  collage.Fullname="true";
} catch(e)
{
  alert(e);
}

collage.Fullname;