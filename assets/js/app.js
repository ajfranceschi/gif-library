var queriesArray = []

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
                imgElement.attr('src', gifObject.images.downsized.url);
                imgElement.addClass('col-lg-3 col-md-4 my-3 rounded');
                $('#gifContainer').append(imgElement);

            }

        });
}

$('#navBar').on('click', '.nav-link', (e) => {
    $('#gifContainer').html('');
    getGifs(e.target.value);
})


$('form').on('submit', () => {
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