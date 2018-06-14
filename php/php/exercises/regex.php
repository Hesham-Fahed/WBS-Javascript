<!DOCTYPE html>
<html lang="en">
<head>
    <title>Regex</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { 
            font-family: calibri, sans-serif; 
            /* font-weight: bold; */
            letter-spacing: .1px;
            color: #f9f9ff;
            background: #444;
        }
        .wrapper {
            width: 70%;
            margin: auto;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <?php
        
        echo "<hr>";
        echo "Nr. 1 <br>";
        $input = "KLARIFIZIEREN Ist NUR der erste Buchstabe eines Strings ein Großbuchstabe";
        $search_pattern = "/\b[A-Z][^A-Z]/";
        $output = preg_match($search_pattern, $input);
        echo "Input: " . $input . "<br>";
        echo "Pattern: " . $search_pattern . "<br>";
        echo "Output: " . $output . "<br>";
        
        echo "<hr>";
        echo "Nr. 2 <br>";
        $input = "5566-4444-5553-8855";
        $search_pattern = "/(\d{4}-){3}\d{4}/";
        $output = preg_match($search_pattern, $input);
        echo "Input: " . $input . "<br>";
        echo "Pattern: " . $search_pattern . "<br>";
        echo "Output: " . $output . "<br>";
        
        echo "<hr>";
        echo "Nr. 3 <br>";
        $input = "#FFFFFF";
        $search_pattern = "/#([A-Fa-f\d]{6}|[A-Fa-f\d]{3})/";
        $output = preg_match($search_pattern, $input, $treffer, PREG_OFFSET_CAPTURE);
        echo "Input: " . $input . "<br>";
        echo "Pattern: " . $search_pattern . "<br>";
        echo "Output: " . $output . "<br>";
        
        echo "<hr>";
        echo "Nr. 4 <br>";
        $input = "14/31/2014";
        $search_pattern = "/\b([0]\d)|([1][0-2])[\/.\- ](([0-2]\d)|([3][01]))[\/.\- ]\d{4}\b/";
        $output = preg_match($search_pattern, $input);
        echo "Input: " . $input . "<br>";
        echo "Pattern: " . $search_pattern . "<br>";
        echo "Output: " . $output . "<br>";
        
        ?>
    </div>

</body>
</html>