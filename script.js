document.getElementById("register").addEventListener("submit",function(e){
    e.preventDefault();//prevent default from submission

    const errorDiv = document.getElementById("error-message");
    errorDiv.innerText = "";

    const firstName=document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("Password").value.trim();
    const confirmPassword = document.getElementById("Conform-Password").value.trim();
    const termsAccepted = document.getElementById("terms").checked;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorDiv.innerText = "Please fill out all fields.";
        return;
      }

    const emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailpattern.test(email)){
        errorDiv.innerText = "Please enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        errorDiv.innerText = "Password must be at least 6 characters long.";
        return;
    }
    

    if(password!=confirmPassword){
        errorDiv.innerText = "Passwords do not match.";
        return;
    }

    if (!termsAccepted) {
        errorDiv.innerText = "You must accept the Terms of Use and Privacy Policy.";
        return;
    }

    document.getElementById("main").innerHTML=`
   <div style="text-align: center; padding: 50px;">
        <h1 style="color: #038540;">Registration Successful!</h1>
        <p>Welcome, <strong>${firstName} ${lastName}</strong>!</p>
        <p>Your email <strong>${email}</strong> has been registered successfully.</p>
        <p>Thank you for joining us.</p>
    </div>
  `;

});