// Number Counter Module
export function initializeNumberCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000; // Animation duration in ms
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const animate = () => {
            if (current >= target) {
                counter.textContent = target;
                return;
            }
            
            current += increment;
            counter.textContent = Math.round(current);
            requestAnimationFrame(animate);
        };

        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animate();
                observer.unobserve(counter);
            }
        });

        observer.observe(counter);
    });
}
