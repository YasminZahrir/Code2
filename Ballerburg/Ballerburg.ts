document.addEventListener('DOMContentLoaded', () => {
    const power:HTMLInputElement = document.getElementById('power') as HTMLInputElement;
    const angle:HTMLInputElement = document.getElementById('angle') as HTMLInputElement;
  
    // Set step size (how much the slider moves when pressing A/D keys)
    const step:number = 10;
  
    // Add keydown event listener
    document.addEventListener('keydown', (_event: KeyboardEvent) => {
      // Get current slider value
      let currentValue:number = power.valueAsNumber;
  
      // Check which key is pressed
      if (_event.key === 'a') {
        // Move left (decrease value) like pressing left arrow
        currentValue = currentValue - step;
        power.value = currentValue.toString();
      } else if (_event.key === 'd') {
        // Move right (increase value) like pressing right arrow
        currentValue = currentValue + step;
        power.value = currentValue.toString();
      }
    });
  
    // Add keydown event listener
    document.addEventListener('keydown', (_event: KeyboardEvent) => {
      // Get current slider value
      let currentValue:number = angle.valueAsNumber;
  
      // Check which key is pressed
      if (_event.key === 's') {
        // Move left (decrease value) like pressing left arrow
        currentValue = currentValue - step;
        angle.value = currentValue.toString();
      } else if (_event.key === 'w') {
        // Move right (increase value) like pressing right arrow
        currentValue = currentValue + step;
        angle.value = currentValue.toString();
      }});
    });