// Countdown Module
export function initializeCountdown(targetDate) {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const countdownContainer = document.getElementById('countdown');

    function updateCountdown() {
        const endDate = new Date(targetDate).getTime();
        const now = new Date().getTime();
        const distance = endDate - now;
        
        if (distance < 0) {
            countdownContainer.innerHTML = '<div class="text-2xl font-bold" style="color: var(--pink-dark);">Applications Closed!</div>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        daysElement.textContent = days.toString().padStart(2, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
        
        // Add pulse animation when time is running out
        if (days < 7) {
            countdownContainer.classList.add('pulse');
        }
    }
    
    // Initialize immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
