//Global variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//Local variable
function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
    Add_numbers_1();
    Add_numbers_2();
}

function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Ass_numbers_2();

function Age_Function() {//else if statements
    age = document.getElementById("Age").value;
    if (age >= 18) {
        listen ="You are old enough but still listen to your parents they know best!";
    }
    else {
        listen ="You are not old enough so you better listen to your parents";
    }
    document.getElementById("How_old_are_you").innerHTML = listen
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

