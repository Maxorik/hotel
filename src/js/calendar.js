    const mounts_ru =['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    const mounts_ru_prpad =['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    var now = new Date();
    var thismounth = +now.getMonth();
    var nowmounth = thismounth;
    var thisyear = +now.getFullYear();
    var thisday = +now.getDate();
    var beg_interval = 0;
    var end_interval = 0;
    const calendar_drop = document.getElementsByClassName('calendar_drop');
    const calendar_list = document.getElementsByClassName('calendar_list');

    for(var i=0; i<calendar_drop.length; i++){
        calendar_drop[i].addEventListener('click', drop_cal, false);
    }

    for(var i=0; i<calendar_list.length; i++){
        calendar_list[i].addEventListener('click', cal_click, false);
    }
  
    function drop_cal(event){
        let target = event.target;
        const cal_main = target.parentElement.parentElement.nextElementSibling;
        cal_main.hidden = false;
        const mounth_name = cal_main.firstElementChild.firstElementChild.nextElementSibling;
        mounth_name.textContent = mounts_ru[thismounth] + ' ' + thisyear;
        createCalendar(thisyear, thismounth+1);
    }

    function cal_click(event){
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
        if(target.classList.contains('calendar_day')){
            highlight(target);
        }
        if(target.classList.contains('date_clean')){
            reload_calendar(target);
        }
        else if(target.classList.contains('date_approve')){
            approve_calendar(target);
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
                    var itstoday = document.createElement('div');
                    itstoday.className = 'calendar_today';
                    itstoday.textContent = qweek[i].textContent;
                    qweek[i].insertBefore(itstoday, qweek[i].children[0]);
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
            if(!target.children.length>0){
                var beginterval = document.createElement('div');
                beginterval.className = 'calendar_date_int';
                beginterval.textContent = target.textContent;
                beg_interval = beginterval.textContent;
                target.insertBefore(beginterval, target.children[0]);
            }
        }
        else if(end_interval == 0){
            if(!target.children.length>0){
                var endinterval = document.createElement('div');
                endinterval.className = 'calendar_date_int';
                endinterval.textContent = target.textContent;
                end_interval = endinterval.textContent;
                target.insertBefore(endinterval, target.children[0]);
                strecth();
            }
        }
    }

    function strecth(){
        if(+beg_interval > end_interval){
            var z = +end_interval;
            end_interval = beg_interval;
            beg_interval = z;
        }
        var int_length = end_interval - beg_interval - 1;
        var b,e;
        var calendardays = document.getElementsByClassName('calendar_day');
        for(var i=0; i<calendardays.length; i++){
            if(calendardays[i].textContent == beg_interval+ beg_interval){
                calendardays[i].classList.add('stretch_left');
                b = i+1;
            }
            if(calendardays[i].textContent == end_interval+end_interval){
                calendardays[i].classList.add('stretch_right');
                e = i;
                i=calendardays.length;
            }
        }
        for(var i = b; i<e; i++){
            calendardays[i].classList.add('calendar_day_stretch');
        }
    }

    function clean_calendar(){
        var calendardays = document.getElementsByClassName('calendar_day');
        for(var i=0; i<calendardays.length; i++){
            calendardays[i].textContent = '';
            calendardays[i].classList.remove('calendar_today');
            calendardays[i].classList.remove('calendar_day_old');
            calendardays[i].classList.remove('calendar_date_int');
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

    function reload_calendar(target){
        clean_calendar();
        now = new Date();
        thismounth = +now.getMonth();
        nowmounth = thismounth;
        thisyear = +now.getFullYear();
        thisday = +now.getDate();
        beg_interval = 0;
        end_interval = 0;
        createCalendar(thisyear, thismounth+1);
    }

    function approve_calendar(target){
        if(beg_interval!=0 && end_interval!=0){
            var b_mounth = thismounth + 1 + '';
            if(beg_interval.length < 2){
                beg_interval = '0' + beg_interval;
            }
            if(end_interval.length < 2){
                end_interval = '0' + end_interval;
            }
            if(b_mounth.length < 2){
                b_mounth = '0' + b_mounth;
            }
            var str_from =  beg_interval + '.' + b_mounth + '.' + thisyear;
            var str_to =  end_interval + '.' + b_mounth + '.' + thisyear;
            
            var str_from_int = beg_interval + ' ' + mounts_ru_prpad[+b_mounth - 1];
            var str_from_to = end_interval + ' ' + mounts_ru_prpad[+b_mounth - 1];
        }
        reload_calendar(target);
        
        var dates_fields = target.parentElement.parentElement.parentElement.previousElementSibling;
        if(dates_fields.childNodes.length < 2){
            var input_date_interval = dates_fields.firstElementChild.childNodes[1];
            input_date_interval.value = str_from_int + ' - ' + str_from_to;
            if(input_date_interval.value == 'undefined'){
                input_date_interval.value = '';
            };
        }
        else{
            var input_from = dates_fields.firstElementChild.childNodes[1];
            var input_to = input_from.parentElement.nextElementSibling.childNodes[1];
            input_from.value = str_from;
            input_to.value = str_to;
            if(input_from.value == 'undefined'){
                input_from.value = '';
                input_to.value = '';
            }
        }
        target.parentElement.parentElement.parentElement.hidden = true;
    }