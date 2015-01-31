<html xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
</head>
<body>



<form action="<?php $_PHP_SELF ?>" method="post">
    <input name="lubos">Lubos</input>
    <input name="statymas">Statymas</input>
</form>


















    <?php

    $iskrito; // Dabar pasirodes skaitmuo
    $kelintuPavyko = array();
    $pasirinktas = 1; // Pasirinkta viena iš spalvų
    $statymas = 0.1; // Statomų pinigų bazinis dydis
    $lubos = 500; // Uždėtos lubos statymams
    $bandymuSkaicius = 500;
    //echo "Pasirinktas $pasirinktas <br />";
    //echo "---------------------------<br />";


    function br(){
        echo "<br />";
    }

    echo "Lubos nustatytos ties $lubos pinigų"; br();

    $ikiLubu = 2;
    $sunaudota = $statymas;

    echo "1 statymo metu statoma $statymas pinigų. "; br();


    while ($sunaudota < $lubos) {

        $dedamaAntStalo = pow(2, $ikiLubu - 1) * $statymas;

        echo "$ikiLubu  statymo metu statoma $dedamaAntStalo. ";
        $sunaudota += $dedamaAntStalo;
        echo "Tai siekia jau $sunaudota pinigų lošime."; br();
        $ikiLubu++;
    }

    $maxStatymasTeor = pow(2, $ikiLubu - 2) * $statymas;

    $zaidimuSkaicius = 0;

    while ($zaidimuSkaicius < $bandymuSkaicius) {
        //echo "Ciklas Nr: $i <br />";pow(2, $ikiLubu - 3) * $statymas;
        $bandymoNr = 1;
        do {
            $iskrito = rand(0, 1);
            if ($iskrito == $pasirinktas ) {
                $kelintuPavyko[$bandymoNr]++;
                $uzdarbis += $statymas;
            }
            $bandymoNr++;
            $zaidimuSkaicius++;
        } while ($iskrito != $pasirinktas);
    };

    $maxReikejo = max(array_keys($kelintuPavyko));
    $maxStatymas = pow(2, $maxReikejo) * $statymas;

    br();
    echo "Sveikinu. Sužaidėte $zaidimuSkaicius kartų. Jūsų uždarbis yra $uzdarbis pinigų. "; br();
    echo "Luboms pasiekti būtų reikėję $ikiLubu kartu. Tai atitiktų $maxStatymasTeor pinigų statymą."; br();
    echo "Didžiausias statymas buvo $maxStatymas pinigų, prireikė $maxReikejo ėjimų, kad gauti savo spalvą.";
    echo "<pre>";
    print_r($kelintuPavyko);
    echo "</pre><br />";


    ?>






</body>
</html>