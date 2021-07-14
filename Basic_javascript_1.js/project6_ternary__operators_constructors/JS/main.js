function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young bro":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " too vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "pinto", 1971, "mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured  in " + Erik.Vehicle_Year;
}

function Food(Cake, Pasta, Soda, Salad) {
this.Food_Cake = Cake;
this.Food_Pasta = Pasta;
this.Food_Soda = Soda;
this.Food_Salad = Salad;
}

var Sal = new Food("Chocolate", "Lasagna", "Coke", "Tossed");
var Pete = new Food("Lavender", "Spaghetti", "Orange soda", "Caesar");
function myFunction2() {
    document.getElementById("New_and_This").innerHTML =
    "Sal likes " + Sal.Food_Cake + " cake. " + " But he hates " + Sal.Food_Salad + 
    " Salad and thats why he's fluffy";
}

function Person(first, localStorage, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

function count_Function() {// nested function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}


