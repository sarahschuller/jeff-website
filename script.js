window.onscroll = function() {onScroll()};

function onScroll() {
    if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector('.extra-img-wrapper').className = 'slideIn'
    }
}

