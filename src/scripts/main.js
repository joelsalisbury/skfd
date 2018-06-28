 google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 9,

                    scrollwheel: false,
                    disableDefaultUI: true,



                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(41.659949, -86.995), // Chicago Locale

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#e9eef1"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"gamma":"2.28"},{"color":"#0c1a22"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"gamma":"0.46"},{"saturation":"100"},{"lightness":"22"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#e4b5b5"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"},{"color":"#ff0000"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"saturation":"100"},{"lightness":"0"},{"gamma":"0.37"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#414b51"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"color":"#ffc20e"},{"visibility":"off"}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(41.549637, -87.825540),
                    map: map,
                    title: 'Snazzy!'
                });
            }
/*!
 * main.js
 */
;(function(window, $) {
  $(function() {

    /*!
     *  Scroll handler
     */
    var header = $('.site-header');

    var scrollHandle = function(e) {
      if (header.offset().top >= 85) {
        header.addClass('altNav');
        //header.removeClass('head-bump-down');
      } else {
        header.removeClass('altNav');
        //header.addClass('head-bump-down');
      }
    };

    scrollHandle();
    $(window).scroll(scrollHandle);


    /*!
     *  Resize handler
     */
    var body = $('body'),
        nav = $('.nav');
    var resizeHandle = function(e) {
      if ($(window).width() >= 1000) {
        body.removeClass('nav--open');
        nav.show();
      } else{
        
      }
    };
    $(window).resize(resizeHandle);





/** Mobile Menu Toggle **/
  $('.nav-toggle').on('click',function(e){
    e.preventDefault();

      var currentText = $(this).text();
      var currentText = currentText.toLowerCase();
      var buttonText = ( currentText == "menu" ) ? "Close" : "menu";

      $(this).text(buttonText);

      $(this).siblings('.togglable-nav').toggleClass('hide-for-mobile'); 
      //$(this).siblings('.togglable-nav').slideToggle();



      $("body").toggleClass('nav-open');
    });
/** End Mobile **/


    function isEmpty( el ){
      return !$.trim(el.html())
  }
    
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top-80
          }, 1000);
          return false;
        }
      }
    });
  });




  });
})(window, jQuery);

