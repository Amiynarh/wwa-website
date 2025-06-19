// Main application script
import { initializeCountdown } from './modules/countdown.js';
import { setupCursorTrails } from './modules/cursorTrail.js';
import { initializeProgressBar } from './modules/progressBar.js';
import { initializeNumberCounters } from './modules/numberCounter.js';

document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize countdown for July 1, 2025
        initializeCountdown('July 1, 2025 00:00:00');
        
        // Setup cursor trails effect
        setupCursorTrails();

        // Initialize progress bar animation
        initializeProgressBar();

        // Initialize number counters
        initializeNumberCounters();

        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

    } catch (error) {
        console.error('Initialization error:', error);
    }
});
