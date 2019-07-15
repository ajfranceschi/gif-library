var queryItem = "Hello";

let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=GKwA57i0nyuYd3slVSsZEWet5HMrfuD3&q=" + queryItem + "&limit=10&offset=0&rating=PG-13&lang=en"

$.ajax({
        url: queryURL,
        method: 'get'
    })
    .then(res => {
        return res.data;
    })
    .then(data => {
        for (gif in data) {
            console.log(gif);
        }
    });