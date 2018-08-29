//  Here is a comment
/*  multi line 
    Sarah Dabbs
    */
console.log("hello javascript");

//  VALUE or data types
console.log("Hello from Javascript!");
console.log("Let's dosome math");
console.log(4+7);
console.log(12/0);
console.log('Goodbye!');

console.log();
let a = 3.14;
// const b;
console.log(a);
const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1,temp2,temp3);
// temp3 = 9;

console.log();
//INCREMENT A # VARIABLE
let c = 0;       //c contains 0
c += 1;          //c contains 1
c++;             //c contains 2
console.log(c);  //Shows 2

console.log();
//VARIABLE SCOPE
let num1 = 0;
{
    num1 = 1; //OK : num1 is declared in the apparent block
    const num2 = 0;
    //console.log(num1);
}
//console.log(num2); //OK : num1 is declared in the current block

console.log();
//EXPRESSIONS
const d = 3;
let e = d;
e = e + 1;
console.log(e);

let f = 3 + 2 *4;
console.log(f);
f=(3 + 2) * 4;
console.log(f);

//TEMPLATE LITERAL
const country = "France";
console.log(`I live in ${country}`); //Show "I Live in France"
const x = 3;
const y = 7;
console.log(`${x}+ ${y} = ${x+y}`); //Show "3 + 7 = 10"

console.log();
//observe the following outputs
console.log(4+5);
console.log("4 + 5");
console.log("4" + "5");
console.log(4 + "5");
const g = "five" *2;
console.log(g);

console.log();
//explicit conversion Number() or String()
const h = "5";
console.log(h+1); //Concatenation: show the string "51"
const i =  Number(h);
console.log(i+1); // Numerical addition: show the number 6
const j = 6;
console.log("5"+ String(j));
console.log(Number("dog"));

console.log();
//STRICT EQUALITY USING ===
let num = 0;
let str = '0';

console.log(num === num);   //true
console.log(str === str);   //true
console.log(num === str);   //false
console.log(num == str);    //true

console.log();
//SWITCH
const q = "abc";
switch (q){
    case "abc":
        console.log("q = abc");
        break;
    case "def":
        console.log("q = def");
        break;
    default:
        console.log("otherwise");
}

console.log();
//WHILE LOOP
let number1 = 1;
while (number1 <= 5){
    console.log(number1);
    number1++;
}
console.log();
//FOR LOOP
for (let i = 1; i <= 5; i++){
    console.log(i);
}
