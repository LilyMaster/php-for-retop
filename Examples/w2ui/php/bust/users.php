<?php

require("w2db.php");
require("w2lib.php");

$server = "localhost";
$username = "root";
$password = "MySQL";
$dbname = "manodb";



$db = new dbConnection("mysql");
$db = $db->connect($server, $username, $password, $dbname);
$db = new mysqli($server, $username, $password, $dbname);

switch ($_REQUEST['cmd']) {

    case 'get-records':
        $stmt = $db->prepare("SELECT * FROM tbl_pirma WHERE ?");
        $stmt->bind_param("s", $_REQUEST['request']);
        $res  = $db->query($sql);
        $res = $w2grid->getRecords($sql, null, $_REQUEST);
        $w2grid->outputJSON($res);
        break;

    /*case 'delete-records':
        $res = $w2grid->deleteRecords("tbl_pirma", "id", $_REQUEST);
        $w2grid->outputJSON($res);
        break;

    case 'get-record':
        $sql = "SELECT id, vardas, surname password
                FROM tbl_pirma
                WHERE id = ".$_REQUEST['recid'];
        $res = $w2grid->getRecord($sql);
        $w2grid->outputJSON($res);
        //echo $w2grid->outputJSON($res);
        break;

    case 'save-record':
        $res = $w2grid->saveRecord('tbl_pirma', 'id', $_REQUEST);
        $w2grid->outputJSON($res);
        break;*/

    default:
        $res = Array();
        $res['status']  = 'error';
        $res['message'] = 'Command "'.$_REQUEST['cmd'].'" is not recognized.';
        $res['postData']= $_REQUEST;
        $w2grid->outputJSON($res);
        break;
}
