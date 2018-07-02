function subToggle() {
    var sub_toggle = $('.sub-toggle'),
        sub_list = $('.sub-list');

    if (sub_list.css('display') === 'none') {
        sub_toggle.html('&#9660;');
        sub_list.css('display', 'block');
        console.log("click hide!");
    } else {
        sub_toggle.html('&#9654;');
        sub_list.css('display', 'none');
        console.log("click show!");
    }
}