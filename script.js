function scrollInto(contact) {
    const element = document.getElementById('contact');
    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    });
    console.log('scrolling!!');
}