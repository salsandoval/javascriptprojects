function WARNING_DO_NOT_CLICK() {
    var str = "This text is red!";
    var result = str.fontcolor("red");
    document.getElementById("Red_Text").innerHTML = result;
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " A lot from this book!";
    document.getElementById("concatenate") .innerHTML = sentence;
}