$(document).ready(function(){

    // hover effects for links
    $('a').on('mouseover', function() 
    {

        $(this).css('color', '#ff8000'); 

        $(this).css('text-decoration', 'none');

        $(this).css('border-bottom', 'solid 3px #ff8000');

        // making it pop
        $(this).css('transform', 'scale(1.1)');

        // Adding transition for smooth effect
        $(this).css('transition', 'color 1s ease, transform 1s ease, border-bottom 1s ease');
        
        $(this).css('cursor', 'pointer');

    });

    $('a').on('mouseout', function() 
    {

        $(this).css('color', 'black');      

        $(this).css('transform', 'scale(1)');

        $(this).css('border-bottom', 'solid 3px black');

        $(this).css('transition', 'color 1s ease, transform 1s ease, border-bottom 1s ease');

    });

    // hover effects for images
    $('img').on('mouseover', function() 
    {
        
        // making it pop
        $(this).css('transform', 'scale(1.3)');
        
        $(this).css('padding', '15px');
        $(this).css('transition', 'padding 0.3s ease, transform 0.3s ease');

        // making it esayer to focus on
        $(this).css('animation', 'none');

    });

    $('img').on('mouseout', function() 
    {
        
        $(this).css('transform', 'scale(1)');

        // $(this).css('animation', 'disimage 1s infinite');

        $(this).css('padding', '5px');
        $(this).css('transition', 'padding 0.3s ease, transform 0.3s ease');

    });

    // hover effects for specific text 
    $('.text').on('mouseover', function() 
    {

        // making it easier to read
        $(this).css('color', '#ffffff');

        $(this).css('background-color', 'rgba(0, 0, 0, 0.5)');
        $(this).css('transition', 'background-color 0.5s ease, color 0.5s ease');

    });

    $('.text').on('mouseout', function() 
    {

        $(this).css('color', 'black');

        $(this).css('background-color', 'transparent');
        $(this).css('transition', 'background-color 5s ease, color 5s ease');

    });

    // hover effects for buttons
    $('button').on('mouseover', function()
    {

        $(this).css('background-color', '#ff8000');

        $(this).css('color', 'white');

        // making it pop    
        $(this).css('transform', 'scale(1.1)');

        $(this).css('transition', 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease');
   
    });

    $('button').on('mouseout', function()
    {   

        $(this).css('background-color', '#dedeff');

        $(this).css('color', 'black');

        $(this).css('transform', 'scale(1)');

        $(this).css('transition', 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease');

    });

    // hover effects for rainbow animation
    $('.rainbow').on('mouseover', function()
    {
    
        // making it rapid
        $(this).css('animation', 'rapidRainbow 10s infinite');
    
    });

    $('.rainbow').on('mouseout', function() 
    {
    
        $(this).css('animation', 'rainbow 10s infinite');
    
    });

    
});