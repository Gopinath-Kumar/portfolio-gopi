// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.tab-item');
    const panels = document.querySelectorAll('.job-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding panel
            const company = tab.getAttribute('data-company');
            const panel = document.getElementById(company);
            if (panel) {
                panel.classList.add('active');
            }
        });
    });

    // Subtle interaction for list items
    const listItems = document.querySelectorAll('.job-entry li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(5px)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
});