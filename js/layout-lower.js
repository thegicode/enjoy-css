"use strict";

var init = function(){
	addContent();
};

var addContent = function(){
	var els = document.querySelectorAll('.test-content'),
        i = els.length,
        el;
    while(i){
        i -= 1;
        el = els[i];
        if(el.parentElement.className === "main"){
        	el.innerHTML = content_sample;
        	return;
        }
    }
};

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

var content_sample = '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices est in convallis consectetur. Suspendisse pulvinar tristique interdum. Donec sit amet congue lorem. Proin in sem neque. Nunc venenatis ultrices porttitor. Donec felis dolor, semper quis auctor ut, euismod nec urna. Praesent a velit vehicula, rhoncus metus vitae, sollicitudin dolor. Quisque ut mi quam. Fusce a suscipit velit. Morbi semper euismod dolor eu ultricies. Nulla ipsum leo, semper nec risus in, porttitor lacinia eros. </p> <p> Donec lectus arcu, vulputate nec nunc sit amet, imperdiet pulvinar enim. Aenean vitae erat ac massa porta pharetra et at sem. Sed at euismod diam. Cras quis fringilla elit, quis gravida mi. Integer ullamcorper nunc sem. Morbi id pulvinar velit, id volutpat neque. Duis quis tellus ullamcorper, dapibus velit a, pulvinar nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta, arcu et posuere sagittis, tortor est malesuada turpis, quis semper arcu eros ac ex. </p> <p> Vivamus dui ligula, convallis in tortor sit amet, congue tincidunt libero. Donec nunc nulla, viverra ut tellus ac, congue iaculis libero. Donec velit risus, porta nec viverra at, posuere ac urna. Donec at lectus a nunc molestie cursus sed non tortor. Ut dapibus sapien quis neque maximus dapibus. Praesent tempor sapien sit amet eros congue varius. Nunc ut mattis ipsum. Quisque eu risus in nulla dignissim euismod. Suspendisse et ex accumsan, placerat nibh non, egestas dolor. </p> <p> Phasellus facilisis blandit sapien, ut pulvinar quam. Vestibulum purus augue, blandit non consequat et, feugiat id ligula. Praesent ornare, metus a vehicula egestas, lacus ante ornare lacus, eget vulputate elit metus vitae mauris. Ut magna elit, scelerisque sit amet facilisis vel, porttitor sit amet enim. Vestibulum eget erat erat. Donec lacinia, lacus a tincidunt fermentum, nibh eros hendrerit erat, vitae elementum neque quam et nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus in ornare lorem. </p> <p> Curabitur varius dolor sit amet nisl condimentum posuere. Nullam vitae ornare enim. Fusce viverra lectus a purus eleifend vestibulum. Cras iaculis lectus non erat euismod, ac volutpat elit cursus. Praesent dignissim leo quis diam maximus suscipit. In eu nunc scelerisque, imperdiet velit vel, luctus lectus. Nullam porta neque ac mauris malesuada sodales. Phasellus scelerisque, erat id gravida venenatis, ante arcu porttitor enim, at posuere urna ipsum eu orci. </p> <p> Integer quis dui auctor, lacinia erat sit amet, mattis justo. Cras imperdiet lacus odio, vitae condimentum purus viverra vitae. Mauris sagittis, magna et mollis commodo, ex odio molestie ex, quis pulvinar ipsum ligula sed ligula. Etiam hendrerit a ligula ut mattis. Pellentesque tincidunt auctor neque. Praesent ornare quam quis hendrerit ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales elit mi, id volutpat enim ornare a. Etiam nec quam massa. Praesent varius aliquam quam, non fringilla ligula consectetur in. Suspendisse elementum sapien eget massa venenatis, sed interdum dolor ultrices. Vivamus eu euismod libero. Curabitur auctor luctus ornare. Vestibulum eleifend nisi at ipsum sagittis, vel ultricies turpis porta. Curabitur nisl ante, faucibus vitae placerat et, consequat eu tortor. Quisque ultrices sodales ipsum ut efficitur. </p> <p> Fusce risus velit, maximus vel lorem a, convallis sodales ante. Vivamus lobortis euismod sem sit amet ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque mattis, quam in efficitur placerat, lectus ex feugiat quam, eu posuere turpis quam quis massa. Etiam tincidunt neque ipsum, a volutpat felis consequat sed. Phasellus ligula nisl, condimentum in purus ut, cursus lobortis nunc. Vivamus aliquam, libero ut laoreet sodales, orci justo pellentesque nisl, nec hendrerit lectus ipsum ut dolor. Integer in porta turpis. Cras eget ultricies dolor. Suspendisse potenti. Sed congue commodo gravida. </p> <p> In volutpat mi erat, vel porttitor mauris ultrices et. Sed congue leo sit amet viverra dignissim. Morbi dapibus, sem eget eleifend venenatis, felis nisl luctus mi, et sagittis felis leo vel est. Duis laoreet felis leo, quis pulvinar magna lobortis sit amet. Vivamus porttitor eget odio quis euismod. Mauris quis dolor in sapien lobortis rhoncus. Aliquam erat volutpat. </p> <p> Praesent eu sollicitudin dolor. Sed porta, magna eu vehicula sollicitudin, ligula massa vehicula sem, in interdum arcu quam vel ipsum. Donec magna dolor, eleifend id sodales non, pretium id nunc. Maecenas mattis luctus dolor, eget varius turpis commodo nec. Aliquam venenatis velit nec justo ultrices vestibulum. Phasellus leo sapien, tincidunt vel felis non, mattis porttitor nibh. Quisque ullamcorper, lorem vel euismod lacinia, mi mi pulvinar odio, in vestibulum nibh elit vel quam. In vehicula nunc vel velit mattis sollicitudin. Proin vestibulum magna eget orci lacinia hendrerit. Nam neque ex, dignissim nec sodales a, tristique non libero. Fusce vel mollis velit, vel lobortis risus. Donec commodo semper auctor. Maecenas vitae fringilla massa. </p> <p> Nunc quis interdum massa, finibus pharetra libero. Curabitur placerat malesuada lacus ut commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam dignissim massa id est vehicula vulputate. In imperdiet odio a sollicitudin cursus. Curabitur ac felis vitae neque euismod cursus. Sed eu quam nec metus mattis ultricies. Morbi consectetur vestibulum lectus, nec consequat urna iaculis ut. Nunc sed vulputate ipsum. </p>';