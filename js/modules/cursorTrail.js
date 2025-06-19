// Cursor Trail Module
export function setupCursorTrails() {
    const cursorTrails = document.querySelectorAll('.cursor-trail');
    let mouseX = 0, mouseY = 0;
    let posX = 0, posY = 0;
    const colors = [
        'var(--pink-dark)',
        'var(--blue-dark)',
        'var(--brown-dark)',
        'var(--pink-medium)',
        'var(--blue-medium)'
    ];
    
    // Initialize trails with different colors and sizes
    cursorTrails.forEach((trail, index) => {
        trail.style.backgroundColor = colors[index % colors.length];
        trail.style.width = `${10 + (index * 5)}px`;
        trail.style.height = `${10 + (index * 5)}px`;
        trail.style.opacity = `${0.7 - (index * 0.1)}`;
    });
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function updateCursorTrails() {
        posX += (mouseX - posX) / (9 + Math.random() * 2);
        posY += (mouseY - posY) / (9 + Math.random() * 2);
        
        cursorTrails.forEach((trail, index) => {
            const delay = index * 50;
            trail.style.transform = `translate(${posX}px, ${posY}px)`;
            trail.style.transition = `transform ${0.1 + (index * 0.05)}s ease-out`;
            
            // Add slight rotation for more dynamic effect
            trail.style.transform += ` rotate(${index * 10}deg)`;
        });
        
        requestAnimationFrame(updateCursorTrails);
    }
    
    updateCursorTrails();
}
