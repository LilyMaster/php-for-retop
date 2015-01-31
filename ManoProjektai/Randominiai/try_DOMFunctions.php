<?php

include_once ('simple_html_dom.php');
include_once ("cURL_MAIN_Functions.php");

//$http = '/Kapitalas_com_ButaiParduoda.html';

$url = 'http://kapitalas.com/butai/irasytiForm.php?skyrius=kambariai';
$client = getUA(); // Nustatome "User-Agent: "
$proxy = '';

$result = GetPage2($url, 30, $client, $proxy, $proxy);

/*$web = '<form action="skelbimai.php" method=get name=formPaieska>
<input type="hidden" name="skyrius" value="butai">
<input type="hidden" name="veiksmas" value="parduoda">
    <table border=0>
    <tr valign=middle>
    <td align=right nowrap>
    <select name=miestas onchange="Rajonas()">
    <option value="Visi" selected style="color: #0000aa">Visi miestai
        <option value="Vilnius">Vilnius
        <option value="Kaunas">Kaunas
        <option value="Klaip�da">Klaip�da
        <option value="Visi">
        <option value="Akmen�" >Akmen�
        <option value="Alytus" >Alytus
    </SELECT>
    <select name="kainanuo"><option value="0" selected style="color: #0000aa">� &nbsp;nuo
        <option value="1" >1
        <option value="3000" >3000
        <option value="10000" >10000
        <option value="20000" >20000
    </SELECT>
    <select name="kainaiki">
        <option value="999999999" selected style="color: #0000aa">� &nbsp;iki
        <option value="3000" >3000
        <option value="10000" >10000
        <option value="20000" >20000
    </SELECT>
    <select name=kambariai>
        <option value=999999999 selected style="color: #0000aa">Kambari�
        <option value=1 >1
        <option value=2 >2
        <option value=999999999>Visi
    </SELECT>
    <select name=medziaga>
        <option value="Visi" selected style="color: #0000aa">Med�iaga
        <option value="M�rinis">M�rinis
    </SELECT>
    </td>
    <td nowrap align=left>&nbsp;
    <input type=image src="images / buttonRasti . gif" width=57 height=16 border=0 alt="Atlikti paie�k�" title="Atlikti paie�k�">
    </td>
    </tr>
    <tr>
    <td colspan=2 align=left></td>
    </tr>
    </table>
</form>';*/

//$web = '<form id="hello" name="pirkejas" value="vardas">Hello</form><div id="world">World</div>';

if ($result[0] = "ok") {
    //echo "OK!: " . $result[1] . "<br />";
} else {
    echo "ERROR: <br />";
    echo $result[1];
}
//print_r($result[2]);
//$result[0] = "ok";

if ($result[0] == "ok") {
    $html = str_get_html($result[1]);
    //$myLoc = $html->find('form', 0);

    $skelbejas = $html->find('input[name=skelbejas]');
    if (!is_array($skelbejas)) {
        foreach($skelbejas as $value) {
            echo $value->outertext;
        }
    } else {
        echo $skelbejas[0]->outertext;
    }

    if (isset($skelbejas[0]->value)) {
        $skelbejoNr = $skelbejas[0]->value;
        echo $skelbejoNr;
    } else {
        echo "Nėra nurodyto vardo";
    }


/*    foreach($myLoc as $key) {
        $tmp = explode(":",strip_tags($key));
        var_dump($tmp);
        //echo $key . " as key and " . $value . " as value.";
    }*/

    //$pirkejoNr = $myLoc->value;

    // Galima ištrinti, kas yra viduje
    //$myLoc->innertext='';
    //echo $myLoc->outertext;

    //$location = explode('%2C%20', rawurlencode($html->find('form name="form1"', 0)->innertext));
    //$info = $html->find("table.info-tbl tbody tr");
}

//print_r($location);
//print_r(rawurldecode($html->find('<td align="left">', 0)));