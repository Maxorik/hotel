import "./css/main.css";
import "./scss/main.scss";

document.addEventListener("DOMContentLoaded", scripts_require);

function scripts_require(){
    require('./js/dropdown_count');
    require('./js/exp_drop');
    require('./js/like');
    require('./js/ratestars');
    require('./js/calendar');
    var rr = document.getElementById('rr');
    rr.value = 'hi';
}