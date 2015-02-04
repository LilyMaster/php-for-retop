<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Signin Template for Bootstrap</title>

    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

    <style>
        .container {
            width: 900px;
        }

        .form-group {
            margin: auto;
            width: 500px;
        }

    </style>
</head>

<body>

<div class="container">

    <h2>Table</h2>
    <p>Pateikiama lentelė</p>
    <div class="table-responsive" id="lenteleAtnaujinimui">
        <table class="table">
            <?php include 'MySQLi_testToIncludeHTML.php'; ?>
        </table>
        <button class="btn btn-lg btn-primary" id="submit_reloadTable" onClick="">Atnaujinti lentelę</button>
    </div>
<div id="QueryResults"></div>
    <div class="form-group">
        <form class="form-signin" id="idForm">
            <h2 class="form-heading">Įveskite informaciją patalpinimui</h2>
            <label for="vardas" class="sr-only">Vardas</label>
            <input type="text" class="form-control" name ="vardas" placeholder="Vardas" required autofocus>
            <label for="surname" class="sr-only">Password</label>
            <input type="text" class="form-control" name="surname" placeholder="Pavardė" required>
            <button class="btn btn-lg btn-primary btn-block" id="submit_addEntry" onClick="">Pridėti info</button>
        </form>
    </div>

</div> <!-- /container -->

<script> // Click logics

    $('#submit_reloadTable').click(function () {
        $.ajax({
            url: "",
            success: function () {
                $('table.table').load('MySQLi_testToIncludeHTML.php');
            }
        });
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

</body>
</html>
