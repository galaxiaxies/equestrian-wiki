function tocToggle() {
    var toc = $("#toc-list");
    var toggle = $("#toc-toggle");
    if (toc.css('display') === 'block') {
        toggle.html('show');
    } else {
        toggle.html('hide');
    }
    toc.toggle();
}
