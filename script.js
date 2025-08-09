$(document).ready(function(){

    let currentImageIndex;

    // amount of images in the gallery -1 ( because of 0 indexing )
    let imageCount = 9;

    function getImage() 
    {

        // getting the current class of the image element which will be the index
        currentImageIndex = document.getElementById("image").getAttribute("class")[0]

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

            // if the current index is 0 then we want to go to the last image
            currentImageIndex -= -imageCount;// i subtract -imageCount so it doesn't concatinate the number

        }

        $("#display").replaceWith(

            // grabbing the current image index and making the image element and setting the class to the current index
            `
            <div id="display">

                <img src="./style/img/img${currentImageIndex}.jpg" alt="" id="image" class="${currentImageIndex} rainbow">

            </div>
            `

        );

        console.log(currentImageIndex);
    
    });

    $("#button2").click(function()
    {
    
        getImage();

        if (currentImageIndex > imageCount - 1)
        {
        
            currentImageIndex = 0;
        
        }
        else
        {

            // if the current index is greater than the amount of images then we want to go to the first image
            currentImageIndex++;

        }

        $("#display").replaceWith(

            // grabbing the current image index and making the image element and setting the class to the current index
            `
            <div id="display">

                <img src="./style/img/img${currentImageIndex}.jpg" alt="" id="image" class="${currentImageIndex} rainbow">

            </div>
            `
            
        );
    
    });

    // this is for the keypress events 
    // does the same thing as the buttons but with the a and d keys
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
                currentImageIndex -= -imageCount;
            }

            $("#display").replaceWith(
                `
                <div id="display">

                    <img src="./style/img/img${currentImageIndex}.jpg" alt="" id="image" class="${currentImageIndex} rainbow">

                </div>
                `
            );

        } 
        
        if(event.key === 'd') 
        {

           if (currentImageIndex > imageCount - 1)
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

                <img src="./style/img/img${currentImageIndex}.jpg" alt="" id="image" class="${currentImageIndex} rainbow">

            </div>
            `
        );
    
        }

    });

});