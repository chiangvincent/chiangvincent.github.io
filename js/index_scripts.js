//function displayProject() {
//    var text = document.getElementById("projects"); 
//    text.style.display = "block"; 
//    var placeholder = document.getElementById("placeholder"); 
//    placeholder.style.display = "none"; 
//}
// 

//$(document).ready(function() {
//    $("#project_button").click(function() {
//        $("#projects").fadeIn("medium");
//        $("#placeholder").hide();
//    });
//}); 


$(document).ready(function() {
    $(".buttons button").click(function(){
        $(this).displayInfo(this);
     });
     $.fn.displayInfo = function(button) {
        console.log("hi"); 
        var displayed = ["projects", "music", "placeholder", "experience"]; 
        for (i=0;i<displayed.length; i++) {
            string = displayed[i]; 
            console.log(string); 
            if (string == button.id) {
                var toShow = string += "_text"; 
                $("#" + toShow).css("display","flex");
                $("#" + toShow).css("flex-wrap","wrap");
                $("#" + toShow).fadeIn("medium");
            } else {
                if (string == "placeholder") {
                    $("#" + string).hide(); 
                } else {
                    var toShow = string += "_text"; 
                    $("#" + toShow).hide(); 
                }   
            }
        }
        
     }
});