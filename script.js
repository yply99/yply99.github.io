var password = prompt('Please enter the password to view this page', '');
if (password != 'yourpassword') {
    window.location.href = 'https://example.com'; // redirect to another page if the password is wrong
}
