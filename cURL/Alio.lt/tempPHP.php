<?php
define('DOCROOT', realpath(dirname(__FILE__)).'/'); echo DOCROOT."\n";
$login = 'loginasss';

$taskResult = array();
$taskResult['msg'] = date(DATE_RFC2822). ' Skelbimai vartotojui ' . $login . ' atnaujinti. ' . "\r\n";
print_r($taskResult);