var likes = document.getElementsByClassName('likeit');
    
    for(var i=0; i<likes.length; i++){
        likes[i].addEventListener('click', likeit, false);
    }
    
    function likeit(event){
        var target = event.target;
        var like_count = +target.lastElementChild.textContent;
        if(target.firstElementChild.classList.contains('fa-heart-o')){
            target.style.borderColor='rgba(31, 32, 65, 0.5)';
            target.style.color = '#BC9CFF';
            target.firstElementChild.classList.remove('fa-heart-o');
            target.firstElementChild.classList.add('fa-heart');
            like_count += 1;
            target.lastElementChild.textContent = like_count;
        }
        
        else if(target.firstElementChild.classList.contains('fa-heart')){
            target.style.borderColor='rgba(31, 32, 65, 0.25)';
            target.style.color = 'rgba(31, 32, 65, 0.25)';
            target.firstElementChild.classList.remove('fa-heart');
            target.firstElementChild.classList.add('fa-heart-o');
            like_count--;
            target.lastElementChild.textContent = like_count;
        }
    }
