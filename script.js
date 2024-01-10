function drawVisualization() {
    const rhythm1 = parseInt(document.getElementById('rhythm1').value);
    const rhythm2 = parseInt(document.getElementById('rhythm2').value);
    const totalLines = rhythm1 * rhythm2;
    const visualization = document.getElementById('visualization');

    visualization.innerHTML = '';

    const spaceBetween = visualization.clientWidth / (totalLines + 1);

    for (let i = 1; i <= totalLines; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        line.style.left = `${spaceBetween * i}px`;
        
        // i === 1 starts visualization of both rhythms on 1st line
        if (i === 1 || i % rhythm1 === 1) {
            line.classList.add('red-extension');
        }
        if (i === 1 || i % rhythm2 === 1) {
            line.classList.add('blue-extension');
        }

        visualization.appendChild(line);
    }
}

document.getElementById('rhythmForm').addEventListener('submit', function(event) {
    event.preventDefault();
    drawVisualization();
});

window.addEventListener('resize', drawVisualization);

drawVisualization();