var form_reg = document.getElementsByClassName('form_reg');
var btn_reg = document.getElementsByClassName('btn_reg');

var form_enter = document.getElementsByClassName('form_enter');
var btn_enter = document.getElementsByClassName('btn_enter');

for(var i=0; i<btn_reg.length; i++){
    btn_reg[i].addEventListener('click', show_reg, false);
}

for(var i=0; i<btn_enter.length; i++){
    btn_enter[i].addEventListener('click', show_enter, false);
}

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
