$(document).ready(function(){

    $('nav a').on('mouseover', function() {

        $(this).css('color', '#ff8000'); 
        $(this).css('transition', 'color 0.3s ease');

        $(this).css('text-decoration', 'underline');
        $(this).css('transition', 'text-decoration 0.3s ease');
        
        $(this).css('cursor', 'pointer');

    });

    $('nav a').on('mouseout', function() {

        $(this).css('color', 'black');      
        $(this).css('transition', 'color 0.3s ease');

        $(this).css('text-decoration', 'none');
    });

    $('img').on('mouseover', function() {
        
        $(this).css('transform', 'scale(1.3)');
        $(this).css('transition', 'transform 0.3s ease');
        
        $(this).css('animation', 'none');

    });

    $('img').on('mouseout', function() {
        
        $(this).css('transform', 'scale(1)');
        $(this).css('transition', 'transform 0.3s ease');

        $(this).css('animation', 'rainbow 10s infinite');

    });

    $('.text').on('mouseover', function() {
        $(this).css('color', '#ffffff');
        $(this).css('transition', 'color 0.5s ease');

        $(this).css('background-color', 'rgba(0, 0, 0, 0.5)');
        $(this).css('transition', 'background-color 0.5s ease');
    });

    $('.text').on('mouseout', function() {

        $(this).css('color', 'black');
        $(this).css('transition', 'color 0.5s ease');

        $(this).css('background-color', 'transparent');
        $(this).css('transition', 'background-color 0.5s ease');

    });

    $('.rainbow').on('mouseover', function() {
    
        $(this).css('animation', 'rapidRainbow 1s infinite');
    
    });

});