//DARK MODE
$(document).ready(function(){
    var $darkMode = $("#darkModeButton");
    var $darkModeIcon = $("#darkModeButton i");

    $darkMode.on("click", function(){
        $("body").toggleClass("darkMode");
        if($("body").hasClass("darkMode")){
            $darkModeIcon.removeClass("bxs-bulb").addClass("bx-bulb");
        } else {
            $darkModeIcon.removeClass("bx-bulb").addClass("bxs-bulb");
        }
    });
});

//Toggle dropdown
