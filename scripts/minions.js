document.body.style['z-index'] = '1';
document.body.style['background-color'] = 'rgba(255,255,255,0)';

var subs = document.children[0].children;
for (var i = 0; i < subs.length; i++) {
  subs[i].style['opacity'] = '0.8';
}

var minion_bg = document.createElement('div');
minion_bg.innerHTML = '<div class="minion_content"><div id="band"></div><div class="eye_wrapper" id="eye1"><div class="eye_ring_metal"></div><div class="eye_ring"></div><div class="eye_pupil_wrapper"><div class="eye_pupil_outer"></div><div class="eye_pupil_inner"></div><div class="eye_pupil_glow"></div></div></div><div class="eye_wrapper" id="eye2"><div class="eye_ring_metal"></div><div class="eye_ring"></div><div class="eye_pupil_wrapper"><div class="eye_pupil_outer"></div><div class="eye_pupil_inner"></div><div class="eye_pupil_glow"></div></div></div></div>';
minion_bg.style['position'] = 'fixed';
minion_bg.style['top'] = '0px';
minion_bg.style['height'] = '100%';
minion_bg.style['width'] = '100%';
document.children[0].prepend(minion_bg);

function element_offsets(e) {
    var left = 0, top = 0;
    do {
        left += e.offsetLeft;
        top += e.offsetTop;
    } while (e = e.offsetParent);
    return { left: left, top: top };
}
var eye_radius = 200;
var factor = 1;
var cWidth = window.innerWidth;
var cHeight = window.innerHeight;
var centerX = cWidth/2;
var centerY = cHeight/2;

var animate_eyes_interval;
var mouse_inactivity = 0;
function random_eye(){
  animate_eyes_interval = window.setInterval(function () {
    if (mouse_inactivity > 0 ){
      var angle = Math.random(0,1) * Math.PI * 2 - Math.PI;
      var offx = Math.sin(angle);
      var offy = -Math.cos(angle);
      document.getElementsByClassName('eye_pupil_wrapper')[0].style['left'] = offx * Math.random(0,1)*30 + 'px';
      document.getElementsByClassName('eye_pupil_wrapper')[0].style['top'] = offy * Math.random(0,1)*30 + 'px';
    }
    mouse_inactivity++;
  }, 5000);
}
random_eye();

document.children[0].onmousemove = function(e) {
  mouse_inactivity = 0;
  var offsets = element_offsets(document.children[0]);
  var dx = e.clientX-offsets.left - centerX;
  var dy = e.clientY-offsets.top - centerY;
  var angle = Math.atan2(dx, -(dy));
  var dist = Math.sqrt(dx*dx + dy*dy)
  var offx = Math.sin(angle);
  var offy = -Math.cos(angle);
  document.getElementsByClassName('eye_pupil_wrapper')[0].style['left'] = offx * 30 * dist/centerX + 'px';
  document.getElementsByClassName('eye_pupil_wrapper')[0].style['top'] = offy * 30 * dist/centerY + 'px';
}
window.onresize = function() {
    cWidth = window.innerWidth;
    cHeight = window.innerHeight;
    centerX = cWidth/2;
    centerY = cHeight/2;
}
