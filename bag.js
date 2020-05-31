// var health = 100;

// function punch(){
//     health = health - 10;
//     document.getElementById("inner").style.width = health + "%";
//     if(health <= 0){
//         document.getElementById("bagimg").src = "bag-burst.png";
//         document.getElementById("punchbutton").style.display = "none";
//     }
// }

// function restart(){
//     health = 100;
//     document.getElementById("inner").style.width = health + "%";
//     document.getElementById("bagimg").src = "bag.png";
//     document.getElementById("punchbutton").style.display = "inline";
// }

// we started jq after this.........

$(document).ready(function(){
    var health = 100;
    $("#bagimg").hide();
    $("#bagimg").show(1000);

    $("#punchbutton").click(function(){
        afterpunch()
    });

    $("#bagimg").click(function(){
        afterpunch()
    });

    $("#restartbutton").click(function(){
        health = 100;
        dhealth = health+"%";
        $("#inner").css('width',dhealth);
        $("#bagimg").attr("src","bag.png");
        $("#punchbutton").show(1000);
    })


    function afterpunch(){
        health = health - 10;
        dhealth = health+"%";
       
        $("#inner").css('width',dhealth);

        if(health <= 0){
            $("#bagimg").attr("src","bag-burst.png");
            $("#punchbutton").hide(1000);
        }
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



    }


});