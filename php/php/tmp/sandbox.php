<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
</head>
<body>



    <?php

        echo strlen('Have a nice day') . "<br>";
        echo mb_strlen('Have a nice day') . "<br>";
        echo strlen('Schönen Tag noch') . "<br>";
        echo mb_strlen('Schönen Tag noch') . "<br>";
        echo strlen('你好吗') . "<br>";
        echo mb_strlen('你好吗') . "<br>";


    ?>

    <!-- 
    <button id="get-request">Get Request</button>
    <button id="post-request">Post Request</button>
    <button id="delete-request">Delete Request</button>

	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script>
		let getButton = document.getElementById('get-request');
		let postButton = document.getElementById('post-request');
        let deleteButton = document.getElementById('delete-request');
	
		getButton.addEventListener('click', function() {
            $.get('sandbox.php', { pizza: 'Spanferkel' })
                .done(function(response) {
                    console.log(response);
                }
            )
		})

        postButton.addEventListener('click', function() {
			$.post('sandbox.php', { pizza: 'Spanferkel' })
                .done(function(response) {
                    console.log(response);
                }
            )
		})

        deleteButton.addEventListener('click', function() {
            $.ajax({
                url: 'sandbox.php?pizza=fungi',
                type: 'DELETE',
                success: function(result) {
                    console.log(result)
                }
            })
        })

    </script> -->

</body>
</html>
