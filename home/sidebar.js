document.addEventListener("DOMContentLoaded", function() {
    // Fetch the sidebar content from the sidebar.html file
    fetch("../home/sidebar.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("sidebar-container").innerHTML = data;

            const toggleSidebarBtn = document.querySelector('#sidebar-icon'); 
            const closeSidebarBtn = document.getElementById('close-sidebar'); 
            const sidebar = document.getElementById('sidebar'); 
            const iconContainer = document.querySelector('.icon-container'); // Sidebar icon container
            const authLinks = document.querySelector('.auth-links'); // Login/Register links
        
           
        
            // Function to open the sidebar
            toggleSidebarBtn.addEventListener('click', function() {
                sidebar.classList.add('active'); // Add 'active' class to show sidebar
                iconContainer.classList.add('hidden'); // Hide the sidebar toggle icon
                authLinks.classList.add('hidden'); // Hide the login/register links
               
                sessionStorage.setItem('sidebarActive', 'true');  //store sidebar state
        
            });
        
        
        
            // Function to close the sidebar
            closeSidebarBtn.addEventListener('click', function() {
                sidebar.classList.remove('active'); // Remove 'active' class to hide sidebar
                iconContainer.classList.remove('hidden'); // Show the sidebar toggle icon
                authLinks.classList.remove('hidden'); // Show the login/register links
                sessionStorage.setItem('sidebarActive', 'false');  //store sidebar state
            });
        
        
        
            if (!toggleSidebarBtn) {
                console.error("toggleSidebarBtn is null");
            }
            else if (!closeSidebarBtn) {
                console.error("closeSidebarBtn is null");
            } else {
                console.log("Close button is present.");
            }
          
        })
        .catch(error => console.error("Error loading sidebar:", error));
});


