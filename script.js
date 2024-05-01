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