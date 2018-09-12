const movies =["Lilo and Stitch", "Hawaii 5-0", "Jurassic Park"];

//STORE DIFF. TYPES OF ELEMENTS
const elements = ["Aloha", 7, {message: "Hozzit mom" }, true];

console.log(movies.length);
console.log(movies[1]);
console.log();

//ITERATING OVER AN ARRAY

for( i = 0; i < movies.length; i++){
    console.log(movies[i]);
}
console.log();

//USING THE FOR-OF METHOD

let ofMovie;
for (ofMovie of movies){
    console.log(ofMovie);
}
console.log();

//FOR-EACH LOOP

movies.forEach(myElement =>{                //anonymous function
    console.log(`For Loop ${myElement}`);
});
console.log();

//ADDING TO AN ARRAY

movies.push("Magnum PI");

console.log(movies[movies.length-1]);
console.log();
for( i = 0; i < movies.length; i++){
    console.log(movies[i]);
}
console.log();

//ADD TO THE BEGINNING OF THE ARRAY

movies.unshift("50 First Dates");
console.log(movies[0]);
console.log();

//REMOVE ELEMENT FROM THE END OF THE ARRAY

movies.pop();

//PUT IT INTO A NEW VARIABLE

let theEndElement = movies.pop();

//SPLICE (INDEX TO START, NUMBER OF ELEMENTS TO REMOVE)

movies.splice(1,2);
for( i = 0; i < movies.length; i++){
    console.log(movies[i]);
}
console.log();