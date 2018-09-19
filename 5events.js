function showVal(){
    console.log(document.getElementById('name').value);
    alert("Hello");
}
document.getElementById("theButton").addEventListener("click",showVal);

var myTextBox = document.getElementById("name");
myTextBox.addEventListener("focus" ,newFunction);

function newFunction(){
    myTextBox.style.backgroundColor = "orange";
}


var secondButton = document.getElementById("button2");
secondButton.addEventListener("click", function(){
    var divText = document.getElementById("theDiv").innerHTML; //.innerHTML grabs what's inside the div
    divText += " new stuff";
    document.getElementById("theDiv").innerHTML = divText;

    alert(divText);
})


document.getElementById("lists").addEventListener("click",function(){
    var listItems = document.getElementsByTagName("li");
    for(leti = 0; i<listItems.length; i++){
        console.log(listItems[i].innerHTML);
    }
})