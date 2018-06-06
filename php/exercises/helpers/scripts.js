window.onload = function(e) {
    solutions = document.getElementsByClassName('solution');

    Array.prototype.forEach.call(solutions, function(s) {
        button = document.createElement("button");
        button.classList.add('qbutton');
        button.innerHTML = '?';
        
        parent = s.parentElement;

        parent.appendChild(button);
        parent.insertBefore(button, parent.firstChild);
        //parent.prepend(button);
        
        s.classList.add("hidden");
        
        button.addEventListener("click", function( event ) {
            s.classList.toggle("hidden");
        }, false);
    });

    solbutton = document.getElementById('solbutton');
    
    solbutton.addEventListener("click", function( event ) {
        if (solbutton.innerHTML === "Lösungen anzeigen") {
            for (i = 0; i < solutions.length; i++) {
                solutions[i].classList.remove("hidden");
            }
            solbutton.innerHTML = "Lösungen verstecken";
        }
        else {
            for (i = 0; i < solutions.length; i++) {
                solutions[i].classList.add("hidden");
            }
            solbutton.innerHTML = "Lösungen anzeigen";
        }
    });
}