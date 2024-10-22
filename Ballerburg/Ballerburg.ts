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
    const slider2:HTMLInputElement = document.getElementById('Angle2') as HTMLInputElement;
  
    // Set step size (how much the slider moves when pressing A/D keys)
    const step2:number = 10;
  
    // Add keydown event listener
    document.addEventListener('keydown', (_event: KeyboardEvent) => {
      // Get current slider value
      let currentValue:number = slider2.valueAsNumber;
  
      // Check which key is pressed
      if (_event.key === 's') {
        // Move left (decrease value) like pressing left arrow
        currentValue = currentValue - step2;
        slider.value = currentValue.toString();
      } else if (_event.key === 'w') {
        // Move right (increase value) like pressing right arrow
        currentValue = currentValue + step2;
        slider2.value = currentValue.toString();
      }});
    });