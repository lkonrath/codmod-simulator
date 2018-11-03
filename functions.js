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
    var $graph = $('<div class="graph"></div>');
    var binaryValue = undefined;

    $graph.append('<div class="part"><img src="graphs/nrz/first.png"></div>');

    for (var x = 0; x < binary.length; x++) {
        binaryValue = binary.charAt(x);
        if (binaryValue == '0') {
            $graph.append('<div class="part"><img src="graphs/nrz/down.png"></div>');
        }
        else {
            $graph.append('<div class="part"><img src="graphs/nrz/up.png"></div>');
        }
    }

    $graph.append('<div class="part"><img src="graphs/nrz/last.png"></div>');

    return $graph;
}

function render_nrzl(binary) {
    var $element = $('<div>nrzl ' + binary + '</div>');
    return $element;
}

function render_nrzi(binary) {
    var $element = $('<div>nrzi ' + binary + '</div>');
    return $element;
}

function render_ami(binary) {
    var $element = $('<div>ami ' + binary + '</div>');
    return $element;
}

function render_pseudoternary(binary) {
    var $element = $('<div>pseudoternary ' + binary + '</div>');
    return $element;
}

function render_manchester(binary) {
    var $element = $('<div>manchester ' + binary + '</div>');
    return $element;
}

function render_difManchester(binary) {
    var $element = $('<div>dif manchester ' + binary + '</div>');
    return $element;
}

function render_ask(binary) {
    var $element = $('<div>ask ' + binary + '</div>');
    return $element;
}

function render_fsk(binary) {
    var $element = $('<div>fsk ' + binary + '</div>');
    return $element;
}

function render_psk(binary) {
    var $element = $('<div>psk ' + binary + '</div>');
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
            case 'ami':
                $container.append(render_ami(binary));
                break;
            case 'pseudoternary':
                $container.append(render_pseudoternary(binary));
                break;
            case 'manchester':
                $container.append(render_manchester(binary));
                break;
            case 'dif-manchester':
                $container.append(render_difManchester(binary));
                break;
            case 'ask':
                $container.append(render_ask(binary));
                break;
            case 'fsk':
                $container.append(render_fsk(binary));
                break;
            case 'psk':
                $container.append(render_psk(binary));
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