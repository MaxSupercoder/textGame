"use scrict";

function inputCmnds(text){
    console.log(text[0]);
    switch(text[0]){
        case "get":
            grab(text[1]);
            break;
        case "catch":
            catchCheck(text[1]);
            break;
    }
}

function grab(text){
    var itemNum = find("/" + text , current);
    
    if (itemNum != "false" && current[itemNum][0] == "/"){
        add(text , inventory);
        current.splice(itemNum , 1);
        var pos = getPos(user.x , user.y);
        map[pos].splice(itemNum + 2 , 1);
        console.log();
        update();
    } else {
        document.getElementById("input").value = "You cannot do that.";
    }
}

function catchCheck(text){
    console.log("yay");
    var itemNum = find("#" + text , current);
    if (itemNum != "false"){
        catchReal(text , itemNum);
    } else {
        document.getElementById("input").value = "You cannot catch that.";
    }
}

function catchReal(target , pokemonNum){
    var targetNum = find("pokeball", inventory);
    if (targetNum != "false"){
        inventory.splice(targetNum , 1);
        var targetPokemon = findPokemon(target);
        var chance = Math.random() * 100;
        console.log(chance,targetPokemon.Difficulty)
        if (chance >= targetPokemon.Difficulty){
            add(targetPokemon.id , inventory);
            map[getPos(user.x , user.y)].splice(pokemonNum + 2, 1);
            output += "You caught the " + targetPokemon.Name + "!<br>";
        } else {
            output += "The " + targetPokemon.Name + " broke free!<br>";
        }
    }
    update();
}
