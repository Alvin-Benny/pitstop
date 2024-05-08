/*Sidebar code
Use button clicks to change the sidebar display to flex to none and vice versa
Use media queries to hide the normal navigation bar text
*/

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
}

/* Handle the edge case when the window is resized when the sidebar is active*/
window.addEventListener('resize', function() {
    if(window.innerWidth > 600){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = "none";
    }
});

/*Highlights currently viewed page in navbar */
document.addEventListener('DOMContentLoaded', function () {
     // Select all anchor tags inside nav that are not associated with closing the sidebar or toggling the menu
    const navLinks = document.querySelectorAll('nav a:not([onclick]), .sidebar a');
    // Get the current URL
    const currentUrl = window.location.href; 

    for(var i = 0; i < navLinks.length; i++){
        var link = navLinks[i];
        //check if the tag is linked to this url
        //'===' same value and type
        if(link.href === currentUrl){ 
            link.classList.add('active');
        }
    }
});