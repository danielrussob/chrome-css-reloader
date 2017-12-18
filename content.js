document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyB' && (event.ctrlKey || event.metaKey)) {
        var elements = document.querySelectorAll('link[rel=stylesheet][href]');
        for (var i = 0, element; element = elements[i]; i++) {
            var href = element.href;
            href = href.replace(/[?&]cssReloader=([^&$]*)/,'');
            element.href = href + (href.indexOf('?')>=0?'&':'?') + 'cssReloader=' + (new Date().valueOf());
        }
    }
});