"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('Angle');
    // Set step size (how much the slider moves when pressing A/D keys)
    const step = 10;
    // Add keydown event listener
    document.addEventListener('keydown', (_event) => {
        // Get current slider value
        let currentValue = parseInt(slider.value, 10);
        // Check which key is pressed
        if (_event.key === 'a') {
            // Move left (decrease value) like pressing left arrow
            currentValue = currentValue - step;
            slider.value = currentValue.toString();
        }
        else if (_event.key === 'd') {
            // Move right (increase value) like pressing right arrow
            currentValue = currentValue + step;
            slider.value = currentValue.toString();
        }
    });
});
