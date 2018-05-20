(function(window,document){
    "use strict";
    window.addEventListener("load",function(){
        var user = {
            vorname : "Max",
            nachname : "Mustermann",
            email : "max.mustermann@telco.com",
            fillForm : function (f) {
                for(var key in this) {
                    if(typeof this[key] !== "function") {
                        f[key].value = this[key];
                    } 
                }
            },
            changeData : function(e) {
                e.preventDefault();
                for(var key in this) {
                    if(typeof this[key] !== "function") {
                        this[key] = e.target[key].value;        
                    }
                }
                console.log(this);
            }
        };

        
        var f = document.forms[0];
        f.addEventListener("submit",user.changeData.bind(user));
        user.fillForm(f);
    });
}(window,document));




/* 
// 1
(function(window,document){
    "use strict";
    window.addEventListener("load",function(){
        var user = {
            vorname : "Max",
            nachname : "Mustermann",
            email : "max.mustermann@telco.com"
        }

        function fillForm() {
            var f = document.forms[0];
            for(var i = 0; i < f.length; i++) {
                if(user[f[i].id] !== undefined) {
                    f[i].value = user[f[i].id] ;
                }
            }
        }

        fillForm() 

    });
}(window,document))

*/
