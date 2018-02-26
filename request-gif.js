$(document).ready(function() {
    $("#form-gif-request").submit(fetchAndDisplayGif);
function fetchAndDisplayGif(event) {
    event.preventDefault();
    var searchQuery = $('[name=tag]').val();
    var params = { 
        api_key: "dc6zaTOxFJmzC", 
        tag : "Jackson 5 " + searchQuery,
    }
    var validateInput = $('[name=validate').val();
    if (validateInput == 5) {
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/random",
            data: params,

            success: function(response) {
                var imageUrl = response.data.image_url;
                $('#gif').attr("src", imageUrl);
                console.log(imageUrl);
                setGifLoadedStatus(true);
            },
            error: function() {
                $("#feedback").text("Sorry, could not load GIF. Try again!");
                setGifLoadedStatus(false);
            }
        });
        $("#feedback").text("Loading...");
        setGifLoadedStatus(false);
        }
        else {
            $("#feedback").text("Are you a robot?");
            setGifLoadedStatus(false);
        }
}
    function setGifLoadedStatus(isCurrentlyLoaded) {
        $("#gif").attr("hidden", !isCurrentlyLoaded);
        $("#feedback").attr("hidden", isCurrentlyLoaded);
}
