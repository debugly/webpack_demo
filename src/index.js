import date from './date.js'
import ui from './ui.js'

const div = ui.create();

ui.show(div,date.now());
setInterval(function(){       
    ui.show(div,date.now());
},1000);