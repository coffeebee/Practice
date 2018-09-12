//WORKING WITH OBJECTS

const pen ={
    type: "ballpoint",
    color: "blue",
    brand: "bic"
}

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);
console.log();

//CHANGE THE VALUE OF A PROPERTY

pen.color = "red"; //modify the pen color property
console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

pen.price = "2.5"; //add a new property on the fly
console.log(`My pen costs $${pen.price}.`)
console.log();
console.log();


//EXAMPLE OF AN OBJECT: RPG GAME CHARACTER AURORA
//HAVE CLASS CREATE THE AURORA OBJECT WITH A NAME, HEALTH AND STRENGTH

const aurora ={
    name: "Aurora",
    health: 150,
    strength: 25
};

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} strength`);

//AURORA IS HARMED BY AN ARROW - REDUCE HEALTH BY 20
aurora.health -=20;
//AURORA EQUIPS A STRENGTH NECKLACE - INCREASING STRENGTH BY 10
aurora.health +=10;
//console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

function describe(character){
    console.log(`${character.name} has ${character.health} health points and ${character.strength} as strength`);
}
describe(aurora);
console.log();

const mario = {
    name: "Mario",
    health: 150,
    strength: 25,
    describe(){
        return `${this.name} has ${this.health} health points and ${this.strength} as strength`;
    }
}

console.log(mario.describe());