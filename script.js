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
            currentImageIndex = 6;
        }
        else
        {
            currentImageIndex--;
        }

        $("#display").replaceWith(
            `
            <div id="display">

                <img src="./style/img/img${currentImageIndex}.jpg" alt="" id="image" class="${currentImageIndex}">

            </div>
            `
        );

        console.log(currentImageIndex);
    
    });

    $("#button2").click(function()
    {
    
        getImage();

        if (currentImageIndex > 6)
        {
            currentImageIndex = 0;
        }
        else
        {
            currentImageIndex++;
        }

        $("#display").replaceWith(
            `
            <div id="display">

                <img src="./style/img/img${currentImageIndex}.jpg" alt="" id="image" class="${currentImageIndex}">

            </div>
            `
        );
    
    });
});