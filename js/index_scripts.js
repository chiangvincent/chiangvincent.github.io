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
$(function() {
    var img_con = document.getElementById("pic_container");
    var next = document.getElementById("next"); 
    var prev = document.getElementById("prev"); 

    var images = ["IMG_6629.jpg", "IMG_6628.jpg", "IMG_4006.jpg", "IMG_4142.jpg", 
                  "IMG_4323.jpg", "IMG_4196.jpg", "IMG_6621.jpg", "IMG_6617.jpg",
                  "IMG_4133.jpg", "IMG_6618.jpg", "IMG_6622.jpg", "IMG_4245.jpg", "IMG_4266.jpg", "IMG_4086.jpg", "IMG_4070.jpg", "IMG_4072.jpg", 
                  "main.svg"] 

    var i = images.length;
    
    next.onclick = () =>{
        i = (i<images.length) ?(i= i+1):(i=1); 
        $('#image-zoom').attr("src", "images/nz_aus_photo/Images/"+images[i-1]);
    }
    
    prev.onclick = () =>{
        i = (i<images.length+1 && i>1) ?(i= i-1):(i=images.length);
        $('#image-zoom').attr("src", "images/nz_aus_photo/Images/"+images[i-1]);
    }
    
    
});

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