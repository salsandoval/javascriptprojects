function Call_Loop() {//loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function string_length() {//string 
let str = "WAZZZZUUPP!";
document.getElementById("yo").innerHTML = str.length;;
}

var Fruits = ["Banana", "Apple", "Grape", "Guava", "Kiwi"];//fruit loop
var Content = "";
var y;
function for_Loop() {
    for (Y = 0; Y < Fruits.length; Y++){
        Content += Fruits[Y] + "<br>";
    }
    document.getElementById("List_of_fruits").innerHTML = Content;
}

function Star_wars() {
    var Jedi_picture = [];
    Jedi_picture[0] = "yoda";
    Jedi_picture[2] = "Luke";
    Jedi_picture[3] = "Rey";
    Jedi_picture[3] = "Obi_Wan";
    Jedi_picture[4] = "Mace";
    document.getElementById("Jedi").innerHTML = "In this picture, the Jedi is " + 
        Jedi_picture[3] + ".";
}

function constant_function() {//constant function
    const Avenger = {name:"iron man", color:"red", powers:"technology"};
    Avenger.color = "green";
    Avenger.coolness = "1,000";
    document.getElementById("constant").innerHTML = " coolness factor of " + 
        Avenger.name + " is " + Avenger.coolness;
}

    var X = 100;// used let keyword
    document.write(X);
    {
        let X = 90;
        document.write("<br>" + X);
    }
    document.write("<br>" + X)
    document.getElementById("keyword").innerHTML = X;



    var X = myFunction(5, 6);

    function myFunction(a, b) {
        return a * b;
    }
    document.getElementById("return").innerHTML = X;

    let phone = {//let
        brand: "iphone ",
        model: "12 max ",
        year: "2021 ",
        color: "black ",
        description :function() {
            return "The phone is a " + this.color + this.brand + this.model;
        }
    };
    document.getElementById("phone_object").innerHTML = phone.description();

    function myFunction() {//break statement
        var text = "";
        var i = 0;
        while (i < 5) {
            text += "<br>The number is " + i;
            i++;
            if (i === 3){
                break;
            }
        }
        document.getElementById("demo").innerHTML = text;
    }


    function myFunction1() {//continue statement
        var text = "";
        var i = 0;
        while (i < 5) {
            i++;
            if (i === 3) {
                continue;
            }
            text += "<br>The number is" + i;
        }
        document.getElementById("demo1").innerHTML = text;
    }
