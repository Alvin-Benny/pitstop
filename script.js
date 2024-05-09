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
// Check if the form exists on the current page to avoid errors in case it's not present.
if (form){
    // Select the element that will display the success message with class 'success-txt'
    const successMessage = document.querySelector('.success-txt');
    // Event listener to handle form submission event
    form.addEventListener('submit', function(event) {
        let hasError = false; // Declare hasError flag to track form validity
        successMessage.style.display = 'none'; // No success initially

        // Query and iterate over each input element within the form that has a class 'item'
        // nested within a parent element having the class 'form-group'.
        document.querySelectorAll('.form-group .item').forEach(input => {
            // Next element is div storing the error message
            const errorText = input.nextElementSibling; 
            if (input.value.trim() === '') { // Check if the input is empty
                // Make sure error is visible
                errorText.style.display = 'block'; 
                // Red border for input
                input.style.borderColor = '#a71818';
                hasError = true;
            } else {
                // Hide the error message if not empty
                errorText.style.display = 'none'; 
                input.style.borderColor = 'white';
            }
        });

        // After checking all inputs, determine if any error was found.
        if (hasError) {
            event.preventDefault(); 
        } else {
            // If no errors, display the success message.
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

    // Iterate over each slider element
    sliders.forEach(slider => {
        //Find child element with class "image-list" which contains the images
        const imageList = slider.querySelector(".image-list");
        //Also find all elements with class "slide-button" which are the buttons
        const slideButtons = slider.querySelectorAll(".slide-button");

        //Add a click event listener to each button to handle sliding action
        slideButtons.forEach(button => {
            button.addEventListener("click", () => {
                // Determine the direction based on the button ID
                let direction;
                if (button.id.includes("prev-slide")) {
                    direction = -1; 
                } else {
                    direction = 1; 
                }
                //330px is roughly size of image
                const scrollAmount = 330 * direction; // Scroll by 330px each click

                // Perform the scroll
                //Smooth -> animate smoothly
                imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
            });
        });
    });
};

window.addEventListener("load", initSlider);