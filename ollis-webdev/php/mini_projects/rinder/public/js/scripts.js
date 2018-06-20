$( document ).ready(function() {
    $('.ui.checkbox').checkbox();

    $('.delbtn').on('click', function(e) {
        var el = $(this);
        var id = $(this).attr('id').split("-")[1];

        $.ajax({
            method: "DELETE",
            dataType: 'json',            
            url: "http://cabra/projects/wbs/webdev/php/mini_projects/rinder/public/posts/" + id,
        })
        .done(function(response) {
            if (response.status === "success") {
                console.log('Post ' + id + ' successfully deleted.');
                el.parents().eq(3).remove();
            }
            else {
                console.log('Server returned failure to delete post: ' + id);
            }
        })
        .fail(function(e) {
            console.log('Error deleting post ' + id);
            console.log(e);
        });
    });
});