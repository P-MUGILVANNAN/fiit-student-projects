document.addEventListener('DOMContentLoaded', function() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const ampmElement = document.getElementById('ampm');
    const themeToggle = document.getElementById('theme-toggle');
    const formatToggle = document.getElementById('format-toggle');
    const body = document.body;
    
    let is24HourFormat = false;
    
    // Update clock every second
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = '';
        
        if (!is24HourFormat) {
            ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // Convert 0 to 12
        }
        
        // Add leading zeros
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
        ampmElement.textContent = ampm;
    }
    
    // Toggle between light and dark theme
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');
        
        const isDark = body.classList.contains('dark-theme');
        themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
    
    // Toggle between 12 and 24 hour format
    formatToggle.addEventListener('click', function() {
        is24HourFormat = !is24HourFormat;
        formatToggle.textContent = is24HourFormat ? 'Switch to 12-hour' : 'Switch to 24-hour';
        updateClock();
    });
    
    // Initial clock update and update every second
    updateClock();
    setInterval(updateClock, 1000);
});