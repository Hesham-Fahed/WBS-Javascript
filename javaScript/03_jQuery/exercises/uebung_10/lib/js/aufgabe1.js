/* jQuery $ajax */
// (function (window, document, $) {
//     "use strict";
//     $(function () {
//         $.ajax({
//             url : "lib/data/aufgabe1_data.json",
//             dataType : "json",
//             success : function(data){
//                 var randImg = data[rand(0,data.length-1)];
//                 $("#bg").attr({
//                     src : "lib/img/magic/landing_page/" + randImg.src,
//                     title : randImg.title,
//                     alt : randImg.alt
//                 });
//             },
//             error : function(xhr,error,errorMsg)  {
//                 console.log(errorMsg);
//             }
//         });
//     });
// }(window, document, jQuery));


/* Globale Ajax Errorhandler
Fehler in aufgabe1_data.json z.B. durch Kommentar am Ende erzeugen. */
$(document).ajaxError(function (event, xhr, settings, error) {
    console.log(error);
});

/* jQuery getJSON */
(function (window, document, $) {
    "use strict";
    $(function () {
        $.getJSON("lib/data/aufgabe1_data.json", function (data) {
            var randImg = data[rand(0, data.length - 1)];
            $("#bg").attr({
                src: "lib/img/magic/landing_page/" + randImg.src,
                title: randImg.title,
                alt: randImg.alt
            });
        });
    });
}(window, document, jQuery));


/* Natives JS */
// (function (window, document) {
//     window.addEventListener("load",function(){
//         "use strict";
//         ajaxGet("lib/data/aufgabe1_data.json", function(res){
//             var data = JSON.parse(res);
//             var randImg = data[rand(0,data.length-1)];
//             var img = document.getElementById("bg");
//             img.src = "lib/img/magic/landing_page/" + randImg.src;
//             img.title = randImg.title;
//             img.alt = randImg.alt;
//         });
//     });
// }(window, document));