(function ($) {
$(document).ready(function () {
    $("#txtName").blur(function () {
        if ($('#txtName').val().length == 0) {
            $('#spnName').show();
        }
    });
    $("#txtName").focus(function () {
        $('#spnName').hide();
    });

    $("#txtEmailID").blur(function () {
        if ($("#txtEmailID").val().length == 0) {
            $('#spnEmailID').html('Email is required.');
            $('#spnEmailID').show();
        }
        else if (!validateEmail($("#txtEmailID").val())) {
            $('#spnEmailID').html('Invalid Email.');
            $('#spnEmailID').show();
        }
    });

    $("#txtPhoneNumber").blur(function () {
        if ($('#txtPhoneNumber').val().length == 0) {
            $('#spnPhoneNumber').show();
        }
    });
    $("#txtPhoneNumber").focus(function () {
        $('#spnPhoneNumber').hide();
    });

    $("#txtEmailID").focus(function () {
        $('#spnEmailID').hide();
    });

    $("#txtMessage").blur(function () {
        if ($('#txtMessage').val().length == 0) {
            $('#spnMessage').show();
        }
    });
    $("#txtMessage").focus(function () {
        $('#spnMessage').hide();
    });

});
function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}

function ContactusFormValidation() {
    var returnValue = true;
    if ($('#txtName').val().length == 0) {
        $('#spnName').show();
        returnValue = false;
    }
    if ($('#txtEmailID').val().length == 0) {
        $('#spnEmailID').html('Email is required.');
        $('#spnEmailID').show();
        returnValue = false;
    } else {
        if (!validateEmail($('#txtEmailID').val())) {
            $('#spnEmailID').html('Invalid Email.');
            $('#spnEmailID').show();
            returnValue = false;
        }
    }

    if ($('#txtPhoneNumber').val().length == 0) {
        $('#spnPhoneNumber').show();
        returnValue = false;
    }
    
    if ($('#txtMessage').val().length == 0) {
        $('#spnMessage').show();
        returnValue = false;
    }
    return returnValue;
}
$('#btnThankyouClose').click(function () {
    CloseSuccessPopup();
});
$('#btnSubmit').click(function () {
    if (ContactusFormValidation())
    {
        $('#btnSubmit').addClass("onclic");
        VerifyReCaptcha();
    }
    return false;
});

function CloseSuccessPopup() {
    $("#divThankYouModal").modal("close");
    //var url = $("#RedirectTo").val();
    //location.href = url;
    $('#txtName').val('');
    $('#txtCompanyName').val('');
    $('#txtEmailID').val('');
    $('#txtPhoneNumber').val(''); 
    $('#txtMessage').val(''); 
    grecaptcha.reset();  
    callback();
    return false;
}

function SaveGuestData(guestData) {
    var guestData = {};
    guestData.CompanyName = $('#txtCompanyName').val();;
    guestData.Name = $("#txtName").val();
    guestData.EmailID = $("#txtEmailID").val();
    guestData.PhoneNumber = $("#txtPhoneNumber").val();
    guestData.SeekAConsultation = $("#drpConsultationType").val();
    guestData.Message = $('#txtMessage').val();
    $.ajax({
        type: "POST",
        url: "/Create",
        data: JSON.stringify({ guestEntity: guestData }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            $('#btnSubmit').removeClass("onclic");
            $('#btnSubmit').addClass("validate");           
            if (response.Status == true) {
                //alert("Data saved Succesdfully.");
                //alert("Data saved Succesdfully.");
                $('#txtName').val('');
                $('#txtCompanyName').val('');
                $('#txtEmailID').val('');
                $('#txtPhoneNumber').val('');
                $('#txtMessage').val('');
                grecaptcha.reset();
                callback();	
                $("#divThankYouModal").modal("open");
                $('#pThankYouMessage').html('Thank you for your Interest. We will get back to you.');
            }            
        },
        failure: function (response) {
            $('#btnSubmit').removeClass("onclic");
            alert(response.responseText);
        },
        error: function (response) {
            $('#btnSubmit').removeClass("onclic");
            alert(response.responseText);
        }
    });
}

function callback() {
    setTimeout(function () {
        $("#btnSubmit").removeClass("validate");
    }, 3000);
}	
function VerifyReCaptcha() {
    var captchaResponse = grecaptcha.getResponse(recaptcha1);
    if (captchaResponse.length > 0) {
        $.ajax({
            type: "POST",
            url: "/VerifyGResponse",
            dataType: 'json',
            contentType: 'application/json',
            processData: false,
            data: JSON.stringify({ gresponse: captchaResponse }),
            success: function (response) {
                grecaptcha.reset();
                if (response.Status == true) {
                    SaveGuestData();
                }
                else if (response.Status == false) {
                    alert("Captcha not Submitted.");
                    //$("#pMessage").html("Captcha not Submitted.");
                    //$("#divCommonMessage").modal("open");
                    $('#btnSubmit').removeClass("onclic");
                }
                //var url = $("#RedirectTo").val();
                //location.href = url;
            },
            error: function (error) {
                $('#btnSubmit').removeClass("onclic");
                alert(error);
            }

        });
    }
    else {
        //$("#pMessage").html("Captcha not Submitted.");
        //$("#divCommonMessage").modal("open");
        alert("Captcha not Submitted.");
        $('#btnSubmit').removeClass("onclic");
    }
}

})(jQuery);