function getBinaryNumber(){
    
    var binaryNumber = '';

    for(var x=1; x<=8; x++){
        var $digit = $('.binary-input[data-digit=' + x + ']');
        binaryNumber = $digit.data('value') + binaryNumber;
    }

    return binaryNumber;

}

function ToggleBinaryInputValue($input){
    if($input.data('value') == '1'){
        $input.data('value',0);
        $input.empty().html('0');
    }
    else{
        $input.data('value',1);
        $input.empty().html('1');
    }
}
function renderAll(){
    var $options = $('.codmod-options-wrapper input:checked');
    console.log($options);
}

$(document).ready(function(){
    //'cod' options selected by default
    $('.codmod-options-wrapper .option.mod').hide();
})