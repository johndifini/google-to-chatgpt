document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const result = urlParams.get('result');
    
    const queryElement = document.getElementById('query');
    const resultElement = document.getElementById('result');
    
    if (queryElement && resultElement) {
        queryElement.textContent = query || 'No query provided';
        resultElement.textContent = result || 'No result available';
    } else {
        console.error('Error: Could not find required elements');
    }
});
