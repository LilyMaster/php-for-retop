<?php
/* http://example.com/upload.php:
<?php var_dump($_FILES); ?>
*/

// Create a cURL handle
$ch = curl_init('http://example.com/upload.php');

// Create a CURLFile object
$cfile = curl_file_create('cats.jpg','image/jpeg','test_name');

// Assign POST data
$data = array('test_file' => $cfile);
curl_setopt($ch, CURLOPT_POST,1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

// Execute the handle
curl_exec($ch);
?>
