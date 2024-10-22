document.addEventListener('DOMContentLoaded', () => {
    const slider:HTMLInputElement = document.getElementById('Angle') as HTMLInputElement;
  
    // Set step size (how much the slider moves when pressing A/D keys)
    const step:number = 10;
  
    // Add keydown event listener
    document.addEventListener('keydown', (_event: KeyboardEvent) => {
      // Get current slider value
      let currentValue:number = parseInt(slider.value, 10);
  
      // Check which key is pressed
      if (_event.key === 'a') {
        // Move left (decrease value) like pressing left arrow
        currentValue = Math.max(parseInt(slider.min), currentValue - step);
        slider.value = currentValue.toString();
      } else if (_event.key === 'd') {
        // Move right (increase value) like pressing right arrow
        currentValue = Math.min(parseInt(slider.max), currentValue + step);
        slider.value = currentValue.toString();
      }
    });
  });
  