function water_is_good () {//concat method
    var part_1 = "I drink ";
    var part_2 = "water because ";
    var part_3 = " is good ";
    var part_4 = "for you!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function string_1() {//string method
    var sentence = "May the force be with you.";
    var section = sentence.slice(8,25);
    document.getElementById("string").innerHTML = section;
}

function upper_case() {//touppercase method
var str  ="may the force be with you!";
var res = str.toUpperCase();
document.getElementById("upper").innerHTML = res;
}

function drink() {
let str = "Drink more water!";
document.getElementById("Look_for").innerHTML = str.search("water");
}

function string_method() {//string method
    var X =186;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_method() {//precision method
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function myFunction() {//to fixed method
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("to_fixed").innerHTML = n;
  }

  function value_of() {
    let str = "WAZZZUUPPPPP!";
    document.getElementById("return").innerHTML = str.valueOf();
  }

  