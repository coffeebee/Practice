//what everybody else did
aryAnimals = ["1.jpg", "2.jpg"];
aryAnimalsDesc =["cow", "pig"];

function change(img){    
    document.getElementById("large").src = aryAnimals[img];
}

for(var i=0; i<aryAnimals.length; i++){
    document.write(`'<img src='${aryAnimals[i]}' alt='${aryAnimalDesc[i]}'width="150" onclick="change(${img})"/>'`)
}

window.addEventListener("load", printLarge);

// w/divs
function printLarge(){
    var mainImg = document.getElementById("mainImg");
    var largeImg = `<img src= 'pics[0]' alt= '${picsDesc[0]}'>`;
    for(var i=0; i<pics.length; i++){
    large.innerHTML = largeImage;
    }
}
function printthumbs(){
    var thumb = document.getElementById("thumbs");
    //var thumbImg = "<img src='" + pics[0] + "'>";
    for(var i=0; i < pics.length; i++){
    large.innerHTML += `<img src= '${pics[i]}' alt= '${picsDesc[0]}' onclick= 'change(${i})'/>`;
    }
}

//ex
<div id="thumbs">
    <script>printThumbs();</script>
</div>








