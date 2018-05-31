function validationConnect() {
    var errorCount = 0;
    var name = $("#txtName").val().trim();
    var companyName = $("#txtcompany_name").val().trim();
    var emailId = $("#txtemailID").val().trim();
    var phoneNumber = $("#txtphone_number").val().trim();
    var message = $("#txtmsg").val().trim();
    // var assistYou = $('#ddlassistyou option:selected').val();

    if (name == null || name == "") {
        errorCount++;
        alert('Please enter name');
    }
    else if (companyName == null || companyName == "") {
        errorCount++;
        alert('Please enter company name');
    }
    else if (emailId == null || emailId == "") {
        errorCount++;
        alert('please enter email address');
    }
    else if (phoneNumber == null || phoneNumber == "") {
        errorCount++;
        alert('Please enter phone number');
    }
    //else if (assistYou == "0") {
    //    errorCount++;
    //    alert('Please select assist you');
    //}
    else if (message == null || message == "") {
        errorCount++;
        alert('Please enter message');
    }
    else if (phoneNumber.length < 10) {
        errorCount++;
        alert('Phone number should be atleast 10 digits long');
    }
    if (errorCount == 0) {
        return true;
    }
    return false;
}


function VerifyReCaptcha(submittedFrom, captchaResponse) {
    //var captchaResponse= grecaptcha.getResponse();
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
                //alert("Captcha not Submitted.");
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