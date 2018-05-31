(function ($) {
    var submittedForm = null;
    var savedtLeadId = '00000000-0000-0000-0000-000000000000';
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
            VerifyReCaptcha(submitType.Home, response);
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
                    alert("Captcha Verified.")
                    if (submittedFrom == submitType.Home) {
                        SaveLeadData();
                       // ContactSubmitClick();
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

    //    function SaveLeadData() {
    //        alert('SaveLeadData');
    //    $.ajax({
    //        type: "POST",
    //        url: "/Home/Contact",
    //        data: JSON.stringify({ leadEntity: leadData }),
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        success: function (response) {
    //           sessionStorage.clear();

    //        },
    //        failure: function (response) {
    //            alert(response.responseText);
    //        },
    //        error: function (response) {
    //            alert(response.responseText);
    //        }
    //    });
    //}


    //function SaveLeadData(leadData, type) {

    //    $.ajax({
    //        type: "POST",
    //        url: "/Lead/Create",
    //        data: JSON.stringify({ leadEntity: leadData }),
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        success: function (response) {
    //            savedtLeadId = response.LeadId;
    //            dropoutId = response.LeadId;
    //            //  ProjectId = 0;
    //            sessionStorage.clear();
    //            if (type != leadType.DropOut && type != leadType.ConnectorDropOut) {
    //                dropoutId = null;
    //                //$('#divThankYouModal').modal({ dismissible: false, backdrop: "static" });
    //                if (!response.IsPinCodeCorrect && submittedForm == 'Header') {
    //                    $("#divThankYouModal").modal("open");
    //                    $('#pThankYouMessage').html('Thank you for showing interest, currently we do not serve in your area.');
    //                }
    //                else {
    //                    $("#divThankYouModal").modal("open");
    //                    $('#pThankYouMessage').html('Thank you for your Interest. We will get back to you.');
    //                }
    //            }
    //            //alert('Success');
    //            //var url = $("#RedirectTo").val();
    //            //location.href = url;
    //        },
    //        failure: function (response) {
    //            alert(response.responseText);
    //        },
    //        error: function (response) {
    //            alert(response.responseText);
    //        }
    //    });
    //}
    //function ContactSubmitClick() {
    //    submittedForm = 'Contact';
    //    var leadModel = FillLeadData();
    //    leadModel.PageSection = 'Contact';
    //    leadModel.PageSource = 'Contact Us';
    //    leadModel.Remarks = $("#txtCQuestion").val();
    //    leadModel.Title = "";//$('#drpCSalutation').val();
    //    leadModel.LeadName = $("#txtCName").val();
    //    leadModel.Email = $("#txtCEmail").val();
    //    leadModel.MobileNo = $("#txtCMobileNo").val();
    //    leadModel.City = $("#txtCCity").val();
    //    leadModel.ContextType = $('#drpCProduct').val();
    //    leadModel.CompanyName = $("#txtCCompanyName").val();
    //    leadModel.LeadTypeId = 1;//Lead
    //    SaveLeadData(leadModel, leadType.Service);
    //    return false;
    //}

    //function FillLeadData() {
    //    var leadModel = {};
    //    leadModel.LeadID = savedtLeadId;
    //    var utmcampaign = getParameterByName('utm_source');
    //    if (utmcampaign != null && utmcampaign.length > 0) {
    //        leadModel = FetchCampaingnParameters(leadModel);
    //        //leadModel.LeadCreatedTypeID = 4; //Paid
    //        //leadModel.CampaignParameters = FetchCampaingnParameters();
    //    }
    //    else {
    //        leadModel.LeadCreatedTypeID = 1; //Organic
    //    }
    //    leadModel.ReferralUrl = sessionStorage.getItem('ReferralURL');
    //    leadModel.LeadSource = "Website";
    //    leadModel.PageSource = currentPage;
    //    //if (typeof currentPageSection != 'undefined') {
    //    //	leadModel.PageSection = currentPageSection;
    //    //}
    //    //else {
    //    //	leadModel.PageSection = 'Home';
    //    //}
    //    leadModel.IsActive = 1;
    //    leadModel.Remarks = $("#txtHelpQuestion").val();
    //    leadModel.UserTypeId = $("#drpUserType").val();
    //    leadModel.LeadSubTypeId = $("#drpEnquiryType").val();
    //    leadModel.IsCreatedByConnector = false;
    //    return leadModel;
    //}

 // FetchProjectdevelopers('');   
})(jQuery);