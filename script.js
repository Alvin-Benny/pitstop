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

//Handle the edge case when the window is resized when the sidebar is active
window.addEventListener('resize', function() {
    if(window.innerWidth > 600){
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = "none";
    }
});

//Highlights currently viewed page in navbar 
//Run as soon as html content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select all anchor tags inside the <nav> element and the sidebar,
    // excluding those that have an 'onclick' attribute, which are used for 
    //sidebar (prevent sidebar icons from being active)
    const navLinks = document.querySelectorAll('nav a:not([onclick]), .sidebar a');
    // Get the current URL of the page from the browser's address bar
    const currentUrl = window.location.href; 

    // Loop through all the collected navigation links to determine if any of 
    //them match the current URL.
    for(var i = 0; i < navLinks.length; i++){
        var link = navLinks[i];
        //check if the tag is linked to this url
        //'===' same value and type
        //add the 'active' class to it.
        if(link.href === currentUrl){ 
            link.classList.add('active');
        }
    }
});

const form = document.querySelector('form'); //Select form element
const successMessage = document.querySelector('.success-txt'); //Get success indicator element
//Event listener for the submit button
form.addEventListener('submit', function(event) {
    let hasError = false; // Declare hasError variable to track form validity
    successMessage.style.display = 'none'; //No success

    // Check each input in the form which is classed as 'form-group item'
    document.querySelectorAll('.form-group .item').forEach(input => {
        //Next element is div storing the error message
        const errorText = input.nextElementSibling; 
        if (input.value.trim() === '') { // Check if the input is empty
            // Make sure error is visible
            errorText.style.display = 'block'; 
            //Red border
            input.style.borderColor = '#a71818';
            hasError = true;
        } else {
            errorText.style.display = 'none'; // Hide the error message
            input.style.borderColor = 'white';
        }
    });
    if (hasError) {
        event.preventDefault(); // Prevent the form from being submitted if there are errors
        
        
    } else {
        successMessage.style.display = 'block';
        // Prevent the form from being submitted because I haven't implemented
        //the functionality to send enquiries
        event.preventDefault(); 
    }

    /**HTML5 introduced specific input types so having the email input type in
     * the HTML as "email" now automatically checks for the presence of an @ symbol.
     */
});
