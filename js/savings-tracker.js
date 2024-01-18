function updateProgress() {
    const targetAmount = parseFloat(document.getElementById('targetAmount').value);
    const currentSavings = parseFloat(document.getElementById('currentSavings').value);

    if (isNaN(targetAmount) || isNaN(currentSavings)) {
        alert('Please enter valid numbers.');
        return;
    }

    const progress = (currentSavings / targetAmount) * 100;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = progress + '%';
}