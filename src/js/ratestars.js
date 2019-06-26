var stars = document.getElementsByClassName('stars');
for(var i=0; i<stars.length; i++){
        stars[i].addEventListener('click', ratestar, false);
    }

    function ratestar(event){
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
