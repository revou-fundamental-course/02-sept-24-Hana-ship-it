// Tampilkan bagian kalkulator segitiga dan sembunyikan jajar genjang
document.getElementById('triangle-btn').addEventListener('click', function() {
    document.getElementById('triangle-section').style.display = 'block';
    document.getElementById('parallelogram-section').style.display = 'none';
});

// Tampilkan bagian kalkulator jajar genjang dan sembunyikan segitiga
document.getElementById('parallelogram-btn').addEventListener('click', function() {
    document.getElementById('triangle-section').style.display = 'none';
    document.getElementById('parallelogram-section').style.display = 'block';
});

// Hitung luas dan keliling segitiga
function calculateTriangle() {
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);

    if (isNaN(base) || isNaN(height) || isNaN(side1) || isNaN(side2) || isNaN(side3) || base <= 0 || height <= 0 || side1 <= 0 || side2 <= 0 || side3 <= 0) {
        alert('Harap masukkan nilai yang valid.');
        return;
    }

    const area = 0.5 * base * height;
    const perimeter = side1 + side2 + side3;

    document.getElementById('triangle-result').innerHTML = `
        <h3>Hasil Perhitungan Segitiga</h3>
        <p><b>Luas:</b> ${area.toFixed(2)}</p>
        <p><b>Keliling:</b> ${perimeter.toFixed(2)}</p>
    `;
}

// Hitung luas dan keliling jajar genjang
function calculateParallelogram() {
    const base = parseFloat(document.getElementById('base-parallelogram').value);
    const height = parseFloat(document.getElementById('height-parallelogram').value);
    const side = parseFloat(document.getElementById('side-parallelogram').value);

    if (isNaN(base) || isNaN(height) || isNaN(side) || base <= 0 || height <= 0 || side <= 0) {
        alert('Harap masukkan nilai yang valid.');
        return;
    }

    const area = base * height;
    const perimeter = 2 * (base + side);

    document.getElementById('parallelogram-result').innerHTML = `
        <h3>Hasil Perhitungan Jajar Genjang</h3>
        <p><b>Luas:</b> ${area.toFixed(2)}</p>
        <p><b>Keliling:</b> ${perimeter.toFixed(2)}</p>
    `;
}
