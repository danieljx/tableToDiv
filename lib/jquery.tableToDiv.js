/*
 * Pluguin Jquey para convertir <table> a <div>
 * by: @danieljx Daniel Villanueva
 */
;(function ($) {
    'use strict';
    $.fn.tableToDiv = function (options) {
        var opt = $.extend({}, {
            tag: 'div',
            prefixClass: '',
            containerClass: 'tableToDiv'
        }, options), tableFirstLevel, tableSecondLevel, tableThirdLevel, tableFourthLevel;
        function createFirstLevel(table, $el) {
            tableFirstLevel = $('thead, tbody, tfoot', table);
            if (tableFirstLevel.length) {
                $.each(tableFirstLevel, function (count, item) {
                    var $div = $('<' + opt.tag + ' />');
                    setAttributes(item, $div);
                    $el.append($div);
                    $div.addClass(item.tagName.toLowerCase());
                    createSecondLevel(item, $div);
                });
            }
        };
        function createSecondLevel(el, $el) {
            tableSecondLevel = $(el).children();
            if (tableSecondLevel.length) {
                $.each(tableSecondLevel, function (count, item) {
                    var $div = $('<' + opt.tag + ' />');
                    setAttributes(item, $div);
                    $div.addClass(item.tagName.toLowerCase());
                    $el.append($div);
                    createThirdtLevel(item, $div);
                });
            }
        };
        function createThirdtLevel(el, $el) {
            tableThirdLevel = $(el).children();
            if (tableThirdLevel.length) {
                $.each(tableThirdLevel, function (count, item) {
                    var $div = $('<' + opt.tag + ' />');
                    setAttributes(item, $div);
                    $div.addClass(item.tagName.toLowerCase());
                    $el.append($div);
                    createFourthLevel(item, $div);
                });
            }
        };
        function createFourthLevel(el, $el) {
            tableFourthLevel = $(el).children();
            if (tableFourthLevel.length) {
                $.each(tableFourthLevel, function (count, item) {
                    $el.append($(item).clone());
                });
            } else {
                $el.append($(el).html());
            }
        };
        function setAttributes(el, $al) {
            $.each(el.attributes, function (count, attrib) {
                var name = attrib.name;
                var value = attrib.value;
                $al.attr(name, value);
            });
        };
        return this.each(function () {
            var table = this, $el = $('<' + opt.tag + ' />');
            setAttributes(table, $el);
            $el.addClass(opt.containerClass).addClass('table');
            createFirstLevel(table, $el);
            $el.appendTo('body');
        });
    };
})(jQuery);