var peopleManager = function () {
    var peoples = [];
    var peopleGrid;
    var that = {};
    var dataTableApi;

    //that.previewPeopleProfile = function (profileUrl, name) {
    //    $('#previewPeopleProfile .peopleName').html(name);
    //    $('#previewPeopleProfile #peopleLogo').attr('src', profileUrl);
    //    $('#previewPeopleProfile').modal('open');
    //}
    //that.closePeoplePreviewModal = function () {
    //    $('#previewPeopleProfile .peopleName').html('');
    //    $('#previewPeopleProfile #peopleLogo').attr('src', '');
    //}
    that.editPeople = function (tableId, LeadId) {
        window.location.href = "/Admin/Console/LeadDetail/" + LeadId + "/" + tableId;
    }

    //that.updatePeopleStatus = function (PeopleId, Status) {
    //    commonHelper.showHideLoader(true);
    //    var url = "/Admin/People/UpdatePeopleStatus";
    //    var data = { id: PeopleId, status: Status };
    //    ajaxHelper.ajaxPost(url, null, data, function (data) {
    //        if (data.Status) {
    //            alert(data.Message);
    //            loadAllPeoples();
    //        }
    //        else {
    //            alert(data.Message);
    //            commonHelper.showHideLoader(false);
    //        }
    //    }, null);
    //}

    var initEvents = function () {
        debugger;
        // $('#IsActive').val($('#IsActive').prop('checked'));
        var date = new Date($('#fromDate').val());
       // alert(date);
       // console.log(date);
        var formattedDate = (date.getDate()) + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear());
        $('#fromDate').pickadate('picker').set('max', formattedDate, { format: 'dd/mm/yyyy' }).trigger("change");
        $('#toDate').pickadate('picker').set('min', date, { format: 'dd/mm/yyyy' }).trigger("change");
        $('#fromDate').val(formattedDate);
        var date1 = new Date($('#toDate').val());
        $('#fromDate').on('change', function () {
            $('#fromDate').val($(this).val());
            date1 = $(this).val();
            $('#toDate').pickadate('picker').set('min', date1, { format: 'dd/mm/yyyy' }).trigger("change");
            //$('#toDate').val(date1);
        })

        date1 = new Date($('#toDate').val());
        var formattedDate1 = (date1.getDate()) + '/' + (date1.getMonth() + 1) + '/' + (date1.getFullYear());
        $('#toDate').pickadate('picker').set('select', formattedDate1, { format: 'dd/mm/yyyy' }).trigger("change");
        $('#toDate').val(formattedDate1);

        $('#toDate').on('change', function () {
            $('#toDate').val($(this).val());
        })

        $('.switch input[type="checkbox"]').on('change', function () {
            $(this).val($(this).prop('checked'));
            $('#IsActive').val($('#IsActive').prop('checked'));
        });

        //CKEDITOR.replace('Bio');
        //window.setTimeout(function () {
        //    $('label[for="Bio"]').addClass("active");
        //}, 200);

        //configurePeopleGrid();

        //$('.input-file-logo').change(function () {
        //    var prevTag = $(this).attr('data-id');
        //    var ext = this.value.match(/\.([^\.]+)$/)[1];
        //    switch (ext) {
        //        case 'jpg':
        //        case 'png':
        //        case 'jpeg':
        //            readURL(this, prevTag);
        //            break;
        //        default:
        //            alert('Invalid Image type');
        //            this.value = '';
        //    }
        //});
    }

    var readURL = function (input, prevTag) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#' + prevTag + '').show();
                $('#' + prevTag + '').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    that.initPeopleGrid = function () {
        commonHelper.showHideLoader(true);
        configurePeopleGrid();
        $('.dataTables_filter').hide();
        loadAllPeoples();
    }

    that.init = function () {
        debugger;
        initEvents();
        //initPeopleGrid();
    };

    var configurePeopleGrid = function () {
        peopleGrid = $('#peopleDataTable').DataTable({
            data: peoples,
            columns: [
                { data: 'Name', title: 'Name', "bSortable": false, "className": "text-filter" },
                { data: 'Email', title: 'Email', "bSortable": false, "className": "text-filter" },
                { data: 'PhoneNumber', title: 'Contact Number', "bSortable": false, "className": 'text-filter' },
                { data: 'City', title: 'City', "bSortable": false, "className": 'text-filter' },
                { data: 'State', title: 'State', "bSortable": false, "className": 'text-filter' },
                { data: 'Type', title: 'Type', "bSortable": false, "className": "select-filter type-filter" },
                { data: 'PropertyName', title: 'Property Name', "bSortable": false, "className": "select-filter type-filter" },
                { data: 'LeadId', title: 'Action', "bSortable": false, "className": 'no-filter' }
            ],
            "aoColumnDefs": [
                {
                    "aTargets": [0],
                    "mData": null,
                    "mRender": function (data, type, full) {
                        return data;
                    }
                },
                {
                    "aTargets": [1],
                    "mData": null,
                    "mRender": function (data, type, full) {
                        return data;
                    }
                },
                {
                    "aTargets": [2],
                    "mData": null,
                    "mRender": function (data, type, full) {
                        return data;
                    }
                },
                {
                    "aTargets": [3],
                    "mData": null,
                    "mRender": function (data, type, full) {
                        return data;
                    }
                },
                {
                    "aTargets": [4],
                    "mData": null,
                    "mRender": function (data, type, full) {
                        return data;
                    }
                },
                {
                    "aTargets": [5],
                    "mData": null,
                    "mRender": function (data, type, full) {
                        // var cssClass = data == "DropOut" ? "badge badge-success " : data == "Lead" ? "badge badge-success " :"badge badge-success" ;
                        var isEnabledText = data;
                        return '<span class="">' + isEnabledText + '</span>';
                    }
                },
                {
                    "aTargets": [6],
                    "mData": null,
                    "mRender": function (data, type, full) {
                        // var cssClass = data == "DropOut" ? "badge badge-success " : data == "Lead" ? "badge badge-success " :"badge badge-success" ;
                        var isEnabledText = data;
                        return '<span class="">' + isEnabledText + '</span>';
                    }
                },
                {
                    "aTargets": [7],
                    "mData": null,
                    "mRender": function (data, type, full) {
                        var appendText = "";
                        appendText = '<a title="View Detail ' + full.Type + ' " class="edit-icon" onclick="peopleManager.editPeople(' + full.StatusTable + ',' + full.LeadId + ')"><i class="fa fa-eye" aria-hidden="true"></i></a>';
                        return appendText;
                    }
                }
            ],
            responsive: true,
            "lengthChange": false,
            "bFilter": true,
            sorting: false,
            "language": {
                "infoEmpty": "No Records Found",
                "zeroRecords": "No Records Found"
            },
            "fnDrawCallback": function () {
                $('select').material_select();

                if ($('#peopleDataTable_paginate span > *').length > 1) {
                    $('#peopleDataTable_paginate')[0].style.display = "block";
                    $('#peopleDataTable_info')[0].style.display = "block";
                } else {
                    $('#peopleDataTable_paginate')[0].style.display = "none";
                    $('#peopleDataTable_info')[0].style.display = "none";
                }
            },
            initComplete: function () {
                dataTableApi = this.api();
                commonHelper.renderCustomDataTableColumns(dataTableApi);
            },
        });
    };

    var loadAllPeoples = function () {

        ajaxHelper.ajaxGet('/Admin/Console/GetAllLead', 'json', null, function (data) {

            if (data != null && data.length > 0) {
                peoples = data;
                //console.log(peoples);
                if (peoples.length > 0) {
                    $("#peopleDataTable").dataTable().fnClearTable();
                    $("#peopleDataTable").dataTable().fnAddData(peoples);
                    commonHelper.renderCustomDataTableColumns(dataTableApi);
                    //$('.actionType').material_select();
                } else {
                    peopleGrid.clear().draw();
                }
            }

            commonHelper.showHideLoader(false);

        }, null);
    }

    return that;
}();