function submitForm() {
  // Get form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Validate form data
  if (name.trim() === '' || message.trim() === '') {
    alert('Please enter your name and message.');
    return;
  }

  // Email validation using a regular expression
  var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(\.[a-z]+)?$/;

  if (regx.test(email)) {
    alert("You have provided a valid Email ID");
  } else {
    alert("Sorry! Incorrect Email ID");
  }

     // Construct your data object (you may want to send this to a server)
     var formData = {
      name: name,
      email: email,
      message: message
    };

    // For demonstration purposes, log the form data to the console
    console.log(formData);
    
}

