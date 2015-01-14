$(function () {
    'use strict';
    $('[data-toggle="tooltip"]').tooltip();
});

//Fix for scrollbar on all section
$(window).on("orientationchange, resize", function () {
    'use strict';
    adjustMainScroll();
});

$(document).ready(function () {
    'use strict';
    adjustMainScroll();
});

function adjustMainScroll() {
    $(".navlink-section,.product-list-section,.main-section").outerHeight($(".mkit").outerHeight() - $(".mkit-head").outerHeight() + 15);
}