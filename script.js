// Retrieve and apply saved color
const savedColor = localStorage.getItem('bgColor');
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}

// Save color and trigger animation
document.getElementById('saveBtn').onclick = () => {
    const color = document.getElementById('colorInput').value;

    // Save to localStorage and apply the color
    localStorage.setItem('bgColor', color);
    document.body.style.backgroundColor = color;

    // Trigger animation
    const box = document.getElementById('animatedBox');
    box.style.transform = 'scale(1.5)';
    setTimeout(() => {
        box.style.transform = 'scale(1)';
    }, 500); // Reset after 500ms
};


