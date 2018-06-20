buttons = [
    {
        method : "GET",
        data: ""
    },
    {
        method : "POST",
        data : {
            title: "AJAX TODO",
            description: "This is my new AJAX TODO"
        }
    },
    {
        method : "DELETE",
        data: {
            id: "43"
        }
    }
]

buttons.map(function( config ) {
    ul = document.getElementById('ajax');

    li = document.createElement("li");
    a = document.createElement("a");
    a.classList.add("nav-link");
    a.innerHTML = config.method;

    ul.appendChild(li);
    li.appendChild(a);

    a.addEventListener("click", function( event ) {
        var request = new XMLHttpRequest();
        
        request.onload = function() {
            res = document.getElementById('result');

            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                res.innerHTML = "Response : " + data.response;
            } else {
                res.innerHTML = "ERROR";
            }
        };

        request.open(
            config.method,
            'http://cabra/projects/wbs/webdev/php/mini_projects/todolist_db_oop_ajax/data.php',
            true
        );

        request.send(JSON.stringify(config.data));

    }, false);
});
