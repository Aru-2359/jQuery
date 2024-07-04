$(document).ready(function() {
    $('#input').keyup(function(event) {
        if (event.keyCode === 13) {
            var input = $(this).val();
            if (input.trim() !== "") {
                $('ul').append('<li>' + input + '<i class="fa-solid fa-check"></i><i class="fa-solid fa-trash"></i></li>');
                $(this).val('');
            }
        }
    });

    $('ul').on('click','.fa-trash', function(){
        $(this).parent('li').fadeOut(200);
    })
    $('ul').on('click','.fa-check', function(){
        $(this).parent('li').toggleClass('checked');
    })
});