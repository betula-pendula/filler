var elem = document.querySelectorAll("span");
var inputs = document.querySelectorAll(["input", "select"]);

function hiddenTooltip() {
    for (var i = 0; i <= 6; i++) {
        elem[i].style.visibility = 'hidden';
    }
}

inputs[0].addEventListener('keydown', function (event) {
    if (event.code == 'Enter' || event.code == 'Tab') {
        if (!/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(inputs[0].value)) {
            event.returnValue = false;
            elem[0].style.visibility = 'visible';
            inputs[0].focus();
        } else {
            elem[0].style.visibility = 'hidden';
            if (event.code == 'Tab') inputs[0].focus();
            if (event.code == 'Enter') inputs[1].focus();
        }
    }
});

inputs[1].addEventListener('keydown', function (event) {
    if (event.code == 'Enter' || event.code == 'Tab') {
        if (!/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(inputs[1].value)) {
            event.returnValue = false;
            elem[1].style.visibility = 'visible';
            inputs[1].focus();
        } else {
            elem[1].style.visibility = 'hidden';
            if (event.code == 'Tab') inputs[1].focus();
            if (event.code == 'Enter') inputs[2].focus();
        }
    }
});

inputs[2].addEventListener('keydown', function (event) {
    if (event.code == 'Enter' || event.code == 'Tab') {
        if (!/^[0-9]+$/.test(inputs[2].value) || inputs[2].value.length != 16) {
            event.returnValue = false;
            elem[2].style.visibility = 'visible';
            inputs[2].focus();
        } else {
            elem[2].style.visibility = 'hidden';
            if (event.code == 'Tab') inputs[2].focus();
            if (event.code == 'Enter') inputs[3].focus();
        }
    }
});

inputs[3].addEventListener('keydown', function (event) {
    if (event.code == 'Enter' || event.code == 'Tab') {
        if (inputs[3].value == "mm") {
            event.returnValue = false;
            elem[3].style.visibility = 'visible';
            inputs[3].focus();
        } else {
            elem[3].style.visibility = 'hidden';
            if (event.code == 'Tab') inputs[3].focus();
            if (event.code == 'Enter') inputs[4].focus();
        }
    }
});

inputs[4].addEventListener('keydown', function (event) {
    if (event.code == 'Enter' || event.code == 'Tab') {
        if (inputs[4].value == "yy") {
            event.returnValue = false;
            elem[4].style.visibility = 'visible';
            inputs[4].focus();
        } else {
            elem[4].style.visibility = 'hidden';
            if (event.code == 'Tab') inputs[4].focus();
            if (event.code == 'Enter') inputs[5].focus();
        }
    }
});

inputs[5].addEventListener('keydown', function (event) {
    if (event.code == 'Enter' || event.code == 'Tab') {
        if (!/^[0-9]+$/.test(inputs[5].value) && (inputs[5].value.length != 3 || inputs[5].value.length != 4)) {
            event.returnValue = false;
            elem[5].style.visibility = 'visible';
            inputs[5].focus();
        } else {
            elem[5].style.visibility = 'hidden';
            if (event.code == 'Tab') inputs[5].focus();
            if (event.code == 'Enter') inputs[6].focus();
        }
    }
});

inputs[6].addEventListener('keydown', function (event) {
    if (event.code == 'Enter' || event.code == 'Tab') {
        if (!/^[0-9]+$/.test(inputs[6].value) || inputs[6].value.length != 5) {
            event.returnValue = false;
            elem[6].style.visibility = 'visible';
            inputs[6].focus();
        } else {
            elem[6].style.visibility = 'hidden';
            if (event.code == 'Tab') inputs[6].focus();
            if (event.code == 'Enter') inputs[7].focus();
        }
    }
});

function validateForm(e) {
    hiddenTooltip();
    var rules = [
        /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(inputs[0].value),
        /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u.test(inputs[1].value),
        /^[0-9]+$/.test(inputs[2].value) && inputs[2].value.length == 16,
        inputs[3].value != "mm",
        inputs[4].value != "yy",
        /^[0-9]+$/.test(inputs[5].value) && inputs[5].value.length == 3,
        /^[0-9]+$/.test(inputs[6].value) && inputs[6].value.length == 5
    ]
    for (var i = 0; i < rules.length; i++) {
        if (rules[i] == false) {
            elem[i].style.visibility = 'visible';
            inputs[i].focus();
            break
        }
    }
    e.preventDefault();
}