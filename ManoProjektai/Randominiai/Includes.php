<?php
/**
 * Created by PhpStorm.
 * User: Eivydas
 * Date: 2015-01-07
 * Time: 20:24
 */


function echocURL($ch) {
    echo '<pre>';
    $info = curl_getinfo($ch);
    print_r($info);
    echo '</pre>';
}