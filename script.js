// function scrollInto(contact) {
//     const element = document.getElementById('contact');
//     element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//         inline: "nearest",
//     });
//     console.log('scrolling!!');
// }

window.onscroll = function() {onScroll()};

function onScroll() {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector('.extra-img-wrapper').className = 'slideIn'
    }
}

