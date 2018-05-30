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