<?php 

function links($link, $page) {
        return ($page === $link) ? "active" : "";
    }
?>

<nav>
    <ul class="nav navbar-nav">
        <li class="<?= links('', $page) ?>">
            <a href="index.php">Home</a>
        </li>

        <li class="<?= links('gallery', $page) ?>">
            <a href="index.php?page=gallery">Dackelgalerie</a>
        </li>

        <li class="<?= links('contact', $page) ?>">
            <a href="index.php?page=game">Game</a>
        </li>
    </ul>
</nav>