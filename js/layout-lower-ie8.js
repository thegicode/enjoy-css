"use strict";

var fixElement = function(el) {
	document.body.setAttribute('data-fix', el.value);
};

var setContent = function(el){
    var els = document.querySelectorAll('.test-content'),
        i = els.length;
    while(i){
        i -= 1;
        els[i].setAttribute('data-hidden', el.value);
    }
};