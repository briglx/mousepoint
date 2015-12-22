$(function(){

    console.log("ready");
    var deg = 0;
    

    gun = $(".gun")[0];

    var rect = gun.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;


    $("body").on("click", function(e){
        
        var delX = e.clientX - centerX;
        var delY = centerY - e.clientY;     

        deg = toDegrees(Math.atan(delY / delX));     

        rotate(gun, 90-deg)
        

    })

});

function rotate(el, deg){
    reset(el);

    el.style.webkitTransform = 'translateX(-50%) translateY(-50%) rotate('+deg+'deg)'; 
    el.style.mozTransform    = 'translateX(-50%) translateY(-50%) rotate('+deg+'deg)'; 
    el.style.msTransform     = 'translateX(-50%) translateY(-50%) rotate('+deg+'deg)'; 
    el.style.oTransform      = 'translateX(-50%) translateY(-50%) rotate('+deg+'deg)'; 
    el.style.transform       = 'translateX(-50%) translateY(-50%) rotate('+deg+'deg)'; 
}

function reset(el){
    el.style.webkitTransform = 'none'; 
    el.style.mozTransform    = 'none'; 
    el.style.msTransform     = 'none'; 
    el.style.oTransform      = 'none'; 
    el.style.transform       = 'none'; 
}

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

function doMove(el, target) {
    console.dir(el);
    el.style.left = target.x +'px'; 
    el.style.top = target.y +'px';
}