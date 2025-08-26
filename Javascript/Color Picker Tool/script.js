document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const colorPicker = document.getElementById('colorPicker');
    const randomColorBtn = document.getElementById('randomColor');
    const colorBox = document.getElementById('colorBox');
    const hexValue = document.getElementById('hexValue');
    const rgbValue = document.getElementById('rgbValue');
    const copyButtons = document.querySelectorAll('.copy-btn');
    const historyContainer = document.getElementById('historyContainer');
    const clearHistoryBtn = document.getElementById('clearHistory');

    // Initialize with default color
    updateColorDisplay(colorPicker.value);
    
    // Load history from localStorage
    loadColorHistory();

    // Event Listeners
    colorPicker.addEventListener('input', function() {
        updateColorDisplay(this.value);
        addToHistory(this.value);
    });

    randomColorBtn.addEventListener('click', generateRandomColor);

    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const textToCopy = document.getElementById(targetId).textContent;
            copyToClipboard(textToCopy);
            showNotification(`Copied: ${textToCopy}`);
        });
    });

    clearHistoryBtn.addEventListener('click', clearHistory);

    // Functions
    function updateColorDisplay(color) {
        colorBox.style.backgroundColor = color;
        hexValue.textContent = color.toUpperCase();
        
        // Convert hex to RGB
        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);
        rgbValue.textContent = `rgb(${r}, ${g}, ${b})`;
        
        // Update color picker value
        colorPicker.value = color;
    }

    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        updateColorDisplay(color);
        addToHistory(color);
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Text copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        });
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    function addToHistory(color) {
        // Get current history
        let history = JSON.parse(localStorage.getItem('colorHistory')) || [];
        
        // Add new color to beginning of array
        history.unshift(color);
        
        // Limit to 12 colors
        if (history.length > 12) {
            history = history.slice(0, 12);
        }
        
        // Save to localStorage
        localStorage.setItem('colorHistory', JSON.stringify(history));
        
        // Update display
        renderHistory(history);
    }

    function loadColorHistory() {
        const history = JSON.parse(localStorage.getItem('colorHistory')) || [];
        renderHistory(history);
    }

    function renderHistory(history) {
        historyContainer.innerHTML = '';
        
        history.forEach(color => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            const colorElement = document.createElement('div');
            colorElement.className = 'history-color';
            colorElement.style.backgroundColor = color;
            
            const valueElement = document.createElement('div');
            valueElement.className = 'history-value';
            valueElement.textContent = color.toUpperCase();
            
            historyItem.appendChild(colorElement);
            historyItem.appendChild(valueElement);
            
            historyItem.addEventListener('click', () => {
                updateColorDisplay(color);
            });
            
            historyContainer.appendChild(historyItem);
        });
    }

    function clearHistory() {
        localStorage.removeItem('colorHistory');
        historyContainer.innerHTML = '';
    }
});