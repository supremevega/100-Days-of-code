// Select DOM elements
const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generateBtn');

// Generate initial palette on page load
window.addEventListener('DOMContentLoaded', generatePalette);

// Generate new palette on button click
generateBtn.addEventListener('click', generatePalette);

// Function to create and display 5 random colors
function generatePalette() {
  // Clear existing colors
  palette.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    // Create color box
    const colorBox = document.createElement('div');
    colorBox.classList.add('color-box');
    colorBox.style.backgroundColor = color;

    // Create label
    const label = document.createElement('div');
    label.classList.add('color-label');
    label.innerText = color.toUpperCase(); // Show hex in uppercase

    // (Optional) Copy to clipboard on click
    colorBox.addEventListener('click', () => {
      copyToClipboard(color);
      alert(`Copied ${color.toUpperCase()} to clipboard!`);
    });

    // Append label to box, then box to palette
    colorBox.appendChild(label);
    palette.appendChild(colorBox);
  }
}

// Generate a random 6-digit hex color
function getRandomColor() {
  const hexChars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Utility: Copy text to clipboard
function copyToClipboard(text) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');  // Older method still works widely
  document.body.removeChild(tempInput);
}
