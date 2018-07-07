const ui = {
    create : function(){
        const e = document.createElement('div');
        document.body.appendChild(e);
        return e;
    },
    show : function(e,text){
        if(e){
            e.innerHTML = text || '';
        }
    }
};

export default ui;
