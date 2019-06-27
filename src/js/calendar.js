    const mounts_ru =['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',];
    var now = new Date();
    var thismounth = +now.getMonth();
    const nowmounth = thismounth;
    var thisyear = +now.getFullYear();
    var thisday = +now.getDate();
    var beg_interval = 0;
    var end_interval = 0;
    const calendar_drop = document.getElementsByClassName('calendar_drop');
    const calendar_list = document.getElementsByClassName('calendar_list');
    //const calendardays = document.getElementsByClassName('calendar_day');
    
    //var cal = document.getElementById('cal');
    for(var i=0; i<calendar_drop.length; i++){
        calendar_drop[i].addEventListener('click', drop_cal, false);
    }

    for(var i=0; i<calendar_list.length; i++){
        calendar_list[i].addEventListener('click', cal_click, false);
    }
  
    function drop_cal(event){
    //cal.onclick = function(event){
        let target = event.target;
        const cal_main = target.parentElement.nextElementSibling;
        cal_main.hidden = false;
        const mounth_name = cal_main.firstElementChild.firstElementChild.nextElementSibling;
        mounth_name.textContent = mounts_ru[thismounth] + ' ' + thisyear;
        
        createCalendar(thisyear, thismounth+1);
    }

    function cal_click(event){
        //cal.onclick = function(event){
        var target = event.target;
        if(target.classList == ''){
            target = target.parentElement;
            if(target.classList.contains('arrow_back')){
                mounth_back(target);
            }
            else if(target.classList.contains('arrow_forward')){
                mounth_forward(target);
            }
            else return;
        }
        else if(target.classList.contains('calendar_day')){
            highlight(target);
            strecth();
        }
    }
 
    function mounth_back(target){
        thismounth--;
        if(thismounth<0){
            thismounth = 11;
            thisyear--;
        }
        target.nextElementSibling.textContent = mounts_ru[thismounth] + ' ' + thisyear;
        clean_calendar();
        createCalendar(thisyear, thismounth+1);
    }

    function mounth_forward(target){
        thismounth++;
        if(thismounth>11){
            thismounth = 0;
            thisyear++;
        }
        target.previousElementSibling.textContent = mounts_ru[thismounth] + ' ' + thisyear;
        clean_calendar();
        createCalendar(thisyear, thismounth+1);
    }

    function createCalendar(y, m){
        var caldiv = document.createElement('div');
        var body = document.body;
        var thedate = new Date(y, m, 0);            //конец месяца
        var header = document.createElement('p');
        body.appendChild(header);
        body.appendChild(caldiv);
        caldiv.classList.add('mounth');
        caldiv.style.marginTop='-99px';
        var endm = thedate.getDate();               //число - конец месяца
        var beginm = new Date(y, m, 1-endm);        //число - начало месяца
        var weekday = beginm.getDay();              //число - номер дня недели первого дня месяца
        var calendar = document.createElement('table');
        caldiv.appendChild(calendar);
        var dd = 1;
        var prodl = 6+weekday;
        //заполнить таблицу датами
        var qweek = document.getElementsByTagName('td');
        for(var i=prodl; i<endm+prodl; i++){
            if(qweek[i].classList.contains('calendar_day'))
                {qweek[i].innerHTML = dd;
                 if(dd == thisday && thismounth == nowmounth){
                        qweek[i].classList.add('calendar_today');
                    }
                dd++;
            }
            else{
                i=i+6;
                prodl = prodl + 6; 
            }
        }
        prev_next_mounth();
    }

    function prev_next_mounth(){
        var calendardays = document.getElementsByClassName('calendar_day');
        var thismounth_c = thismounth;
        var thisyear_c = thisyear;
        var prev_m = new Date(thisyear_c, thismounth_c, 0);
        prev_m = prev_m.getDate();
        for(var i=10; i>-1; i--){
            if(calendardays[i].textContent == ''){
                calendardays[i].textContent = prev_m;
                calendardays[i].classList.add('calendar_day_old');
                prev_m--;
            }        
        }
        var next_m=1;
        for(var i=18; i<calendardays.length; i++){
            if(calendardays[i].textContent == ''){
                calendardays[i].textContent = next_m;
                calendardays[i].classList.add('calendar_day_old');
                next_m++;
            }   
        }
    }

    function highlight(target){
        if(beg_interval == 0){
            if(!target.classList.contains('calendar_date_int')){
                target.classList.add('calendar_date_int');
                beg_interval = +target.textContent;
            }
        }
        else if(beg_interval != 0){
            if(target.classList.contains('calendar_date_int')){
                target.classList.remove('calendar_date_int');
                beg_interval = 0;
                clean_strecth();
            }
        }
        
        if(end_interval == 0){
            if(!target.classList.contains('calendar_date_int')){
                target.classList.add('calendar_date_int');
                end_interval = +target.textContent;
            }
        }
        
        else if(end_interval != 0){
            if(target.classList.contains('calendar_date_int')){
                target.classList.remove('calendar_date_int');
                end_interval = 0;
                clean_strecth();
            }
        }
    }

    function strecth(){
        var calendardays = document.getElementsByClassName('calendar_day');
        if(beg_interval != 0 && end_interval !=0 ){
            for(var i=0; i<calendardays.length; i++){
                if(calendardays[i].textContent == beg_interval){
                    calendardays[i].classList.add('stretch_left');
                    //calendardays[i].classList.remove('calendar_date_int');
                    while(calendardays[i+1].textContent != end_interval){
                        calendardays[i+1].classList.add('calendar_day_stretch');
                        i++;
                    }
                //calendardays[i+1].classList.remove('calendar_date_int');
                calendardays[i+1].classList.add('stretch_right');
                }
            }
        }
    }

    function clean_calendar(){
        var calendardays = document.getElementsByClassName('calendar_day');
        for(var i=0; i<calendardays.length; i++){
            calendardays[i].textContent = '';
            calendardays[i].classList.remove('calendar_today');
            calendardays[i].classList.remove('calendar_day_old');
        }
        clean_strecth();
    }

    function clean_strecth(){
        var calendardays = document.getElementsByClassName('calendar_day');
        for(var i=0; i<calendardays.length; i++){
            calendardays[i].classList.remove('calendar_day_stretch');
            calendardays[i].classList.remove('stretch_left');
            calendardays[i].classList.remove('stretch_right');
        }
    }