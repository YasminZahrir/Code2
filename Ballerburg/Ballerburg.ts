document.addEventListener('DOMContentLoaded', () => {
    const slider:HTMLInputElement = document.getElementById('Angle') as HTMLInputElement;
  
    // Set step size (how much the slider moves when pressing A/D keys)
    const step:number = 10;
  
    // Add keydown event listener
    document.addEventListener('keydown', (_event: KeyboardEvent) => {
      // Get current slider value
      let currentValue:number = slider.valueAsNumber;
  
      // Check which key is pressed
      if (_event.key === 'a') {
        // Move left (decrease value) like pressing left arrow
        currentValue = currentValue - step;
        slider.value = currentValue.toString();
      } else if (_event.key === 'd') {
        // Move right (increase value) like pressing right arrow
        currentValue = currentValue + step;
        slider.value = currentValue.toString();
      }
    });
  });
  