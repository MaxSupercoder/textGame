"use scrict";

var current = [];

var map = [
    [0 , 1 , "/apple"],
    [0 , 0 , "/stone" , "#pickachu" , "/stick"]
]

function getCurrent(x , y){
    var output = [];
    for (var i = 0; i < map.length;){
        if (map[i][0] == x && map[i][1] == y){
            output = map[i].slice();
            output.splice(0 , 2);
            return output.slice();
            break;
        }
        i++;
    }
}

function getPos(x , y){
    var output = [];
    for (var i = 0; i < map.length;){
        if (map[i][0] == x && map[i][1] == y){
            return i;
            break;
        }
        i++;
    }
}


