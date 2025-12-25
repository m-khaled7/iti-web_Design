
const loginform = document.getElementById("loginForm");

loginform.addEventListener("submit", async function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    try {
        let response = await fetch(`http://127.0.0.1:3000/users?email=${email}&password=${password}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.length == 0) {
            alert("usernot found")
            return
        }
        
        let userdata = { id: result[0].id, name: result[0].name, email: result[0].email }
        localStorage.setItem("userdata", JSON.stringify(userdata))
    window.location.replace('/');
        
        

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

})