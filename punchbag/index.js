var health = 100;
var starttime;
function punch(){
    if(health == 100){
        var d = new Date();
        starttime = d.getTime();
        console.log("start time ", starttime);
    }
    health -= 10;
    document.getElementById("inner").style.width = health + "%";
    if(health <= 0){
        console.log("you already won , click on restart.....");
        document.getElementById("punch").style.display = "none";
        document.getElementById("bagimg").src = "bag-burst.png";
        var d = new Date();
        var stoptime = d.getTime();
        console.log("stop time ", stoptime);
        console.log("difference = ",stoptime-starttime)
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

$(document).ready(function(){
    // $("#bagimg").hide(1000);
    // $("#bagimg").show(1000);
    $("#punch").click(function(){
        // $('#bagimg').css('transform', 'rotate(30deg)');
        $('#bagimg').css('transform', 'rotate(-50deg)');
        setTimeout( function() {
            $('#bagimg').css('transform', 'rotate(0deg)');
        }, 200);
        setTimeout( function() {
            $('#bagimg').css('transform', 'rotate(50deg)');
        }, 300);
        setTimeout( function() {
            $('#bagimg').css('transform', 'rotate(0deg)');
        }, 400);

    }); 

    $("#scaledemo").click(function(){
        $("#scaledemo").hide(100);
    });

    var elem = $('.tabs')
    var options = {}
    var instance = M.Tabs.init(elem, options);

    // Or with jQuery
  
    $(document).ready(function(){
      $('.tabs').tabs();
    });
          

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, options);
      });
    
      // Or with jQuery
    
      $('.dropdown-trigger').dropdown();
            
});