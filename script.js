function sendmail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };

    emailjs.send("service_ntbohmb", "template_9e8i5em", parms)
        .then(function(response) {
            // Display a success message
            alert("Email Received !!!");

            // Close the modal after successful submission
            let modal = document.getElementById("signupModal");
            modal.style.display = "none";  // Hide the modal
        })
        .catch(function(error) {
            // Handle errors if any
            console.log("Error sending email:", error);
            alert("Oops! Something went wrong.");
        });
}

