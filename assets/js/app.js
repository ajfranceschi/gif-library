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

$('.nav-link').on('click', (e) => {
    console.log('clicked');
    $('#gifContainer').html('');
    getGifs(e.target.text);
})


$('form').on('submit', () => {
    const topicToAdd = $('#topicToAdd').val();
    console.log(topicToAdd);
    let navItem = $('<li>');
    navItem.addClass('nav-item');

    const navLink = $('<a>');
    navLink.addClass('nav-link');
    navLink.attr('href', '#');
    navLink.text(topicToAdd);
    navItem.append(navLink);

    $('#navBar').append(navItem);
});