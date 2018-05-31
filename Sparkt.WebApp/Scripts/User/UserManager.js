(function ($) {
    var submittedForm = null;
    var submitType = {
        Header: 0,
        Home: 1,
        Contact: 2,
        Connector: 3
    };

    $("#btnConnectSubmit").click(function () {
        //grecaptcha.reset();
        alert('Hi');
        if (ContactusFormValidation()) {
            var response = grecaptcha.getResponse(recaptcha1);
            VerifyReCaptcha(submitType.Contact, response);
            //ContactSubmitClick();
        }
        //CheckPincode($("#txtCPinCode").val(), submitType.Contact);
        return false;
    });

    function VerifyReCaptcha(submittedFrom, captchaResponse) {
        //var captchaResponse= grecaptcha.getResponse();
        alert('Captcha');
        $.ajax({
            type: "POST",
            url: "Home/VerifyGResponse",
            dataType: 'json',
            contentType: 'application/json',
            processData: false,
            data: JSON.stringify({ gresponse: captchaResponse }),
            success: function (response) {
                grecaptcha.reset();
                if (response.Status == true) {
                    //alert("Captcha Verified.")
                    if (submittedFrom == submitType.Connector) {
                        CreateConnector();
                    }
                    else if (submittedFrom == submitType.Contact) {
                        ContactSubmitClick();
                    }
                    else {
                        //CheckPincode($("#txtHPinCode").val(), submittedFrom);
                        SetSaveType(submittedFrom);
                    }
                }
                else if (response.Status == false) {
                    alert("Captcha not Submitted.");
                    $("#pMessage").html("Captcha not Submitted.");
                    $("#divCommonMessage").modal("open");
                }
                //var url = $("#RedirectTo").val();
                //location.href = url;
            },
            error: function (error) {
                alert(error);
            }

        });
    }


    function ContactusFormValidation() {
        var returnValue = true;
        //if ($('#txtCName').val().length == 0) {
        //    $('#spnCName').show();
        //    returnValue = false;
        //}
        //if ($('#txtCEmail').val().length == 0) {
        //    $('#spnCEmail').html('Email is required.');
        //    $('#spnCEmail').show();
        //    returnValue = false;
        //} else {
        //    if (!validateEmail($('#txtCEmail').val())) {
        //        $('#spnCEmail').html('Invalid Email.');
        //        $('#spnCEmail').show();
        //        returnValue = false;
        //    }
        //}

        //if ($('#txtCMobileNo').val().length == 0) {
        //    $('#spnCMobileNo').show();
        //    returnValue = false;
        //}
        //if ($('#txtCCity').val().length == 0) {
        //    $('#spnCCity').show();
        //    returnValue = false;
        //}
        //if ($('#txtCQuestion').val().length == 0) {
        //    $('#spnCQuestion').show();
        //    returnValue = false;
        //}
        return returnValue;
    }


  FetchProjectdevelopers('');   
})(jQuery);