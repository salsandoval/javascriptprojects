function WARNING_DO_NOT_CLICK() {// To change color for on click button
    var str = "I SAID DO NOT CLICK!";
    var result = str.fontcolor("red");
    document.getElementById("Red_Text").innerHTML = result;
}

function myFunction() { // used += to concatenate str 
    var sentence = "I SAID DO NOT CLICK";
    sentence += " YOU REBEL!";
    document.getElementById("concatenate") .innerHTML = sentence;
}