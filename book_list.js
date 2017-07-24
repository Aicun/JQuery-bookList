$(document).ready(function() {
    $("#categories h2").click(function(){
        
        $(this).toggleClass("minus");
        if($(this).attr("class") != "minus") {
            $(this).next().hide();
        }
        else {
            $(this).next().show();
        }

        $("#image").attr("src","");

        //for IE, make sure a placeholder is not displayed for the image.
        $("#image").attr("style", "display:none;");
    });

    $("#categories a").each(function(){
        var imageURL = $(this).attr("href");;
        var image = new Image();
        image.src = imageURL;
        $(this).click(function(evt) {
            $("#image").attr("src",imageURL);

            //for IE to display the image
            $("#image").attr("style", "style:block;");
            //prevent default action of the link
            evt.preventDefault();
        });
    });
});//end ready