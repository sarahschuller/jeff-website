function scrollInto(id) {
    console.log('you clicked it')
    const element = document.querySelector(id);
    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
    });
}
