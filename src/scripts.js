function showregform(){
    var regform = document.getElementById('reg_form');
    var enterform = document.getElementById('enter_form');
    regform.style.display = 'block';
    enterform.style.display = 'none'; 
}

function showenterform(){
    var regform = document.getElementById('reg_form');
    var enterform = document.getElementById('enter_form');
    regform.style.display = 'none';
    enterform.style.display = 'block';
}

function checktheform(){
    var enterform = document.getElementById('enter_form');
    var header_buttons = document.getElementById('header_buttons');
    var email = document.getElementById('email');
    var pass = document.getElementById('pass');
    var header_username = document.getElementById('header_username');
    
    if (email.value == "" ){
        email.classList.add('placeholder-alert');
    }
    if (pass.value == "" ){
        pass.classList.add('placeholder-alert');
    }
    else{
        enterform.style.display = 'none';
        header_buttons.style.display = 'none';
        header_username.style.display = 'block';
        header_username.classList.add('header_nav__elem');
        header_username.textContent = email.value;
    }
}
