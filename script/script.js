//auth 
const signupform = document.getElementById("signupForm");
//signUp
//form validation
signupform.addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.length < 3) {
        alert("Full Name must be at least 3 characters long.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    const postData = {
        name: name,
        email: email,
        password: password,
    };

    try {
        let response = await fetch('http://127.0.0.1:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

    alert("Form submitted successfully!");
    window.location.replace('/signin.html');
});

