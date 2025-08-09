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
            currentImageIndex --;
        }
        else
        {
            currentImageIndex -= -6;
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

        if (currentImageIndex > 5)
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

    $(document).on('keypress', function(event) 
    {

        getImage();

        if (event.key === 'a') 
        {

            if (currentImageIndex > 0)
            {
                currentImageIndex --;
            }
            else
            {
                currentImageIndex -= -6;
            }

            $("#display").replaceWith(
                `
                <div id="display">

                    <img src="./style/img/img${currentImageIndex}.jpg" alt="" id="image" class="${currentImageIndex}">

                </div>
                `
            );

        } 
        
        if(event.key === 'd') 
        {

           if (currentImageIndex > 5)
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
    
        }

    });

});