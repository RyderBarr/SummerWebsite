$(document).ready(function(){

    let currentImageIndex;

    function getImage() 
    {

        currentImageIndex = document.getElementById("image").getAttribute("class")

    }

    $("#button1").click(function()
    {

        getImage();

        if (currentImageIndex > 0)
        {
            currentImageIndex = 10;
        }
        else
        {
            currentImageIndex--;
        }

        $("#display").replaceWith('<img src="./style/img/img1.jpg" alt="">');
    
    });

    $("#button1").click(function()
    {
    
        getImage();

        if (currentImageIndex > 10)
        {
            currentImageIndex = 0;
        }
        else
        {
            currentImageIndex++;
        }

        $("#display").replaceWith('<img src="./style/img/img1.jpg" alt="">');
    
    });
});