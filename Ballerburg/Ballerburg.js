"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const power = document.getElementById('Angle');
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
    const angle = document.getElementById('Angle2');
    // Set step size (how much the slider moves when pressing A/D keys)
    const step2 = 10;
    // Add keydown event listener
    document.addEventListener('keydown', (_event) => {
        // Get current slider value
        let currentValue = angle.valueAsNumber;
        // Check which key is pressed
        if (_event.key === 's') {
            // Move left (decrease value) like pressing left arrow
            currentValue = currentValue - step2;
            angle.value = currentValue.toString();
        }
        else if (_event.key === 'w') {
            // Move right (increase value) like pressing right arrow
            currentValue = currentValue + step2;
            angle.value = currentValue.toString();
        }
    });
});
