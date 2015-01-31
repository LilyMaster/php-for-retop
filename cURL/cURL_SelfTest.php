<?php
// Veikia~
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://www.google.lt/?gws_rd=cr&amp;ei=kHGtVPzxLOWAywPBsoCYAw");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    print_r($output);
    if (curl_error($ch)) {
        echo curl_error($ch);
    }
    curl_close($ch);
?>