"use scrict";

var user = {
    username: "John",
    x: 0,
    y: 0
};

var input = [];

var inventory = ["pokeball", "pokeball", "pokeball"];

var output = "";

window.onload = function(){
    update();
}

//output functions
function update() {
    var basicE = document.getElementById("basic");
    var outputE = document.getElementById("output");
    var inputE = document.getElementById("input");
    var quickpadE = document.getElementById("quickpad");
    

    outputE.innerHTML = "";
    quickpadE.value = "";

    basicE.innerHTML = "X: " + user.x + "<br>Y: " + user.y + "<br>";
    current = getCurrent(user.x , user.y);
    console.log("currentPosStuff" , current)
    for (var i = 0; i < current.length;){
        let it = current[i];
        if (current[i][0] == "/"){
            output += "There is a " + it.substr(1) + " that you can collect.<br>";
        }
        if (current[i][0] == "#"){
            output += "There is a wild " + it.substr(1) + " near you.<br>";
        }
        i++;
    }
    outputE.innerHTML = output;
    output = "";
}

//array functions
function find(target , array){
    for (var i = 0; i < array.length;){
      if (array[i] == target){
        return i;
        break;
      } else if (i + 1 == array.length){
        return "false";
        break;
      }
      i++;
    }
}

function add(item , array){
    array[array.length] = item;
}

//quickpad functions
function keyCmnds(key , element){
    switch (key) {
        case "a":
            user.x--;
            break;
        case "d":
            user.x++;
            break;
        case "s":
            user.y--;
            break;
        case "w":
            user.y++;
            break; 
    }
    update();
}

//text functions 
function enter(key , element){
    if (key == "Enter"){
        input = processText(element.value);
        element.value = "";
        inputCmnds(input);
    }
}

function processText(input){
    input += " ";
    var ii = 0;
    var word = "";
    var output = [];
    for (var i = 0; i < input.length;){
        if (input[i] == " "){
            output[ii] = word;
            word = ""
            ii++;
        } else {
            word += input[i] 
        }
        i++;
    }
    return output.slice();
}

//pokemon functions
function findPokemon(target){
    for (var i = 0; i < pokemon.length;){
        if (pokemon[i].Name == target){
            console.log(pokemon[i]);
            return pokemon[i];
            break;
        }  
        i++;
    }
}
