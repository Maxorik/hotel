var form_reg = document.getElementsByClassName('form_reg');
var btn_reg = document.getElementsByClassName('btn_reg');

var form_enter = document.getElementsByClassName('form_enter');
var btn_enter = document.getElementsByClassName('btn_enter');
var btn_login = document.getElementsByClassName('btn_login');

const _form_enter = document.getElementById('_form_enter');
const _form_reg = document.getElementById('_form_reg');

if(_form_enter){
    _form_enter.querySelector('.btn_login').addEventListener('click', form_confirm, false);
}

if(_form_reg){
    _form_reg.querySelector('.btn_login').addEventListener('click', form_confirm, false);
}


for(var i=0; i<btn_reg.length; i++){
    btn_reg[i].addEventListener('click', show_reg, false);
}

for(var i=0; i<btn_enter.length; i++){
    btn_enter[i].addEventListener('click', show_enter, false);
}

/*for(var i=0; i<btn_login.length; i++){
    btn_login[i].addEventListener('click', login_user, false);
}*/

function show_reg(){
    for(var i=0; i<form_enter.length; i++){
        form_enter[i].style.display = 'none';
    }
    
    for(var i=0; i<form_reg.length; i++){
        form_reg[i].style.display = 'flex';
    }
}

function show_enter(){
    for(var i=0; i<form_reg.length; i++){
        form_reg[i].style.display = 'none';
    }
    
     for(var i=0; i<form_enter.length; i++){
        form_enter[i].style.display = 'flex';
    }
}

function form_confirm(event){
    var target = event.target;
    var the_form = target.parentElement;
    var log_inputs = the_form.getElementsByClassName('input');
    for(var i=0; i<log_inputs.length; i++){
        if(log_inputs[i].value == ''){
            log_inputs[i].classList.add('input_empty');
        }
        else{
            log_inputs[i].classList.remove('input_empty');
        }
    }
    var false_inp = the_form.getElementsByClassName('input_empty');
    if(false_inp.length == 0){
        document.location.href = "page2.html";
    } 
}

