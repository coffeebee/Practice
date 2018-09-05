// ANINYMOUS FUNCTIONS  /  SET FUNCTIONS TO A VARIABLE
const hello = function(name){
    const message = `Hello, ${name}!`;
    return message;
}
console.log(hello("Dory"));
console.log();

//FAT ARROW FUNCTIONS
const aloha = (name) => {
    console.log(name);
}
aloha("Nemo");
console.log();

//**************************** */
const howzit = name => `Howzit, ${name}!`;
console.log(howzit("Nani")); //Howzit Nani!

console.log(Math.min(4.5, 5));
console.log(Math.max(4.5, 5));
console.log(Math.pow(6,2));
console.log(Math.sqrt(25));
console.log( Math.ceil( Math.random()*10 ) );