function HELLO ()  {
var hello;
document.write(typeof "HELLO");
}

document.write("10" + 5);// type coercion

function my_function1() {
    document.getElementById("test1").innerHTML = 0/0;
}

function my_function2() {
    document.getElementById("test2").innerHTML = isNaN('hello');//not a number
}

function my_function3() {
    document.getElementById("test3").innerHTML = isNaN('123');//is a number
}


function Long_Number() {//infinity and -infinity
    document.getElementById("example").innerHTML = 
    1.7976931348623157E+10308 + "<br>" +  -1.7976931348623157E+10308;
}

function boolean() {//Boolean function
document.getElementById("Example2").innerHTML = (10 > 9);
}

console.log(20 + 10);

console.log(10 < 6);//will be false on console

function assignment() {
document.write(10 == 10);//true on new page
}

function assignment2() {//false on new page
    document.write(2 + 2 == 9);
}

function birth() {//link to my birth year on new page
X = 1982;
Y = 1982;
document.write(X === Y);
}

function birth2() {// Link to my wrong birth year on new page
    X = 1982;
    Y = 1986;
    document.write(X === Y);
}

function birth3() {
    X = 1982;
    Y = "1982";
    document.write(X === Y);
}

function operators() {// and operator displaying true
document.write(5 > 2 && 10 > 4);
}

function operators2() {// and operator displaying false
    document.write(5 > 2 && 1 > 4);
    }

function operators3() {//OR operator displaying false
    document.write(5 > 10 || 10 > 20);
}

function operators4() {//OR operator displaying true
    document.write(5 > 1 || 10 > 20);
}

function not_Function() {// this code is not working can you please check it and let me know what i am doing wrong?
    document.getElementById("Not").innerHTML = ! (5 > 10);
}

