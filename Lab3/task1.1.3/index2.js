function scroll() {
    window.scrollBy(0, 10);
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        clearInterval(scrollInterval);
        window.close();
    }
}

scrollInterval = setInterval(scroll, 100); 