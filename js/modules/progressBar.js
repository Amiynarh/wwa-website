// Progress Bar Module
export function initializeProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    
    if (!progressBar || !progressPercentage) return;

    let width = 0;
    const targetWidth = 95; // Target percentage
    const duration = 2000; // Animation duration in ms
    const increment = targetWidth / (duration / 16); // 60fps
    
    const animate = () => {
        if (width >= targetWidth) {
            progressPercentage.textContent = `${targetWidth}%`;
            return;
        }
        
        width += increment;
        progressBar.style.width = `${width}%`;
        progressPercentage.textContent = `${Math.round(width)}%`;
        requestAnimationFrame(animate);
    };
    
    // Start animation after slight delay
    setTimeout(() => {
        animate();
    }, 500);
}
