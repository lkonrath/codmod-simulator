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
    var $parts = $('<div class="parts"></div>');

    $graph.append('<div class="title">Nonreturn to Zero (NRZ), Unipolar</div>')
    $parts.append('<div class="part"><img src="graphs/nrz/begin.png"></div>');

    for (var x = 0; x < binary.length; x++) {

        var previous = binary.charAt(x - 1);
        var current = binary.charAt(x);
        var isFirst = x == 0;
        var partName = '';

        if (isFirst) {
            partName = current == '0' ? 'down' : 'up';
        }
        else {
            if (current == '0' && previous == '1') {
                partName = 'godown';
            }
            else if (current == '0' && previous == '0') {
                partName = 'down';
            }
            else if (current == '1' && previous == '0') {
                partName = 'goup';
            }
            else if (current == '1' && previous == '1') {
                partName = 'up';
            }
        }

        $parts.append('<div class="part"><img src="graphs/nrz/' + partName + '.png"></div>');

    }

    $parts.append('<div class="part"><img src="graphs/nrz/end.png"></div>');
    $graph.append($parts);

    return $graph;
}

function render_nrzl(binary) {
    var $graph = $('<div class="graph"></div>');
    var $parts = $('<div class="parts"></div>');

    $graph.append('<div class="title">Nonreturn to Zero-Level (NRZ-L), Bipolar</div>')
    $parts.append('<div class="part"><img src="graphs/nrzl/begin.png"></div>');

    for (var x = 0; x < binary.length; x++) {

        var previous = binary.charAt(x - 1);
        var current = binary.charAt(x);
        var isFirst = x == 0;
        var partName = '';

        if (isFirst) {
            partName = current == '0' ? 'down' : 'up';
        }
        else {
            if (current == '0' && previous == '1') {
                partName = 'godown';
            }
            else if (current == '0' && previous == '0') {
                partName = 'down';
            }
            else if (current == '1' && previous == '0') {
                partName = 'goup';
            }
            else if (current == '1' && previous == '1') {
                partName = 'up';
            }
        }

        $parts.append('<div class="part"><img src="graphs/nrzl/' + partName + '.png"></div>');

    }

    $parts.append('<div class="part"><img src="graphs/nrzl/end.png"></div>');
    $graph.append($parts);

    return $graph;
}

function render_nrzi(binary) {

    var $graph = $('<div class="graph"></div>');
    var $parts = $('<div class="parts"></div>');

    $graph.append('<div class="title">NonReturn to Zero Inverted (NRZI), Bipolar</div>')
    $parts.append('<div class="part"><img src="graphs/nrzli/begin.png"></div>');


    var pole = undefined;

    for (var x = 0; x < binary.length; x++) {

        var current = binary.charAt(x);

        var isFirst = x == 0;
        var partName = '';

        if (isFirst) {
            partName = 'up';
            pole = 'up';
        }
        else {
            if (current == '0') {
                partName = pole;
            }
            else {
                if (pole == 'up') {
                    partName = 'godown';
                    pole = 'down';
                }
                else {
                    partName = 'goup';
                    pole = 'up';
                }
            }
        }

        $parts.append('<div class="part"><img src="graphs/nrzli/' + partName + '.png"></div>');

    }

    $parts.append('<div class="part"><img src="graphs/nrzli/end.png"></div>');
    $graph.append($parts);

    return $graph;

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