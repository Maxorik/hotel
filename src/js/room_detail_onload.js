var r_number = localStorage.getItem('r_number');
var r_lux = localStorage.getItem('r_lux');
var r_price = localStorage.getItem('r_price');
var r_price_num = r_price.split('');
r_price_num.pop();
r_price = r_price_num.join('');
const form_bron = document.getElementById('form_bron');

var b_mounth = localStorage.getItem('b_mounth');
var str_from =  localStorage.getItem('str_from');
var str_to =  localStorage.getItem('str_to');
var str_from_int = localStorage.getItem('str_from_int');
var str_to_int = localStorage.getItem('str_to_int');

var str_to_num = str_to.split('.');
var str_from_num = str_from.split('.');
var r_days = +str_to_num[0] - (+str_from_num[0]);
var r_sum_price = r_days * r_price;

/*
Номер комнаты:   r_number
Люкс да/нет:     r_lux
Цена за день:    r_price
Кол-во суток:    r_days
Цена за все дни: r_sum_price
*/

if(form_bron){
    form_bron.querySelector('.room_number').textContent = r_number;
    form_bron.querySelector('.room_lux').textContent = r_lux;
    form_bron.querySelector('.r_price').textContent = r_price;
    form_bron.querySelector('.bron_sum_calculation_money').textContent = r_price + '₽';
    form_bron.querySelector('.bron_sum_calculation_days').textContent = r_days + ' суток';
    form_bron.querySelector('.bron_sum_all_days').textContent = r_sum_price + '₽';
    
    var total_price_arr = document.getElementsByClassName('bron_sum_result');
    var total_price = 0;
    for(var i=0; i<total_price_arr.length; i++){
        var pp = total_price_arr[i].textContent;
        var thisprice = pp.split('');
        thisprice.pop();
        total_price += +thisprice.join('');
    }
    form_bron.querySelector('.total_price').textContent = total_price + '₽';
}
