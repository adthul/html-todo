/*transfers input from user into div class 'list' when div id 'button' is clicked.
also removes individual list items in the 'list' class div when clicked*/

$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=toDoItem]').val();
        $('.list').prepend("<div class='item'>" + toAdd + "</div>");
    });
    $(document).on('click', '.item', function(){
        $(this).remove();
    });
});