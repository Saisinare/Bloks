
    window.onscroll = function() {myFunction()};
  
var navlist = document.getElementById("nav");
    var sticky = navlist.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navlist.style.position="fixed"
        }
            navlist.style.position="sticky"
    }
