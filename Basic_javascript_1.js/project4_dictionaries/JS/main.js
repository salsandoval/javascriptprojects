function Dictionary () {//KVP
    var Alien = {
        Species:"Yoda",
        Color:"Green",
        Powers:"The Force",
        Age:900,
        Weapon:"Lightsaber"
    };
    delete Alien.Powers;//deleted powers
    document.getElementById("Dictionary").innerHTML = Alien.Powers
}
