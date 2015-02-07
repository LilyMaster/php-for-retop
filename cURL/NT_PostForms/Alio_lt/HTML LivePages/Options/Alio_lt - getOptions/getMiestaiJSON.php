<?php

define('DOCROOT', realpath(dirname(__FILE__)) . '/');
define('WEBROOT', $_SERVER['DOCUMENT_ROOT'] . '/');
include_once(WEBROOT . 'includes/simple_html_dom.php');
include_once(WEBROOT . 'includes/cURL_functions.php');

$UA = getUA(); // Nustatome "User-Agent: "
$referer = 'http://alio.lt';

set_time_limit(0);

echo '<pre>';

$dir = DOCROOT . 'Seniunija/';

/*$visiFailai = scandir($dir);
print_r($visiFailai);*/

if (($_REQUEST['operation'] == 'FULLUPDATE')) {


    $visiFailai = array_slice(scandir($dir), 2);
//print_r($visiFailai);
    $o = 0;
    $IDs = array();
    foreach ($visiFailai as $failas) {
        $file = file_get_contents($dir . $failas);
        /*echo"Kitas failas:\n";
        print_r($file);
        echo "\n";*/
        $json = json_decode($file, true);
        foreach ($json as $savivaldybesID => $seniunijos) {
            $i = 0;
            $IDs[$o]['tipas'] = 'savivaldybe';
            $IDs[$o]['name'] = '';
            $IDs[$o]['id'] = $savivaldybesID;
            $miestoInfo = array();
            foreach ($seniunijos as $Rajonas) {
                $miestoInfo[$i]['tipas'] = 'seniunija';
                $miestoInfo[$i]['name'] = $Rajonas['name'];
                $miestoInfo[$i]['id'] = +$Rajonas['id'];
                $SeniunijosID = $Rajonas['id'];

                $ch = curl_init();
                /*$url = 'http://alio.lt';
                $html = cURL_ping_html($url, $referer, $UA, $ch);*/

                $post_data = array(
                    'id' => '',
                    'values[]' => $SeniunijosID
                );
                $url = 'http://www.alio.lt/addressgetSimple2.html?'; //Pirmasis pasirinkimas
                $url .= http_build_query($post_data);
                $html = cURL_ping_html($url, $referer, $UA, $ch); // post action
                //echo $url.'\n';
                $failas2 = fopen(DOCROOT . "Gatve/$SeniunijosID.json", "w");
                fwrite($failas2, $html[1]);
                fclose($failas2);
                curl_close($ch);

                $file2 = file_get_contents(DOCROOT . "Gatve/$SeniunijosID.json");
                //$file2 = file_get_contents(DOCROOT . "Gatve/123456.json");

                //print_r($file2);
                $json2 = json_decode($file2, true);
                //echo "json2:\n"; print_r($json2);
                $n = 0;
                $gatvesInfo = array();
                if ($json2[$SeniunijosID]) {
                    foreach ($json2[$SeniunijosID] as $gatve) {
                        $gatvesInfo[$n]['name'] = $gatve['name'];
                        $gatvesInfo[$n]['id'] = $gatve['id'];
                        $n++;
                        //print_r($gatve); echo "t'was gatve\n";
                    }
                } else {
                    $gatvesInfo[$n]['name'] = '---';
                    $gatvesInfo[$n]['id'] = '';
                    $n++;
                }

                $miestoInfo[$i]['gatves'] = $gatvesInfo;
                /*echo "gatves[] \n\n";
                print_r($gatvesInfo);*/

                // log
                $failasLog = fopen(DOCROOT . "fullUpdate.log", "a");
                fwrite($failasLog, "Checked " . $miestoInfo[$i]['name'] . " seniunija " . $IDs[$o]['id'] . " savivaldybeje\n");
                fclose($failasLog);
                $i++;
            }
            $IDs[$o]['seniunijos'] = $miestoInfo;
            $o++;
        }

    }

    $failas3 = fopen(DOCROOT . "VisiOptions.json", "w");
    $IDs_JSON = json_encode($IDs);
    fwrite($failas3, $IDs_JSON);
    fclose($failas3);

    $failasLog = fopen(DOCROOT . "fullUpdate.log", "a");
    fwrite($failasLog, "All DONE \n" . time());
    fclose($failasLog);

    /*echo "Miestai[] \n\n";
    print_r($miestoInfo);*/

    /*echo "IDs[]\n";
    print_r($IDs);*/
    echo "done";
}


/*foreach($Rajonas['id'] as $SeniunijosID){
    $post_data = array (
        'id' => '',
        'values[]' => $SeniunijosID
    );
    $url = 'http://www.alio.lt/addressgetSimple.html?'; //Pirmasis pasirinkimas
    $url .= http_build_query($post_data);
    $html = cURL_ping_html($url, $referer, $UA, $ch); // post action
    //echo $url.'\n';
    $failas2 = fopen(DOCROOT . "Gatve/$SeniunijosID.json", "w");;
    fwrite($failas2, $html[1]);
    fclose($failas2);

    $file2 = file_get_contents(DOCROOT . "Gatve/$SeniunijosID.json");
    $json2 = json_decode($file2, true);
    foreach ($json2 as $senID => $gatve) {
        $miestoInfo[$i]['gatves'][$senID]['name'] = $gatve['name'];
        $miestoInfo[$i]['gatves'][$senID]['id'] = $gatve['id'];
    }
}*/


/*
echo $file;

$json = json_decode($file, true);


$IDs = array();
foreach($json as $savivaldybesID => $seniunijos){
    $i = 0;
    $IDs[$o]['miestas'] = '';
    $IDs[$o]['id'] = $savivaldybesID;
    $miestoInfo = array();
    foreach ($seniunijos as $Rajonas){
        $miestoInfo[$i]['name'] = $Rajonas['name'];
        $miestoInfo[$i]['id'] = $Rajonas['id'];
        $i++;
    }
    $IDs[$o]['rajonai'] = $miestoInfo;
    $o++;
}

echo "Miestai[] \n\n";
print_r($miestoInfo);

echo "IDs[]\n";
print_r($IDs);
*/

/*foreach($json as $savivaldybesID => $seniunijos){
    $i = 0;
    $IDs[$o]['miestas'] = '';
    $IDs[$o]['id'] = $savivaldybesID;
    foreach ($seniunijos as $Rajonas){
        $miestai[$savivaldybesID][$i]['name'] = $Rajonas['name'];
        $miestai[$savivaldybesID][$i]['id'] = $Rajonas['id'];
        $i++;
    }
    $IDs[$o]['rajonai'] = $miestai[$savivaldybesID];
    $o++;
}*/