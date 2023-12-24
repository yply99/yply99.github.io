function checkPassword() {
    var password = prompt("Please enter the password to view this album:", "");
    if (password == "yp61520") {
        document.getElementById('content').style.display = 'block';
    } else {
        document.body.innerHTML = "<h2>Incorrect password. Access denied.</h2>";
    }
}
