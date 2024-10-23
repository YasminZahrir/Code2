"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const power = document.getElementById('power');
    const angle = document.getElementById('angle');
    // Set step size (how much the slider moves when pressing keys)
    const step = 10;
    // Add keydown event listener
    document.addEventListener('keydown', (_event) => {
        // Get current slider value
        let currentValue = power.valueAsNumber;
        // Check which key is pressed
        if (_event.key === 'a') {
            // Move left (decrease value)
            currentValue = currentValue - step;
            power.value = currentValue.toString();
        }
        else if (_event.key === 'd') {
            // Move right (increase value)
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
            // Move down (decrease value)
            currentValue = currentValue - step;
            angle.value = currentValue.toString();
        }
        else if (_event.key === 'w') {
            // Move up (increase value)
            currentValue = currentValue + step;
            angle.value = currentValue.toString();
        }
    });
});
