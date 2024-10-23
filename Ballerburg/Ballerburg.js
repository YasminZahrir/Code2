"use strict";
let canvas = document.querySelector("canvas#map");
let ctx = canvas.getContext("2d");
document.addEventListener('DOMContentLoaded', () => {
    const power = document.getElementById('power');
    const angle = document.getElementById('angle');
    // Set step size (how much the slider moves when pressing A/D keys)
    const step = 10;
    // Add keydown event listener
    document.addEventListener('keydown', (_event) => {
        // Get current slider value
        let currentValue = power.valueAsNumber;
        // Check which key is pressed
        if (_event.key === 'a') {
            // Move left (decrease value) like pressing left arrow
            currentValue = currentValue - step;
            power.value = currentValue.toString();
        }
        else if (_event.key === 'd') {
            // Move right (increase value) like pressing right arrow
            currentValue = currentValue + step;
            power.value = currentValue.toString();
        }
    });
    // Add keydown event listener
    document.addEventListener('keydown', (_event) => {
        // Get current slider value
        let currentValue = angle.valueAsNumber;
        // Check which key is pressed
        if (_event.key === 's') {
            // Move down (decrease value) like pressing down arrow
            currentValue = currentValue - step;
            angle.value = currentValue.toString();
        }
        else if (_event.key === 'w') {
            // Move up (increase value) like pressing up arrow
            currentValue = currentValue + step;
            angle.value = currentValue.toString();
        }
    });
});
