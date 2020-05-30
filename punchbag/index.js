var health = 100;
function punch(){
    health -= 10;
    document.getElementById("inner").style.width = health + "%";
    if(health <= 0){
        console.log("you already won , click on restart.....");
        document.getElementById("punch").style.display = "none";
        document.getElementById("bagimg").src = "bag-burst.png";
        
    }
}
function dblpunch(){
    health -= 20;
    document.getElementById("inner").style.width = health + "%";
    if(health <= 0){
        console.log("you already won , click on restart.....");
        document.getElementById("punch").style.display = "none";
        document.getElementById("bagimg").src = "bag-burst.png";
        
    }
}

function restart(){
    health = 100;
    document.getElementById("inner").style.width = health + "%";
    document.getElementById("punch").style.display = "inline";
    document.getElementById("bagimg").src = "bag.png";
}