window.onload = function(){ 
    
    var stars = document.getElementById('stars');
    stars.onclick = function (event){
        var target = event.target;
        
        if(target.classList.contains("fa-star-o")){
            target.classList.remove("fa-star-o");
            target.classList.add("fa-star");
            while(target.previousElementSibling){
                target = target.previousElementSibling;
                target.classList.remove("fa-star-o");
                target.classList.add("fa-star");
            }
        }
        
        else if(target.classList.contains("fa-star")){
            target.classList.remove("fa-star");
            target.classList.add("fa-star-o");
            while(target.nextElementSibling){
                //target = target.previousElementSibling;
                target.classList.remove("fa-star");
                target.classList.add("fa-star-o");
                target = target.nextElementSibling;
            }
        }
        
    }
    
};