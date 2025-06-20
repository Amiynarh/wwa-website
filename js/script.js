// Main application script
import { initializeCountdown } from './modules/countdown.js';
import { setupCursorTrails } from './modules/cursorTrail.js';
import { initializeProgressBar } from './modules/progressBar.js';
import { initializeNumberCounters } from './modules/numberCounter.js';

document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize countdown for July 27, 2025
        initializeCountdown('June 27, 2025 00:00:00');
        
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

        // Form slider handling
        const form = document.getElementById('application-form');
        if (form) {
            // Update slider value display
            const pythonLevelSlider = document.getElementById('python-level');
            if (pythonLevelSlider) {
                pythonLevelSlider.addEventListener('input', function() {
                    this.nextElementSibling.value = this.value;
                });
            }
        }

    } catch (error) {
        console.error('Initialization error:', error);
    }
});
