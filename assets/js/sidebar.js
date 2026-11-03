document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;

    const sidebarHTML = `
        <aside class="book-sidebar">
            <a href="../index.html" class="sidebar-nav-link">&larr; Return Home</a>
            
            <div class="sidebar-divider" style="margin-top: 10px;"></div>
            
            <div class="sidebar-title">Browse Projects</div>
            <a href="ablation_catheter.html" class="sidebar-nav-link ${path.includes('ablation_catheter') ? 'active' : ''}">001: Thermal Ablation Catheter</a>
            <a href="plexus_internship.html" class="sidebar-nav-link ${path.includes('plexus_internshipn') ? 'active' : ''}">002: Plexus Internship Projects</a>
            <a href="buoy.html" class="sidebar-nav-link ${path.includes('buoy') ? 'active' : ''}">003: Phone Charger Buoy</a>
            <a href="EEG_spectrograms.html" class="sidebar-nav-link ${path.includes('EEG_spectrograms') ? 'active' : ''}">004: EEG Spectrogram Analysis</a>
            <a href="plant_aps.html" class="sidebar-nav-link ${path.includes('plant_aps') ? 'active' : ''}">005: Electrophysiological Modeling</a>
            <a href="smart_inhaler.html" class="sidebar-nav-link ${path.includes('smart_inhaler') ? 'active' : ''}">006: Smart Inhaler</a>
            <a href="climbing_fall.html" class="sidebar-nav-link ${path.includes('climbing_fall') ? 'active' : ''}">007: Climbing Fall Logger</a>
        </aside>
    `;

    const container = document.getElementById('sidebar-container');
    if (container) {
        container.outerHTML = sidebarHTML;
    }
});