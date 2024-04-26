const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

function startDrawing(event) {
    isDrawing = true;
    draw(event);
}

function draw(event) {
    if (!isDrawing) return;

    const x = event.offsetX;
    const y = event.offsetY;

    ctx.fillStyle = '#000';
    ctx.fillRect(x, y, 5, 5); // Change size for thicker lines

    // For better recognition, you can preprocess the image (resize, grayscale, etc.)
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('result').textContent = '';
}

function recognizeCharacter() {
    const imageData = canvas.toDataURL();
    // Send imageData to a recognition API or process it locally (e.g., TensorFlow.js)
    // Display the recognized character or word in the result area
    document.getElementById('result').textContent = 'Recognized character: A';
}
