$(document).ready(function(){

    $('nav a').on('mouseover', function() {
        $(this).css('color', '#ff8000'); 
        $(this).css('transition', 'color 0.3s ease');
        $(this).css('cursor', 'pointer');
    });

    $('nav a').on('mouseout', function() {
        $(this).css('color', 'black');      
        $(this).css('transition', 'color 0.3s ease');
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

});