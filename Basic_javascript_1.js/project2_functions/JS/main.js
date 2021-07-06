function WARNING_DO_NOT_CLICK() {// To change color for on click button
    var str = "This text is red!";
    var result = str.fontcolor("red");
    document.getElementById("Red_Text").innerHTML = result;
}

function myFunction() { // used += to concatenate str 
    var sentence = "I am learning";
    sentence += " A lot from this book!";
    document.getElementById("concatenate") .innerHTML = sentence;
}