    var likeit = document.getElementById('likeit');
    likeit.onclick = function like(){
        var like_count = +likeit.lastElementChild.textContent;
        if(likeit.firstElementChild.classList.contains('fa-heart-o')){
            likeit.style.borderColor='rgba(31, 32, 65, 0.5)';
            likeit.style.color = '#BC9CFF';
            likeit.firstElementChild.classList.remove('fa-heart-o');
            likeit.firstElementChild.classList.add('fa-heart');
            like_count += 1;
            likeit.lastElementChild.textContent = like_count;
        }
        
        else if(likeit.firstElementChild.classList.contains('fa-heart')){
            likeit.style.borderColor='rgba(31, 32, 65, 0.25)';
            likeit.style.color = 'rgba(31, 32, 65, 0.25)';
            likeit.firstElementChild.classList.remove('fa-heart');
            likeit.firstElementChild.classList.add('fa-heart-o');
            like_count--;
            likeit.lastElementChild.textContent = like_count;
        }
    }
