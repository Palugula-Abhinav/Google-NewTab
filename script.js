var input = document.getElementById('search-input');

// Add an event listener for the "keydown" event
input.addEventListener('keydown', function (event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Submit the form
        document.getElementById('search-form').submit();
    }
});

function getFavicon(url) {
    fetch(`https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=SVG,SIZE,URL&url=https://udemy.com&size=128`).then(data => { console.log(data) })
}

getFavicon("https://google.com")