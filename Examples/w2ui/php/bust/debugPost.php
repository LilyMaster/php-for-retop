<?php

$data = array();
foreach ($_REQUEST as $value){
    $data[] = $value;
}

header("Content-Type: application/json;charset=utf-8");
echo json_encode($data);