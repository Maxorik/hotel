var dropdowns = document.getElementsByClassName('drop_for_script');
    
    for(var i=0; i<dropdowns.length; i++){
        dropdowns[i].addEventListener('click', dropdownlist, false);
    }
    
    function dropdownlist(event){
        let target = event.target;
        target = target.parentElement;
        let input = target.firstElementChild;
        let arrow = target.lastElementChild;
        let dropdown_list = target.nextElementSibling;
        let clean_button = dropdown_list.lastElementChild.firstElementChild.firstElementChild;
        let confirm_button = dropdown_list.lastElementChild.lastElementChild;
        
        target.onclick = function(){
            if(arrow.classList.contains('fa-chevron-down')){
                arrow.classList.remove('fa-chevron-down');
                arrow.classList.add('fa-chevron-up');
                dropdown_list.hidden = false;
            }
            else if(arrow.classList.contains('fa-chevron-up')){
                arrow.classList.remove('fa-chevron-up');
                arrow.classList.add('fa-chevron-down');
                dropdown_list.hidden = true;
            }
        
        }
        
        function ishidden(){
            if(clean_button.hidden == true){
                clean_button.hidden = false;
                confirm_button.hidden = false;
            }
        }
        
        dropdown_list.onclick = function (event){
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
        
        clean_button.onclick = function(){
            var all_counts = dropdown_list.getElementsByClassName('c');
            for(var i=0; i< all_counts.length; i++){
                all_counts[i].textContent = 0;
            }
            clean_button.hidden = true;
        }
        
        confirm_button.onclick = function(){
            var all_counts = dropdown_list.getElementsByClassName('c');
        
            if(dropdown_list.firstElementChild.firstElementChild.textContent == 'СПАЛЬНИ'){
                let pl = all_counts[0].textContent + ' спальни ' + all_counts[1].textContent + ' кровати ' + all_counts[2].textContent + ' ванные комнаты';
                input.value = pl;
            }
        
            else if(dropdown_list.firstElementChild.firstElementChild.textContent == 'ВЗРОСЛЫЕ'){
            //var pl = all_counts.reduce(function(sum, current){return sum + current;},0);
                var guest_sum=0;
                for(var i=0; i<all_counts.length; i++){
                    guest_sum = +guest_sum + +all_counts[i].textContent;
                }
                let pl = guest_sum + ' гостя';
                input.value = pl;
            }
        
                dropdown_list.hidden = true;
                arrow.classList.remove('fa-chevron-up');
                arrow.classList.add('fa-chevron-down');
        }
        
    }
