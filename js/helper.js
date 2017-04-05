//got this from : http://stackoverflow.com/questions/23109704/makes-nav-pills-collapsable-just-like-nav-bar-in-bootstrap
//Stack menu when collapsed
$('#myNavbar').on('show.bs.collapse', function() {
    $('.nav-pills').addClass('nav-stacked');
});

//Unstack menu when not collapsed
$('#myNavbar').on('hide.bs.collapse', function() {
    $('.nav-pills').removeClass('nav-stacked');
});
//brilliant code got it from : http://stackoverflow.com/questions/21203111/bootstrap-3-collapsed-menu-doesnt-close-on-click it makes the menus in the whole document hide after you click on a menu item.
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 * http://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
 * @returns {String}
 */
function getMobileOS() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}

//using the code above to change the style. 
var home = document.getElementById("Home");
if(getMobileOS() === "iOS"){ 
  
  home.style.background = "white";
}
if(getMobileOS() === "Android"){
  
}