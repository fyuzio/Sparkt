var commomFunctions = function () {

    var that = {};

    var initEvents = function () {


        $('select').material_select();

        $(".submenwrapp a").on("click", function () {

            //$(".subLinks").slideUp();
            $(this).parent(".submenwrapp").toggleClass("open");
            $(this).siblings(".subLinks").slideToggle();

        });

        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: true, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            format: 'mm-dd-yyyy',
            closeOnSelect: false // Close upon selecting a date,
        });
        $('.dob').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            format: 'mm-dd-yyyy',
            closeOnSelect: false, // Close upon selecting a date,
            max: new Date(),
        });
        $('.timepicker').pickatime({
            default: 'now', // Set default time: 'now', '1:30AM', '16:30'
            fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
            twelvehour: true, // Use AM/PM or 24-hour format
            donetext: 'OK', // text for done-button
            cleartext: 'Clear', // text for clear-button
            canceltext: 'Cancel', // Text for cancel-button
            autoclose: false, // automatic close timepicker
            ampmclickable: true, // make AM PM clickable
            aftershow: function () { } //Function for after opening timepicker
        });

        $('.button-collapse').sideNav({
            //  menuWidth: 250, // Default is 300
            //   edge: 'left', // Choose the horizontal origin
            //  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            //  draggable: true, // Choose whether you can drag to open on touch screens,
            onOpen: function (el) { }, // A function to be called when sideNav is opened
            onClose: function (el) { }, // A function to be called when sideNav is closed
        });

        $(".hamberger").on("click", function () {
            $(".side-nav").toggleClass("close");
            $("body").toggleClass("menu-close");
        });

        $('header .dropdown-button').dropdown({
            //  inDuration: 300,
            //  outDuration: 225,
            constrainWidth: false, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            gutter: 0, // Spacing from edge
            belowOrigin: true, // Displays dropdown below the button
            //  alignment: 'left', // Displays dropdown with edge aligned to the left of button
            //   stopPropagation: false // Stops event propagation
        });

        $('.modal').modal({
            dismissible: false, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            inDuration: 400, // Transition in duration
            outDuration: 400 // Transition out duration
            //  startingTop: '4%', // Starting top style attribute
            // endingTop: '10%', // Ending top style attribute
            // ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            //    alert("Ready");
            //     console.log(modal, trigger);
            //  },
            //  complete: function() { alert('Closed'); } // Callback for Modal close
        }
        );

    };


    that.init = function () {
        initEvents();

    };

    return that;

}();


$(document).ready(function () {

    commomFunctions.init();

});