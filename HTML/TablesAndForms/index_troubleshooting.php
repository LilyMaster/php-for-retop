<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="w2ui-1.4.2.css">
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <script src="w2ui-1.4.2.js"></script>
</head>
<body>

    <script>
        function doTable() {

            var url = 'manoData.json';

            $.ajax({
                url : url,
                dataType : 'json',
                success : function(response) {
                    var myRecords = [];

                    for (var i in response) {
                        myRecords.push({
                            recid: response[i].recid,
                            name: response[i].name,
                            surname: response[i].surname
                        });
                    }

                    $('.divForW2UI').w2grid({
                        name: 'grid',
                        columns: [
                            {field: 'recid', caption: 'ID', size: '50px'},
                            {field: 'name', caption: 'Name', size: '30%'},
                            {field: 'surname', caption: 'Surname', size: '40%'}
                            ],
                        records: myRecords
                    });
                }
            }); // end of ajax

        }
    </script>

<!--    <script>
        $('.divForW2UI_Mano').w2grid({
            name: 'manogridas',
            url: 'manoData.json',
            columns: [
                {field: 'recid', caption: 'ID', size: '50px'},
                {field: 'name', caption: 'Name', size: '30%'},
                {field: 'surname', caption: 'Surname', size: '40%'}
            ]
        });
    </script>-->




    <div class="divForW2UI">
        <script>doTable();</script>
    </div>


    <div class="divForW2UIMano"></div>





</body>
</html>