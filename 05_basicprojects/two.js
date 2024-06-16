document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const width = parseInt(document.querySelector('#width').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0 || isNaN(width) || width <= 0) {
        results.innerText = 'Please enter valid values for height and width.';
    } else {
        const bmi = width / ((height / 100) ** 2);
        results.innerText = `BMI: ${bmi.toFixed(2)}`;
    }
});
