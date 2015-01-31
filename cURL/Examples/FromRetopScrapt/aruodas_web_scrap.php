<?
include_once 'simple_html_dom.php';
include_once 'functions.php';
$url = $_REQUEST['url'];
//$url = "http://www.aruodas.lt/butu-nuoma-vilniuje-senamiestyje-subaciaus-g-puikus-4-kambariu-butas-per-2-aukstus--4-429402/";
$client = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.8) Gecko/2009032609 Firefox/3.0.8';
renew:
$result = GetPage3($url,30);
if ($result[0] == "ok") {
	$html = str_get_html($result[1]);
	$location_tmp = $html->find("div.main-content div.obj-cont h1",0)->innertext;
	$location = explode('%2C%20',rawurlencode($location_tmp)); // ", "
	$info_arr = $html->find("dl.obj-details dt");
	$info_arr2 = $html->find("dl.obj-details dd");
	$info2_arr = $html->find(".obj-contacts dl dt");
	$info2_arr2 = $html->find(".obj-contacts dl dd");
	$info = array();
	for ( $i = 0 ; $i <= count($info2_arr); $i++){
                $t = $info2_arr[$i]->innertext;
                if ($info2_arr[$i]->innertext =='<span class="icon-cont-phone"></span>') {$t = "Telefonas:";}
                if ($info2_arr[$i]->innertext =='<span class="icon-cont-home"></span>') {$t = "Internetinis adresas:";}
                if ($info2_arr[$i]->innertext =='<span class="icon-cont-mail"></span>') {$t = "Pastas:";}
                $ttt = $t . $info2_arr2[$i]->innertext;
                $info[] = $ttt;
        }
	for ( $i = 0 ; $i <= count($info_arr); $i++){
		$t = $info_arr[$i]->innertext;
		$ttt = $t . $info_arr2[$i]->innertext;
		$info[] = $ttt;
	}
} else {
    	if($url == "/") return false;
	goto renew;
}
//print_r($info);
$det = array();
$i = 0;
foreach($location as $place){
    $tm = "location_" . $i;
    $det[$tm] = str_replace("%09","",$place);
    $i++;
}
$det['url'] = $url;
$det['url_hash'] = hash("crc32",$url,false);
$det['agent'] = "aruodas.lt";
foreach($info as $detail){
	$tmp = explode(":",strip_tags($detail));
	//print_r($tmp);
	$prop = trim($tmp[0]);
	$val = trim($tmp[1]);
	switch($prop){
    		case "Aukštas":
        		$det['floor'] = $val;
        		break;
    		case "Kambarių sk.":
        		$det['rooms'] = $val;
        		break;
    		case "Metai":
       	 		$det['years'] = $val;
        		break;
    		case "Būklė":
        		$det['state'] = rawurlencode($val);
        		break;
    		case "Įrengimas":
        		$det['installation'] = rawurlencode($val);
            break;
    		case "Namo tipas":
        		$det['build_type'] = rawurlencode($val);
        		break;
    		case "Aukštų sk":
        		$det['total_floor'] = $val;
        		break;
    		case "Objekto tipas":
        		$det['item_type'] = rawurlencode($val);
        		break;
    		case "Plotas (m²)":
        		$det['size'] = $val;
        		break;
    		case "Kaina":
        		$det['price'] = trim(strstr($val, 'Lt', true));
        		break;
    		case "Šildymas":
        		$det['warming'] = rawurlencode($val);
        		break;
		case "Telefonas":
        		$det['phone'] = preg_replace('/[^0-9]/', '',$val);
        		break;
		case "Internetinis adresas":
        		$det['www'] = strtolower($val);
        		break;
		case "Pastas":
			$det['mail'] = strip_tags($val);
			break;
    		}
	}
//print_r($det);
AddItem($det);
return true;
?>
