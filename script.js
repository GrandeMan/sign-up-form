const form = document.getElementById("sign-up");
const errorPwd = document.getElementById("pwd-error");
const button = document.getElementById("submit");


button.addEventListener("click", (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateForm() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const num = document.getElementById("num");
    const pwd = document.getElementById("pwd");
    const confirmPwd = document.getElementById("pwd-confirm");

    errorPwd.textContent = "";

    if (pwd.value !== confirmPwd.value) {
        noMatch();
        return false;
    }

    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email.value)) {
        ("Please enter a valid email address.");
        return false;
    }

    return true;
}



function noMatch() {
    errorPwd.textContent = "*Passwords do not match";
    errorPwd.style= "font-weight:800;";

}

