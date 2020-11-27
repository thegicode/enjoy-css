"use strict";

let fixElement = function(el) {
    document.body.dataset.fix = el.value;
};

let setContent = function(el){
    let els = document.querySelectorAll('.test-content'),
        i = els.length;
    while(i){
        i -= 1;
        els[i].dataset.hidden = el.value;
    }
};