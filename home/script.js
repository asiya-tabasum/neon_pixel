document.addEventListener("DOMContentLoaded", function() {
    const toggleSidebarBtn = document.querySelector('#sidebar-icon'); 
    const closeSidebarBtn = document.getElementById('close-sidebar'); 
    const sidebar = document.getElementById('sidebar'); 
    const clickSound = new Audio('double-click-fx_121bpm_A#_minor.wav'); 
    const iconContainer = document.querySelector('.icon-container'); // Sidebar icon container
    const authLinks = document.querySelector('.auth-links'); // Login/Register links

    function checkSidebarState() {
        if (localStorage.getItem('sidebarActive') === 'true') {
            sidebar.classList.add('active'); // Open the sidebar
            iconContainer.classList.add('hidden'); // Hide the sidebar toggle icon
            authLinks.classList.add('hidden'); // Hide the login/register links
        }
    }

    // Function to open the sidebar
    toggleSidebarBtn.addEventListener('click', function() {
        sidebar.classList.add('active'); // Add 'active' class to show sidebar
        iconContainer.classList.add('hidden'); // Hide the sidebar toggle icon
        authLinks.classList.add('hidden'); // Hide the login/register links
        clickSound.currentTime = 0; // Reset sound
        clickSound.play(); // Play click sound
        sessionStorage.setItem('sidebarActive', 'true');  //store sidebar state

    });



    // Function to close the sidebar
    closeSidebarBtn.addEventListener('click', function() {
        sidebar.classList.remove('active'); // Remove 'active' class to hide sidebar
        iconContainer.classList.remove('hidden'); // Show the sidebar toggle icon
        authLinks.classList.remove('hidden'); // Show the login/register links
        clickSound.currentTime = 0; // Reset sound
        clickSound.play(); // Play click sound
        sessionStorage.setItem('sidebarActive', 'false');  //store sidebar state
    });

    // Play sound when menu items are clicked
    const menuLinks = sidebar.querySelectorAll('.menu-list a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            clickSound.currentTime = 0; 
            clickSound.play(); 
        });
    });

    checkSidebarState();

    if (!toggleSidebarBtn) {
        console.error("toggleSidebarBtn is null");
    }
    else if (!closeSidebarBtn) {
        console.error("closeSidebarBtn is null");
    } else {
        console.log("Close button is present.");
    }
});
