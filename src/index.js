import DateUtil from './date.js'
import ui from './ui.js'

const div = ui.create();
const dateUtil = new DateUtil();

ui.show(div, dateUtil.now());
setInterval(function () {
    ui.show(div, dateUtil.now());
}, 1000);