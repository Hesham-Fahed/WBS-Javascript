<?php declare(strict_types=1); ?>

<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="<?= $_SERVER["SCRIPT_NAME"]; ?>">Dackelclub</a>
        </div>
        <ul class="nav navbar-nav">
            <li class="<?= empty($page) ? 'active' : ''; ?>">
                <a href="<?= $_SERVER["SCRIPT_NAME"]; ?>">Home</a>
            </li>
            <li class="<?= ($page === 'gallery') ? 'active' : ''; ?>">
                <a href="<?= $_SERVER["SCRIPT_NAME"] . "?page=gallery"; ?>">Dackelgalerie</a>
            </li>
            <li class="<?= ($page === 'contact') ? 'active' : ''; ?>">
                <a href="<?= $_SERVER["SCRIPT_NAME"] . "?page=contact"; ?>">Kontakt</a>
            </li>
        </ul>
    </div>
</nav>