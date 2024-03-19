$(document).ready(function(){
    $('.fa-bars').on('click',function(){
        $('#menu_telefone').toggleClass('active');
        $('.fa-bars').toggleClass('fa-x');
    });
});