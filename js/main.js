(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);


    const coursesRow = document.getElementById('courses-row');
    let startTouchX = 0;
    let endTouchX = 0;

    // Detect touch start
    coursesRow.addEventListener('touchstart', (e) => {
        startTouchX = e.touches[0].clientX; // Store the initial touch position
    });

    // Detect touch end
    coursesRow.addEventListener('touchend', (e) => {
        endTouchX = e.changedTouches[0].clientX; // Store the final touch position

        if (startTouchX > endTouchX) {
            // Swipe Left: Scroll to next item
            coursesRow.scrollBy({ left: 200, behavior: 'smooth' });
        } else if (startTouchX < endTouchX) {
            // Swipe Right: Scroll to previous item
            coursesRow.scrollBy({ left: -200, behavior: 'smooth' });
        }
    });



    // Make sure to initialize EmailJS with your actual User ID
    emailjs.init("h7EuN3UJN8A7-o32L");  // Replace with your actual User ID

    // Handle form submission
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent default form submission

        // Collect form data
        var formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value
        };

        // Send the email via EmailJS
        emailjs.send("service_jq31k19", "template_rctb0tf", formData)
            .then(function (response) {
                console.log("SUCCESS", response);
                alert("Email sent successfully!");
            }, function (error) {
                console.log("FAILED", error);
                alert("Oops! Something went wrong.");
            });
    });

    document.addEventListener("DOMContentLoaded", function () {
        // You can add any extra JavaScript functionality here if needed.
    });


