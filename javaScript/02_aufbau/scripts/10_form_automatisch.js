(function(window,document){
    "use strict";
    window.addEventListener("load",function(){
        document.forms[0].addEventListener("submit", function(e){
            e.preventDefault();
            var f = e.target; //this oder document.forms[0] ...
            var errorMsg = [];

            for(var i = 0; i < f.length; i++) {
                console.log(f[i], "  ", f[i].tagName);
            }

        });
    });
}(window,document));

