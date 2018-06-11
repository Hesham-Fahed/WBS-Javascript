<?php declare(strict_types=1); ?>

<div class="gallery">

<?php
    $images = glob("img/gallery/*.jpg");
    $imgcount = count($images);

    for ($i = 0; $i < $imgcount; $i++) :

        if ($i % 3 === 0) {
            echo '<div class="row">';
        }
        ?>
    
        <div class="col-sm-4">
            <div class="thumbnail">
                <img src="<?= $images[$i] ?>" alt="<?= $images[$i] ?>">
            </div>
        </div>

        <?php
        if ($i % 3 === 2 || $i === $imgcount) {
            echo '</div>';
        }

    endfor; ?>
</div>
