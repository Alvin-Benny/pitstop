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

// Select form element
const form = document.querySelector('form');
if (form){ //if there is a form on the current page
    // Get success indicator element
    const successMessage = document.querySelector('.success-txt');
    // Event listener for the submit button
    form.addEventListener('submit', function(event) {
        let hasError = false; // Declare hasError variable to track form validity
        successMessage.style.display = 'none'; // No success initially

        // Check each input in the form which is classed as 'item' inside another
        // class 'form-group'
        document.querySelectorAll('.form-group .item').forEach(input => {
            // Next element is div storing the error message
            const errorText = input.nextElementSibling; 
            if (input.value.trim() === '') { // Check if the input is empty
                // Make sure error is visible
                errorText.style.display = 'block'; 
                // Red border
                input.style.borderColor = '#a71818';
                hasError = true;
            } else {
                errorText.style.display = 'none'; // Hide the error message
                input.style.borderColor = 'white';
            }
        });

        // Ensure to remove success message if errors are found and prevent form from submitting.
        if (hasError) {
            event.preventDefault(); 
        } else {
            successMessage.style.display = 'block';
            // Prevent the form from being submitted because I haven't implemented
            // the functionality to send enquiries (otherwise the form would reset)
            event.preventDefault(); 
        }
    });
}

const initSlider = () => {
    // Select all slider wrappers
    const sliders = document.querySelectorAll(".slider-wrapper");

    // Process each slider independently
    sliders.forEach(slider => {
        const imageList = slider.querySelector(".image-list");
        const slideButtons = slider.querySelectorAll(".slide-button");

        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Determine the direction based on the button ID
                const direction = button.id.includes("prev-slide") ? -1 : 1;
                const scrollAmount = 330 * direction; // Scroll by 330px each click

                // Perform the scroll
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        });
    });
};

window.addEventListener("load", initSlider);