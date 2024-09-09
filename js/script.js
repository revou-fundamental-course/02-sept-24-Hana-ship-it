document.getElementById('triangle-btn').addEventListener('click', function() {
    document.getElementById('triangle-section').style.display = 'block';
    document.getElementById('parallelogram-section').style.display = 'none';
});

document.getElementById('parallelogram-btn').addEventListener('click', function() {
    document.getElementById('triangle-section').style.display = 'none';
    document.getElementById('parallelogram-section').style.display = 'block';
});

function calculateTriangle() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Harap masukkan nilai yang valid.');
        return;
    }

    const area = 0.5 * base * height;
    document.getElementById('triangle-result').innerHTML = `
        <h3>Hasil Perhitungan Segitiga</h3>
        <p><b>Luas:</b> ${area.toFixed(2)}</p>
    `;
}

function calculateParallelogram() {
    const base = parseFloat(document.getElementById('base-parallelogram').value);
    const height = parseFloat(document.getElementById('height-parallelogram').value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert('Harap masukkan nilai yang valid.');
        return;
    }

    const area = base * height;
    document.getElementById('parallelogram-result').innerHTML = `
        <h3>Hasil Perhitungan Jajar Genjang</h3>
        <p><b>Luas:</b> ${area.toFixed(2)}</p>
    `;
}
