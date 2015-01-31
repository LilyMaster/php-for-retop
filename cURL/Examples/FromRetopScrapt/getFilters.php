<?php
/**
 * Created by PhpStorm.
 * User: Eivydas
 * Date: 2015-01-03
 * Time: 22:31
 */
include_once 'simple_html_dom.php';

function DBrerun(){
    $db = new PDO("mysql:host=localhost;dbname=webscrap", "webscrap", "spd025509");
$data = $db>
    query("SELECT * FROM filter;");
$filters = $data>
    fetchAll(PDO::FETCH_ASSOC);
$db = NULL;
$db = new PDO("mysql:host=localhost;dbname=webscrap", "webscrap", "spd025509");
//$db = new PDO('sqlite:items.sqlite');
//$db>
exec("PRAGMA synchronous = OFF;");
//$db>
exec("PRAGMA journal_mode = WAL;");
//$db>
exec("PRAGMA locking_mode = SHARED;");
$res = 0;
foreach ($filters as $filter){
    $conditions = $filter['COL'] . " like '" . $filter['FIND'] . "'}";
if ($filter['SOURCE'] != 'all') $conditions .= " AND agent = '{$filter['SOURCE']}'";
//$res += $db>
exec("UPDATE items SET filter = '{$filter['ACTION']}' WHERE
{$conditions};");
$res += 1;
} $
db =
    NULL;
echo $conditions;
}
