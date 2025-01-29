
const addButton = document.getElementById('addition');
const soustractionButton = document.getElementById('soustraction');
const multiplicationButton = document.getElementById('multiplication');
const divisionButton = document.getElementById('division');
const value0 = document.getElementById('value0');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const value3 = document.getElementById('value3');
const value4 = document.getElementById('value4');
const value5 = document.getElementById('value5');
const value6 = document.getElementById('value6');
const value7 = document.getElementById('value7');
const value8 = document.getElementById('value8');
const value9 = document.getElementById('value9');
const input = document.getElementById('input');


value1.addEventListener('click', () => {
    
    input.value += 1;
});

value2.addEventListener('click', () => {
   
    input.value += 2;
});

value3.addEventListener('click', () => {
    
    input.value += 3;
});

value4.addEventListener('click', () => {
   
    input.value += 4;
});

value5.addEventListener('click', () => {
   
    input.value += 5;
});

value6.addEventListener('click', () => {
    
    input.value += 6;
});

value7.addEventListener('click', () => {
    
    input.value += 7;
    
});

value8.addEventListener('click', () => {

    input.value += 8;
    
});

value9.addEventListener('click', () => {
    
    input.value += 9;
    
});

addButton.addEventListener('click',() => {
input.value += '+';
})

function addition(num1, num2) {
    return num1 + num2;
}

function soustraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}
