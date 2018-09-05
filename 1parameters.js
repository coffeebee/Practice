//FIRST FUNCTION
function sayHello(){
    console.log("...jumps over the lazy dog!");
}
sayHello();
console.log();

//RETURN A VALUE
function sayHola(){
    hi = "Hola silly"
    return hi;
}
let message = sayHola();
console.log(message); 
//or
console.log(sayHola());

function howzit(){
    let hi = "howzit";
    return hi;
    console.log("I will not print"); // <-- Does not effect anything because nothing happens after a return statement.
}
console.log(howzit());
console.log();

function sayAloha(name){
    const message = `Aloha, ${name}!`; //Don't forget (`) these are back-ticks.
    return message;
}
let name = "Lilo";
console.log(sayAloha(name));
console.log(sayAloha("Stitch"));



console.log();
