window.onload = function(){ 
    
    const dropdown = document.getElementById('dropdown');
    dropdown.hidden = true;
    const drop_button = document.getElementById('drop_button');
    const clean_button = document.getElementById('clean_button');
    const confirm_button = document.getElementById('confirm_button');
    const drop = document.getElementById('drop');
    clean_button.hidden = true;
    confirm_button.hidden = true;
    
    drop_button.onclick = function(event){
        let target = event.target;
        if(target.classList.contains('drop_button')){
            target = target.nextElementSibling;
        }
        
        if(target.classList.contains('fa-chevron-down')){
            target.classList.remove('fa-chevron-down');
            target.classList.add('fa-chevron-up');
            target.parentElement.nextElementSibling.hidden = false;
        }
        
        else if(target.classList.contains('fa-chevron-up')){
            target.classList.remove('fa-chevron-up');
            target.classList.add('fa-chevron-down');
            target.parentElement.nextElementSibling.hidden = true;
        }
        
    }
    
    function ishidden(){
        if(clean_button.hidden == true){
            clean_button.hidden = false;
            confirm_button.hidden = false;
        }
    }
    
    dropdown.onclick = function (event){
        let target = event.target;
        if(target.classList.contains('plus')){
            ishidden();
            target.previousElementSibling.textContent = +target.previousElementSibling.textContent + 1;
        }
        else if(target.classList.contains('plus_count')){
           ishidden(); target.parentElement.previousElementSibling.textContent = +target.parentElement.previousElementSibling.textContent + 1;
        }
        
        else if(target.classList.contains('minus')){
            if(+target.nextElementSibling.textContent > 0){
                target.nextElementSibling.textContent = +target.nextElementSibling.textContent - 1;
            }
        }
        
        else if(target.classList.contains('minus_count')){
            if(+target.parentElement.nextElementSibling.textContent >0){
                target.parentElement.nextElementSibling.textContent = +target.parentElement.nextElementSibling.textContent - 1;
            }
        }
    }
    
    clean_button.onclick = function(event){
        let target = event.target;
        target = target.parentElement.parentElement.parentElement;
        var all_counts = target.getElementsByClassName('c');
        for(var i=0; i< all_counts.length; i++){
            all_counts[i].textContent = 0;
        }
        clean_button.hidden = true;
    }
    
    confirm_button.onclick = function(){
        let target = event.target;
        target = target.parentElement.parentElement;
        var all_counts = target.getElementsByClassName('c');
        if(dropdown.firstElementChild.firstElementChild.textContent == 'СПАЛЬНИ'){
            let pl = all_counts[0].textContent + ' спальни ' + all_counts[1].textContent + ' кровати ' + all_counts[2].textContent + ' ванные комнаты';
            drop_button.firstElementChild.value = pl;
            dropdown.hidden = true;
        }
    }
    
};