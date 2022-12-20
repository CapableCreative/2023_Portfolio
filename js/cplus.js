let mouseFade = document.getElementById('mouse');
let tagFade =  document.getElementById('tagline');
let mobNavItem = document.getElementsByClassName('mobNavItem')

setInterval( function() {

    mouseFade.style.opacity = '1.0';
    mouseFade.style.filter = 'blur(0px)';
    tagFade.style.opacity = '1.0';
    
    function mobileNavAnimate(x) {
        if (x.matches) { // If media query matches
            mobNavItem[0].style.margin = '-65px 5px 0px';
            mobNavItem[1].style.margin = '-65px 5px 0px';
            mobNavItem[2].style.margin = '-65px 5px 0px';        
        } 
      }
      var x = window.matchMedia("(max-width: 700px)")
      mobileNavAnimate(x) // Call listener function at run time
      x.addListener(mobileNavAnimate) // Attach listener function on state changes 

}, 2000);