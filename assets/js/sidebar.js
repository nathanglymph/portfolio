document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;

    const sidebarHTML = `
        <aside class="book-sidebar">
            <a href="../index.html" class="sidebar-nav-link">&larr; Return Home</a>
            
            <div class="sidebar-divider" style="margin-top: 10px;"></div>
            
            <div class="sidebar-title">Browse Projects</div>
            <a href="senior_design.html" class="sidebar-nav-link ${path.includes('senior_design') ? 'active' : ''}">001: Thermal Ablation Catheter</a>
            <a href="climbing_fall.html" class="sidebar-nav-link ${path.includes('climbing-fall') ? 'active' : ''}">002: Climbing Fall Logger</a>
        </aside>
    `;

    const container = document.getElementById('sidebar-container');
    if (container) {
        container.outerHTML = sidebarHTML;
    }
});