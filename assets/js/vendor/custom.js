/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
    "use strict"; // Start of use strict

(function($) {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    // Initialize WOW.js Scrolling Animations
    new WOW().init();

    $("#btnSend").click(function () {
        var frmContact = $('form[name=frmContact]').serializeArray();

        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        var jqxhr = $.post( "/contact", frmContact ,function() {
            alert('message sent. Thanks');
            $('#contact-form').hide();
        }, 'json')
        .done(function(resonse) {
            $('#contact-form').hide();
        })
        .fail(function(response) {
            $('#contact-form').hide();
        });
    });
    // var  dialog = $( "#contact-form" ).dialog({
    //     autoOpen: false,
    //     height: 300,
    //     width: 650,
    //     modal: true,
    //     buttons: {
    //         Cancel: function() {
    //             dialog.dialog( "close" );
    //         }
    //     },
    //     close: function() {
    //     }
    // });
    // var form = dialog.find( "form" ).on( "submit", function( event ) {
    //     event.preventDefault();
    // });
    // $("#mails-to").click (function(event) {
    //     event.preventDefault();
    //     dialog.dialog( "open" );
    // });
})(jQuery); // End of use strict
