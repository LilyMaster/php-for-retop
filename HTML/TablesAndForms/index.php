<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="w2ui-1.4.2.css">
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="w2ui-1.4.2.js"></script>
<!--   <script>
        function doThePosting() {
            alert("Pradedamas skriptas");
            var url = 'processData.php';
            /*$.ajax({
                url: "http://fiddle.jshell.net/favicon.png",
                beforeSend: function (xhr) {
                    xhr.overrideMimeType("text/plain; charset=x-user-defined");
                }
            })

            .done(function (data) {
                if (console && console.log) {
                    console.log("Sample of data:", data.slice(0, 100));
                }
            });*/

            $.ajax({
                    // Post the variable fetch to url.
                    type: 'post',
                    url: url,
                    dataType: 'html', // expected returned data format.
                    data: {
                        'name': 'Varduošius',
                        'surname': 'Pavarduošius'// You might want to indicate what you're requesting.
                    },
                    success: function (data) {
                        $("ifreimas").val = data;


                        /*// This happens AFTER the backend has returned an JSON array (or other object type)
                         var res1, res2;

                         for (var i = 0; i < data.length; i++) {
                         // Parse through the JSON array which was returned.
                         // A proper error handling should be added here (check if
                         // everything went successful or not)

                         res1 = data[i].res1;
                         res2 = data[i].res2;

                         // Do something with the returned data
                         $('#div1').html(res1);*/
                    }

                complete: function (data) {
                // do something, not critical.
                alert("OK");
                }
        }
        }),
    </script>-->
</head>
<body>

<div class="wrapper">
    <div class="table_1">
        <?php include 'MySQLi_testToIncludeHTML.php'; ?>
    </div>
    <!-- ------------------------- -->
    <div class="formForInsert">
        <form id="idForm">
            Vardas: <input name="name" value="">
            Pavardė: <input name="surname" value=""><br/>
            <button type="button" id="submit_addEntry">Add!</button>
            <button type="button" id="submit_getJSON">GetJSON</button>
        </form>
    </div>
    <!-- ------------------------- -->

    <script> // Click logics
        $("#submit_getJSON").click(function() {

            var url = "processDataJSON.php"; // where to get the data from
            $.ajax({
                url: url,
                success: function(data){
                    console.log(data);
                }
            })
        });

        $("#submit_addEntry").click(function() {

            var url = "processData.php"; // the script where you handle the form input.
            $.ajax({
                type: "POST",
                url: url,
                data: $("#idForm").serialize(), // serializes the form's elements.
                beforeSend: function (data) {
                    console.log(data);
                },
                success: function(data)
                {
                    alert(data); // show response from the php script.
                }
            });

            return false; // avoid to execute the actual submit of the form.*/
        })
    </script>


    <script>
        function doTable() {

            var url = 'processDataJSON.php';

            $.ajax({
                url: url,
                dataType: 'json',
                success: function (response) {
                    var myRecords = [];

                    for (var i in response) {
                        myRecords.push({
                            recid: response[i].id,
                            vardas: response[i].vardas,
                            surname: response[i].surname
                        });
                    }

                    $('.divForW2UI').w2grid({
                        name: 'grid',
                        header: 'Test Grid, woohoo',
                        show: {
                            header         : true,
                            toolbar     : true,
                            footer        : true,
                            lineNumbers    : true,
                            selectColumn: true,
                            expandColumn: true,
                            toolbarAdd: true,
                            toolbarDelete: true,
                            toolbarSave: true,
                            toolbarEdit: true},
                        columns: [
                            {field: 'recid', caption: 'ID', size: '50px'},
                            {field: 'vardas', caption: 'Name', size: '30%'},
                            {field: 'surname', caption: 'Surname', size: '40%'}
                        ],
                        records: myRecords
                    });
                }
            }); // end of ajax

        }
    </script>

<!--        <script>
            $('.divForW2UIMano').w2grid({
                name: 'grid',
                header: 'Test Grid, woohoo',
                url: 'processDataJSON.php',
                show: {
                    header         : true,
                    toolbar     : true,
                    footer        : true,
                    lineNumbers    : true,
                    selectColumn: true,
                    expandColumn: true,
                    toolbarAdd: true,
                    toolbarDelete: true,
                    toolbarSave: true,
                    toolbarEdit: true},
                columns: [
                    {field: 'recid', caption: 'ID', size: '50px'},
                    {field: 'vardas', caption: 'Name', size: '30%'},
                    {field: 'surname', caption: 'Surname', size: '40%'}
                ]
            });
        </script>-->

    <div style="padding-bottom: 25px;"></div>
    <div class="divForW2UI" style="width: 80%; height: 600px; margin: auto;">
        <script>doTable();</script>
    </div>


    <div class="divForW2UIMano" style="width: 80%; height: 600px; margin: auto;"></div>


</div>


</body>
</html>