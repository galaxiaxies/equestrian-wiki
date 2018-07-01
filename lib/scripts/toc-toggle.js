function tocToggle() {
    var toc_toggle = $('#toc-toggle'),
        toc_list = $('#toc-list');
    if (toc_list.css('display') === 'block') {
        toc_toggle.html('show');
    } else {
        toc_toggle.html('hide');
    }
    toc_list.toggle();
}