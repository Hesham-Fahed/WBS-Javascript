<?php declare(strict_types=1);

if (isset($_GET['message'])) {
    echo '<div class="message">';

    switch ($_GET['message']) {
        case 'mail_sent':
            echo '<div class="alert alert-success">Email erfolgreich gesendet.</div>';
            break;
        case 'mail_error':
            echo '<div class="alert alert-danger">Fehler beim Versenden ihrer Email.</div>';
            break;
        default:
            echo '<div class="alert alert-info">Heute keine Nachrichten.</div>';
    }

    echo '</div>';
}
?>