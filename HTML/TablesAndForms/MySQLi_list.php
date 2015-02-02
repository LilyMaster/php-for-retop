<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="Normalize.css">
    <style>
        table {
            width: 100%;
        }

        td {
            border: 1px solid darkblue;
        }

        th {
            border: 1px solid steelblue;
        }

        .wrap {
            margin: auto;
            width: 80%;
        }
    </style>
</head>
<body>
<p>
<?php
require_once('vars.php');

// Create connection
$conn = new mysqli($server, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo 'Connected to db: \'' . $dbname . '\' as \'' . $username . "' on '".$server."'";
    echo "<br />";
}

$sql = '
    SELECT *
    FROM tbl_pirma';

/*$sql = '
    SHOW TABLES';*/

$result = $conn->query($sql);

$data = array();

/* Read the data from the query to array */
while($row = $result->fetch_assoc())
{
    $data[] = $row;
}

$colNames = array_keys(reset($data));
echo "Data from the db: <br />";


echo "<pre>";
print_r($data);

$numRows = $result->num_rows;
echo "Number of rows in the results from table: " . $numRows . "\n\n";

?>
</p>
<div class="wrap">
<table>
    <thead>
        <tr>
            <?php
            foreach ($colNames as $value){
                echo "<th>$value</th>";
            };
            echo "\n";
            ?>
        </tr>
    </thead>
    <tbody>
        <?php
        foreach ($data as $rows){
            echo "<tr>";
            foreach ($colNames as $column){
                echo "<td>$rows[$column]</td>";
            }
            echo "</tr>\n";
        }
        ?>
    </tbody>
</table>
</div>



<p>
<?php
echo "Data from \$colNames:\n\n";
//print_r($result->fetch_all());
foreach ($colNames as $value){
    print_r($value); echo "\n";
};
echo "\n";

echo "</pre>";

echo "Data in rows:\n\n";
/* Add column headers */
foreach ($colNames as $value){
    echo $value . " ";

};
echo "\n";

/* Print each row */
foreach ($data as $rows){
    foreach ($colNames as $column){
        echo $rows[$column]. " ";
    }
    echo "\n";
}




//echo "</pre>";


//print_r($result);


$result->free();

$conn->close();
?>
</p>
</body>
</html>