function toggle2register() {
    var loginform_element = document.getElementsByClassName("login-form");
    var register_form = document.getElementsByClassName('register-form');
    loginform_element[0].style.display= 'none';
    register_form[0].style.display = 'block';
}

function toggle2login() {
    var loginform_element = document.getElementsByClassName("login-form");
    var register_form = document.getElementsByClassName('register-form');
    loginform_element[0].style.display= 'block';
    register_form[0].style.display = 'none';
}