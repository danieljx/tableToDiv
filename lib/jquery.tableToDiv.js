/*
 * Pluguin Jquey para convertir <table> a <div>
 * by: @danieljx Daniel Villanueva
 */
;(function ($) {
    'use strict';
    $.fn.tableToDiv = function (opt) {
        this.settings = $.extend({}, this.settings, opt);
        return this.each(function () {
            // empezar
        });
    };
    $.fn.tableToDiv.settings = {
        tag: 'div',
        prefixClass: '',
        css: true,
    };
})(jQuery);