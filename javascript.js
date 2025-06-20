const INCREASE = document.getElementById("increment");
const DECREASE = document.getElementById("decrement");
const RESET = document.getElementById("reset");
const VALUE = document.getElementById("label1");

let count = 0;

INCREASE.onclick = function () {
    count++;
    VALUE.textContent = count;
};

DECREASE.onclick = function () {
    count--;
    VALUE.textContent = count;
};

RESET.onclick = function () {
    count = 0;
    VALUE.textContent = count;
};
