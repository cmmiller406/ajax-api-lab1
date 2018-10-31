"use strict";

$(document).ready(() => {
    $.get("https://www.reddit.com/r/EarthPorn/.json").then((response) => {
        const posts = response.data.children;
        
        
        for (let post in posts) {
            console.log(posts[post]);
            $("body").append(`
            <section class="post-container">
            <a class="title-link" href="${posts[post].data.url}">${posts[post].data.title} </a>
            <p class="author">By: ${posts[post].data.author}</p>
            <img src="${posts[post].data.preview.images["0"].source.url}" class="image">
            </section>
            `);
        }
      
    });

});