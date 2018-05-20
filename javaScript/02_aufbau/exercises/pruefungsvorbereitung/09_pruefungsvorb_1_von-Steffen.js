(function (window, document) {
    "use strict";
    window.addEventListener("load", function () {
        function createElement(tag, txt) {
            tag = document.createElement(tag);
            if (txt) {
                txt = document.createTextNode(txt);
                tag.appendChild(txt);
            }
            return tag;
        }
    
        function removeContent(el) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        }
    
    
        function showInfoClick(daten, index) {
            var film;
            var out = document.getElementById("ausgabe_con1");
            removeContent(out);
            var ul;
            for (var key in daten) {
                film = daten[key];
                if ( index === "Alle ausgeben" || key === index) {
                    out.appendChild(createElement("h2", key));
                    out.appendChild(createElement("p", film.info));
                    ul = createElement("ul");
                    out.appendChild(ul);
                    ul.appendChild(createElement("li", "Laufzeit: " + film.Laufzeit));
                    ul.appendChild(createElement("li", "Produktionsjahr: " + film.Produktionsjahr));
                    ul.appendChild(createElement("li", "Regie: " + film.Regie));
                    ul.appendChild(createElement("li", "Darsteller: " + film.Darsteller));
                }
            }
        }

        function showInfoSearch(daten, search) {
            var out = document.getElementById("ausgabe_con2");
            var ul, count;
            var erg = [];
            for (var key in daten) {
                if (key.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                    erg.push(key);
                }
            }
            removeContent(out);
            if (search && erg.length) {
                ul = createElement("ul");
                out.appendChild(ul);
                count = erg.length;
                for (var i = 0; i < count; i++) {
                    ul.appendChild(createElement("li", erg[i]));
                }
            }
        }


        function getInfoClick(e) {
            e.preventDefault();
            var index = e.target.innerHTML;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "../../_lib/data/louis_de_funes.json", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    showInfoClick(JSON.parse(xhr.responseText), index);
                }
            };
            xhr.send();
        }

        function search(e) {
            var input = e.target.value.trim();
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "../../_lib/data/louis_de_funes.json", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    showInfoSearch(JSON.parse(xhr.responseText), input);
                }
            };
            xhr.send();
        }

        document.getElementById("eingabe")
            .addEventListener(
                "keyup",
                search
            );

        var con1_ul_a = document.getElementById("con1")
            .getElementsByTagName("ul")[0]
            .getElementsByTagName("a");

        var count_con1_ul_a = con1_ul_a.length;
        for (var i = 0; i < count_con1_ul_a; i++) {
            con1_ul_a[i].addEventListener("click", getInfoClick);
        }

    });
}(window, document));