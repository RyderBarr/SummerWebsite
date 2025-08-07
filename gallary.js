$(document).ready(function(){

    $('nav a').on('mouseover', function() {

        $(this).css('color', '#ff8000'); 

        $(this).css('transition', 'color 1s ease');
        
        $(this).css('cursor', 'pointer');

    });

    $('nav a').on('mouseout', function() {

        $(this).css('color', 'black');      

        $(this).css('transition', 'color 1s ease');

    });

    $('.text').on('mouseover', function() {

        $(this).css('color', '#ffffff');

        $(this).css('background-color', 'rgba(0, 0, 0, 0.5)');
        $(this).css('transition', 'background-color 0.5s ease, color 0.5s ease');

    });

    $('.text').on('mouseout', function() {

        $(this).css('color', 'black');

        $(this).css('background-color', 'transparent');
        $(this).css('transition', 'background-color 5s ease, color 5s ease');

    });

    $('.rainbow').on('mouseover', function() {
    
        $(this).css('animation', 'rapidRainbow 10s infinite');
    
    });

    $('.rainbow').on('mouseout', function() {
    
        $(this).css('animation', 'rainbow 10s infinite');
    
    });

});