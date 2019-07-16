var room_storage = document.getElementsByClassName('room_storage');

for(var i=0; i<room_storage.length; i++){
    room_storage[i].addEventListener('click', storage_the_room, false);
}

function storage_the_room(event){
    var target = event.target;
    var room_parameters = target.parentElement.parentElement.nextElementSibling;
    
    var r_image = target.src;
    var r_number = room_parameters.firstElementChild.firstElementChild.textContent;
    var r_lux = room_parameters.firstElementChild.lastElementChild.textContent;
    var r_price = room_parameters.lastElementChild.firstElementChild.textContent;
    var r_comment = room_parameters.nextElementSibling.nextElementSibling.lastElementChild.firstElementChild.textContent;
    
    localStorage.setItem('r_image',r_image);
    localStorage.setItem('r_number',r_number);
    localStorage.setItem('r_lux',r_lux);
    localStorage.setItem('r_price',r_price);
    localStorage.setItem('r_comment',r_comment);
}

