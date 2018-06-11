<?php declare(strict_types=1);

$files = glob('pix/*.jpg');
$files_count = count($files);

?>

<!-- HTML -->
<div class="wrapper">
    <form method="POST" class="selectForm">
        <fieldset>
            <legend>Wie viele Bilder willst du sehen?</legend>
            <select name="selectNumber" id="selectNumber">
                <option disabled selected>Bitte wählen</option>
<!-- html ende -->
    
<?php 
// GENERIERUNG DES DROPDOWNS //////////////////////
for ($i = 0; $i < $files_count; $i++) {
    $pic_index = $i + 1;
?>    
    <option value="<?= $pic_index ?>"><?= ($i + 1) ?></option>
<?php
}
?>

<!-- HTML -->
            </select>
        </fieldset>
        <button type="submit">Bestätigen</button>
    </form>
<!-- html ende -->

<?php
if (isset($_POST['selectNumber'])) {
    $pic_number = $_POST['selectNumber'];
    render_gallery($pic_number, $files);
}

// DARSTELLUNG DER BILDER ////////////////////////////////////
function render_gallery($pic_number, $files) {
    for ($i = 0; $i < $pic_number; $i++) {
        // saugt sich den Bildnamen aus dem Link/Dateinamen
        $img_alt = substr($files[$i], 4, -4);
        echo '<figure class="imgContainer">';
        echo "<img src=\"$files[$i]\" alt=\"$img_alt\">";
        echo '<figcaption>' . str_replace("_", " ", $img_alt) . '</figcaption>';
        echo '</figure>';
    }
}
echo "</div>";
