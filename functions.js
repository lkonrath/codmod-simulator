function getBinaryNumber() {

    var binaryNumber = '';

    for (var x = 1; x <= 8; x++) {
        var $digit = $('.binary-input[data-digit=' + x + ']');
        binaryNumber = $digit.data('value') + binaryNumber;
    }

    return binaryNumber;

}

function ToggleBinaryInputValue($input) {
    if ($input.data('value') == '1') {
        $input.data('value', 0);
        $input.empty().html('0');
    }
    else {
        $input.data('value', 1);
        $input.empty().html('1');
    }
}


function render_nrz(binary) {
    var $element = $('<div>nrz ' + binary + '</div>');
    return $element;
}
function render_nrzl(binary) {
    var $element = $('<div>nrzl ' + binary + '</div>');
    return $element;
}
function render_nrzi(binary) {
    var $element = $('<div>nrzi ' + binary + '</div>');
    return $element;
}


function renderAll() {
    
    var $options = $('.codmod-options-wrapper input:checked');
    var $container = $('.container.right');
    var binary = getBinaryNumber();

    $container.empty();

    $.each($options, function (index, option) {

        switch (option.id) {
            case 'nrz':
                $container.append(render_nrz(binary));
                break;
            case 'nrzl':
                $container.append(render_nrzl(binary));
                break;
            case 'nrzi':
                $container.append(render_nrzi(binary));
                break;
            default:
                break;
        }

    })

}

$(document).ready(function () {
    //'cod' options selected by default
    $('.codmod-options-wrapper .option.mod').hide();
})