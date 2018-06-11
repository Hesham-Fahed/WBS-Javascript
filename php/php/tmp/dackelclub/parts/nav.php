<?php 

function links($link, $page) {
        return ($page === $link) ? "active" : "";
    }
?>

<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="index.php">Dackelclub</a>
        </div>
        <ul class="nav navbar-nav">

            <li class="<?= links('', $page) ?>">
                <a href="index.php">Home</a>
            </li>
            
            <li class="<?= links('gallery', $page) ?>">
                <a href="index.php?page=gallery">Dackelgalerie</a>
            </li>
            
            <li class="<?= links('contact', $page) ?>">
                <a href="index.php?page=contact">Kontakt</a>
            </li>
        
        </ul>
    </div>
</nav>