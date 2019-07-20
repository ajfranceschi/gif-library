
const createQueryURL = (queryItem) => {
    return "https://api.giphy.com/v1/gifs/search?api_key=GKwA57i0nyuYd3slVSsZEWet5HMrfuD3&q=" + queryItem + "&limit=10&offset=0&rating=PG-13&lang=en";
}



const getGifs = (queryItem) => {
    $.ajax({
        url: createQueryURL(queryItem),
        method: 'get'
    })
        .then(res => {
            for (let gifObject of res.data) {
                var imgElement = $('<img>');
                imgElement.attr('src', gifObject.images.downsized_still.url);
                imgElement.attr('data-animate', gifObject.images.downsized.url);
                imgElement.attr('data-still', gifObject.images.downsized_still.url);
                imgElement.attr('data-state', 'still');
                imgElement.addClass('col-lg-3 col-md-4 my-3 rounded gifImg');
                $('#gifContainer').append(imgElement);

            }

        });
}

getGifs('Star Wars');

$('#navBar').on('click', '.nav-link', (e) => {
    $('#gifContainer').html('');
    getGifs(e.target.value);
})


$('form').on('submit', (e) => {
    e.preventDefault();
    const topicToAdd = $('#topicToAdd').val();
    $('#topicToAdd').val('');
    let navItem = $('<li>');
    navItem.addClass('nav-item');

    const navLink = $('<button>');
    navLink.addClass('nav-link btn');
    navLink.attr('value', topicToAdd);
    navLink.text(topicToAdd);
    navItem.append(navLink);

    $('#navBar').append(navItem);
});

$(document.body).on('click', 'img', function() {
    let dataState = $(this).attr('data-state');
    let dataAnimated = $(this).attr('data-animate');
    let dataStill = $(this).attr('data-still');

    if (dataState === 'still') {
        $(this).attr('src', dataAnimated);
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', dataStill);
        $(this).attr('data-state', 'still');

    }
})

