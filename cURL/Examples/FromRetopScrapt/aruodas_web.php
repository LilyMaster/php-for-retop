<?
include_once 'simple_html_dom.php';
include_once 'functions.php';
$url = 'http://www.aruodas.lt/butu-nuoma/vilniuje?Page=';
$ref = 'http://www.aruodas.lt';
$client = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.8) Gecko/2009032609 Firefox/3.0.8'; 
$urls = array();
for($pg = 1; $pg <= 8; $pg++){
renew:
$tmp_url = $url . $pg;
$result = GetPage3($tmp_url,30);
if ($result[0] == "ok" && $result[2]['size_download'] >= 40) {
	print_r($result[2]);
	$html = str_get_html($result[1]);
	$data = $html->find("table.list-search",0);
	$data = $data->find("td.list-adress h3 a");
	foreach($data as $item){
		$urls[] =  strstr($item->href, '/?paieska=', true);
	}
	Status("Aruodas.lt","Reading Pages","8/". $pg);
} else {
echo "kazkas blogai \n";
print_r($result);
goto renew;
}
}
//print_r($urls);
check_urls_aruodas($urls);

function check_urls_aruodas($urls){
	$ppp = 0;
	$tot_pages = count($urls);
	foreach ($urls as $url){
		Status("Aruodas.lt","Running items",  $tot_pages . "/" . $ppp);
		$ppp++;
		$db = new PDO("mysql:host=localhost;dbname=webscrap", "webscrap", "spd025509");
		$hash = hash('crc32',$url,false);
		$qqq = "SELECT COUNT(Id) FROM items WHERE url_hash = '{$hash}';";
		$quer = $db->query($qqq);
		$count_id = $quer->fetchAll();
		$db = NULL;
        	if ($count_id[0][0] == 0){
			scrapt_status($hash,"checking...");
			grep_async($url,"aruodas_web_scrap.php");
		}
		Status("Aruodas.lt","Done",$tot_pages . "/" . $tot_pages);
	}
}
?>
