/*
function createCalendar(idc, y, m){
        var options = {
            year: 'numeric',
            month: 'long',
        };
        var caldiv = document.createElement('div');
        var body = document.body;
        var thedate = new Date(y, m, 0);            //нужная дата
        var header = document.createElement('p');
        header.innerHTML = thedate.toLocaleString("ru", options)
        body.appendChild(header);
        body.appendChild(caldiv);
        caldiv.classList.add('mounth');
        caldiv.style.marginTop='-99px';
        header.classList.add('mounth');
        caldiv.style.marginBottom=0;
        var endm = thedate.getDate();               //число - конец месяца
        var beginm = new Date(y, m, 1-endm);        //число - начало месяца
        var weekday = beginm.getDay();              //число - номер дня недели первого дня месяца
        //alert(weekday);
        var days = ['пн','вт','ср','чт','пт','сб','вс'];
        var tt=0;
        var calendar = document.createElement('table');
        caldiv.appendChild(calendar);
        //создали таблицу
        for(var i=0; i<6; i++){
            var tr = document.createElement('tr');
            calendar.appendChild(tr);
            for(var j=0; j<7; j++){
                var td = document.createElement('td');
                tr.appendChild(td);
                if(i==0){
                    td.innerHTML = days[tt];
                    td.classList.add('weekname');
                    tt++;
                }
                else{td.classList.add('weekdate');
                    if(j==6 || j==5){
                        td.style.color = 'red';
                    }    
                }
            }
        }
        var dd = 1;
        var prodl = 6+weekday;
        //заполнить таблицу датами
        var qweek = document.getElementsByTagName('td');
        for(var i=prodl; i<endm+prodl; i++){
            qweek[i].innerHTML = dd;
            dd++;
        }
        
    }
    var now = new Date();
    let thismounth = +now.getMonth() + 1;
    let thisyear = +now.getFullYear();
    createCalendar1('cal', thisyear, thismounth);
*/

    const mounts_ru=['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',];
    var now = new Date();
    var thismounth = +now.getMonth();
    var thisyear = +now.getFullYear();
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
        const cal_main = target.parentElement.nextElementSibling;
        cal_main.hidden = false;
        const mounth_name = cal_main.firstElementChild.firstElementChild.nextElementSibling;
        mounth_name.textContent = mounts_ru[thismounth] + ' ' + thisyear;
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
    }
 
    function mounth_back(target){
        thismounth--;
        if(thismounth<0){
            thismounth = 11;
            thisyear--;
        }
        target.nextElementSibling.textContent = mounts_ru[thismounth] + ' ' + thisyear;
    }

    function mounth_forward(target){
        thismounth++;
        if(thismounth>11){
            thismounth = 0;
            thisyear++;
        }
        target.previousElementSibling.textContent = mounts_ru[thismounth] + ' ' + thisyear;
    }



/*
<style>
        .mounth{margin: 100px; font-size: 24px; color:chocolate; background-color:bisque; border: 1px solid #000; text-align: center; width: 200px;}  
        .weekname{color:blueviolet; background-color:darkgray; font-style: bold;}
        .weekdate{background-color:beige; color:darkslateblue;}
    </style
*/
