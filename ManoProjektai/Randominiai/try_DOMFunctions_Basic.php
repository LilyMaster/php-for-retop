<?php

include_once ('simple_html_dom.php');

$html = str_get_html('
<html>
<body>
    <div class="Klase" id="ID" name="Vardas" value="Reiksme">
        foo <b>bar</b>
    </div>
</body>
</html>');

$string = '<form id="hello" name="pirkejas" value="vardas">Hello</form><div id="world">World</div>';
$web = '<form action="skelbimai.php" method=get name=formPaieska>
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
</form>';
$html = str_get_html($web);

$e = $html->find('form', 0);
$e->value = "rofl";
echo $e->value;
echo $e->outertext;