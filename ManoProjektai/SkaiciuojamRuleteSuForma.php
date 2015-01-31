<html xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTF-8">
    <style>
        .container {
            width: 500px;
            margin-top: 50px;;
            margin-left: auto;
            margin-right: auto;
        }

        .form {
            border: solid 1px;
            padding: 15px;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="form">
            <p>
                <!--<form action="<?php /*$_PHP_SELF */?>" method="post">-->
                <form action="../POST_Debug.php" method="post">
                    Lubos: <input name="lubos" value="<?php if(isset($_POST['lubos'])) { echo htmlentities($_POST['lubos']); }?>"/> <br />
                    Statymas: <input name="statymas" value="<?php if(isset($_POST['statymas'])) { echo htmlentities($_POST['statymas']); }?>"/> <br />
                    Bandymų skaičius: <input name="bandymuSkaicius" value="<?php if(isset($_POST['bandymuSkaicius'])) { echo htmlentities($_POST['bandymuSkaicius']); }?>"/> <br />
                    <input type="submit" />
                </form>
            </p>
        </div>

        <?php
            if (isset($_POST["lubos"])) {
                $iskrito = 0; // Dabar pasirodes skaitmuo
                $kelintuPavyko = array();
                $pasirinktas = 1; // Pasirinkta viena iš spalvų
                $statymas = $_POST["statymas"]; // Statomų pinigų bazinis dydis
                $lubos = $_POST["lubos"]; // Uždėtos lubos statymams
                $bandymuSkaicius = $_POST["bandymuSkaicius"];
                //echo "Pasirinktas $pasirinktas <br />";
                //echo "---------------------------<br />";


                function br(){
                    echo "<br />";
                }

                echo "Lubos nustatytos ties $lubos pinigų"; br(); br();

                $ikiLubu = 1;
                $sunaudota = $statymas;
                $dedamaAntStalo = $statymas;


                echo "Teorinė statymų lentelė:"; br();
                echo "1 statymo metu statoma $statymas pinigų. "; br();
                while ($dedamaAntStalo < $lubos) {

                    $dedamaAntStalo *= 2;
                    $ikiLubu++;
                    echo "$ikiLubu  statymo metu statoma $dedamaAntStalo. ";
                    $sunaudota += $dedamaAntStalo;
                    echo "Tai siekia jau $sunaudota pinigų lošime.";
                    if ($dedamaAntStalo > $lubos){
                        echo " Pasiektos lubos. ";
                    }
                    br();
                }

                $maxStatymasTeor = pow(2, $ikiLubu - 1) * $statymas;

                // Pradedame žaisti~
                $zaidimuSkaicius = 0;
                $uzdarbis = 0;
                while ($zaidimuSkaicius < $bandymuSkaicius) {
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
                $maxStatymas = pow(2, $maxReikejo - 1) * $statymas;

                br();
                $zaidSkModa = $zaidimuSkaicius % 10;
                /*echo $zaidSkModa . " - zaidimu skaiciaus moda "; br();
                echo var_dump($zaidSkModa); br();*/

                function zodisKartu() {

                    switch($zaidSkModa):
                        case 0:
                            return "kartų";
                            break;
                        case 1:
                            return "kartą";
                            break;
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                            return "kartus";
                            break;
                        default:
                    endswitch;
                }

                function zodisKartu2(){
                    if ($zaidSkModa > 1) {
                        echo "if is 0 = true";
                        return "kartų";
                    } else if ($zaidSkModa == 1) {
                        echo "if is 1 = true";
                        return "kartą";
                    } else if ($zaidSkModa == 0) {
                        echo "if is > 1 true";
                        return "kartus";
                    }
                }

                $zodisKartu = zodisKartu();

                if ($maxStatymas/2 <= $lubos){
                    echo '<p style="color:green">Sveikinu. Jūs sėkmingai sužaidėte ' . $zaidimuSkaicius . " $zodisKartu. Jūsų uždarbis yra <strong>$uzdarbis </strong>pinigų.</p> ";
                    echo "Luboms pasiekti būtų reikėję $ikiLubu kartų. Tai atitiktų $maxStatymasTeor pinigų statymą."; br();
                    echo "Didžiausias statymas buvo $maxStatymas pinigų, prireikė $maxReikejo ėjimų, kad gauti savo spalvą.";

                } else {
                    echo '<p style="color:red">Deja, per šį žaidimą jūs praradote savo pinigus.</p>';
                    echo "Lubos pasiekiamos po $ikiLubu kartų. Tai atitiktų $maxStatymasTeor pinigų statymą."; br();
                    echo "Būtų reikėję $maxStatymas pinigų, kad po $maxReikejo ėjimų būtumėte gavę savo spalvą.";
                }

                echo "<pre>";
                print_r($kelintuPavyko);
                echo "</pre><br />";

            }
        ?>
    </div>





</body>
</html>