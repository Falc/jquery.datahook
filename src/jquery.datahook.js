/**
 * jquery.datahook
 *
 * Syntactic sugar for jQuery selection using data-hook attributes.
 *
 * Based on an article written by Will Boyd: http://www.sitepoint.com/effective-event-binding-jquery/
 *
 * Authors:
 * - Will Boyd (will@codersblock.com)
 * - Aitor García (aitor.falc@gmail.com)
 *
 * Version: 1.0.0-dev
 * License: MIT (https://github.com/Falc/jquery.datahook/blob/master/LICENSE)
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
  $.datahook = function(name) {
    return (!name || name === '*') ? $('[data-hook]') : $('[data-hook~="' + name + '"]');
  };

  $.hook = $.hook || $.datahook;
}));
