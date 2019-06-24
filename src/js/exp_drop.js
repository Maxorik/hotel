window.onload = function(){ 
    
    var checklist_arrows = document.getElementsByClassName('checklist_arrow');
    
    for(var i=0; i<checklist_arrows.length; i++){
        checklist_arrows[i].addEventListener('click', dropexp, false);
    }
    
    function dropexp(event){
        let target = event.target;
        
        if(target.classList.contains('fa-chevron-down')){
            target.nextElementSibling.nextElementSibling.hidden = false;
            target.classList.remove('fa-chevron-down');
            target.classList.add('fa-chevron-up')
        }
        
        else if(target.classList.contains('fa-chevron-up')){
            target.nextElementSibling.nextElementSibling.hidden = true;
            target.classList.remove('fa-chevron-up');
            target.classList.add('fa-chevron-down')
        }
    }
    
};