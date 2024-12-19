
//function for animation of image 
document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("img");
    let scale = 1;
    let opacity = 0.8;
    let growing = true;

    setInterval(() => {
        if (growing) {
            scale += 0.01;
            opacity += 0.01;
            if (scale >= 1.1) {
                growing = false;
            }
        } else {
            scale -= 0.01;
            opacity -= 0.01;
            if (scale <= 1) {
                growing = true;
            }
        }

        image.style.transform = `scale(${scale})`;
        image.style.opacity = opacity.toString();
    }, 50); 
});


//creating a date stamp
document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const currentDate = new Date();
    const dateString = currentDate.toDateString(); 

    // Set the date in the span with the id 'dateStamp'
    const dateElement = document.getElementById("dateStamp");
    dateElement.textContent = dateString;
});



function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Check if all fields are filled
    if (name && email && message) {
      // Construct the mailto link with the form data
      var mailtoLink = "mailto:SNWS246@gmail.com?subject=Enquiry from " + encodeURIComponent(name) + 
                       "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
  
    
  
      // Show success pop-up
      alert("Your enquiry has been submitted successfully!");
  
      // Clear the form fields after submission
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    } else {
      // If any field is empty, notify the user
      alert("Please fill in all the fields before submitting.");
    }
  }
  

