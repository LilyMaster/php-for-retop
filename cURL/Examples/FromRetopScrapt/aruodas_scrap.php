<?
include_once 'simple_html_dom.php';
include_once 'functions.php';

$url = $_REQUEST['url'];
$client = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.8) Gecko/2009032609 Firefox/3.0.8';
$src = Top10();
renew:
$proxy = array();

for($i = 0 ; $i <= count($src)-1; $i++){
	$proxy[$i] = array($src[$i]['IP'] . ":" . $src[$i]['PORT'],$src[$i]['PROTO']);
}

$first = rand(0,count($src)-1);



$result = GetPage2($url,30,$client,$proxy[$first][0],$proxy[$first][1]);
if ($result[0] == "ok") {
        proxy_rate(explode(":",$proxy[$first][0]),true);
	//logging($url,$proxy[$first][0],"OK");
	$html = str_get_html($result[1]);
        $location = explode('%2C%20',rawurlencode($html->find("div#content h1",0)->innertext));
	$info = $html->find("table.info-tbl tbody tr");
} else {
    if($url == "/") return false;
$stat = proxy_rate(explode(":",$proxy[$first][0]),false);
if( $stat == false){$src = Top10();}
logging($url,$proxy[$first][0],"error-" . $result[1]);
goto renew;
}


$det = array();
$i = 0;
foreach($location as $place){
    $tm = "location_" . $i;
    $det[$tm] = $place;
    $i++;
}
$det['url'] = $url;
$det['url_hash'] = hash("crc32",$url,false);
$det['agent'] = "aruodas.lt";
$det['note'] = rawurlencode($html->find("div#content p",0)->innertext);
foreach($info as $detail){
    $tmp = explode(":",strip_tags($detail));
    $tmp[0] = trim($tmp[0]);
    $tmp[1] = trim($tmp[1]);
    switch($tmp[0]){
        case "Aukštas":
            $det['floor'] = $tmp[1];
            break;
        case "Kambarių skaičius":
            $det['rooms'] = $tmp[1];
            break;
        case "Metai":
            $det['years'] = $tmp[1];
            break;
        case "Telefonas":
            $det['phone'] = $tmp[1];
            break;
        case "Būklė":
            $det['state'] = $tmp[1];
            break;
        case "Įrengimas":
            $det['installation'] = $tmp[1];
            break;
        case "Namo tipas":
            $det['build_type'] = $tmp[1];
            break;
        case "Aukštų sk":
            $det['total_floor'] = $tmp[1];
            break;
        case "Objekto tipas":
            $det['item_type'] = $tmp[1];
            break;
        case "Plotas [m²]":
            $det['size'] = $tmp[1];
            break;
        case "Kaina":
            $det['price'] = $tmp[1];
            break;
        case "Šildymas":
            $det['warming'] = $tmp[1];
            break;
        case "El. paštas":
            $det['mail'] = $tmp[1];
            break;
        case "Internetinis adresas":
            $det['www'] = strtolower($tmp[1]);
            break;
        case "Skelbimo įvedimo data":
            $det['publish'] = $tmp[1];
            break;
        case "Skelbimo koregavimo data":
            $det['edit'] = $tmp[1];
            break;
        case "Skelbimas galioja iki":
            $det['valid'] = $tmp[1];
            break;
        }
}
logging($url,"parsed","-"); 
AddItem($det);
return true;

?>