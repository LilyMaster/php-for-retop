<?php
require_once('vars.php');

// Create connection
$conn = new mysqli($server, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$conn->set_charset("utf8");
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
?>

<table class="MySQL_Table">
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

<?php
$result->free();
$conn->close();
?>
