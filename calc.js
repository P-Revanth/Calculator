function display_Clear() {
    let display = document.getElementById("display");
    display.value = "";
}

function display_Delete() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function display_Calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}