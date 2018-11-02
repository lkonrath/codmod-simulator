$('.binary-input').click(function(event){
    var $input = $(event.target);
    ToggleBinaryInputValue($input);
})

$('.btn-show').click(function(){
    renderAll();
})

$('.codmod-wrapper input').change(function(event){
    
    //Clear all checked inputs
    var $options = $('.codmod-options-wrapper .option input');
    $.each($options, function(index,option){
        option.checked = false;
    });

    //Show and hide options
    switch (event.target.value) {
        case 'cod':
            $('.codmod-options-wrapper .option.mod').hide();
            $('.codmod-options-wrapper .option.cod').show();
            break;
        case 'mod':
            $('.codmod-options-wrapper .option.mod').show();
            $('.codmod-options-wrapper .option.cod').hide();
            break
        default:
            break;
    }

})