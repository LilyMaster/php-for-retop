<html>
<body>
    <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>

    <script>
        function main(){
            $('.btn').click(function(){
                $('.text-to-hide').toggle();
            });

            $('.text-to-hide').hide();
        }

        $(document).ready(main);
    </script>

    <style>
        body {
            background-color : lightcyan;
        }
        h1   {color:blue}
        p {
            padding: 5px;
        }

        .kodasVisada {
            font-family: Helvetica;
            font-size: medium;
        }

        .mainContainer {
            width: 800px;
            margin-left:auto;
            margin-right:auto;
        }

        .container {
            border: solid #1f628d 1px;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        .btn {
            background: #b2ffbb;
            background-image: -webkit-linear-gradient(top, #b2ffbb, #9bff69);
            background-image: -moz-linear-gradient(top, #b2ffbb, #9bff69);
            background-image: -ms-linear-gradient(top, #b2ffbb, #9bff69);
            background-image: -o-linear-gradient(top, #b2ffbb, #9bff69);
            background-image: linear-gradient(to bottom, #b2ffbb, #9bff69);
            -webkit-border-radius: 8;
            -moz-border-radius: 8;
            border-radius: 8px;
            font-family: Georgia;
            color: #050505;
            font-size: 16px;
            padding: 5px 20px 5px 20px;
            border: solid #1f628d 1px;
            text-decoration: none;
            width: 120px;
            text-align: center;
            margin-left:auto;
            margin-right:auto;
        }

        .btn:hover {
            background: #b1fc41;
            text-decoration: none;
        }
    </style>

<div class="mainContainer">
    <div class="btn" width="100px" align="center">Info...</div>

    <div class="container">
        <div class="text-to-hide">
            <?php
                echo 'Value of isset($_POST) is: ' . isset($_POST) . ' with $_POST itself: ' . $_POST;
                echo "<br />";
                //echo '$_POST[1] is equal to ' . !$_POST . "<br>";
                if (empty($_POST)) {
                    echo "The empty(\$_POST) returned true";
                } else {echo "The empty(\$_POST) returned false";}
                echo "<br>";
                echo '';
            ?>
        </div>
    </div>

    <div class="kodasVisada">
        <?php
            if (isset($_POST) && !empty($_POST)) {
                $postData = $_POST;
                echo '<pre>';
                print_r($postData);
                print_r($_FILES);
                echo '</pre>';

        ?>
    </div>
    <div class="container">
        <div class="text-to-hide"><p style="color:blue">';
            <?php
                foreach ($postData as $key => $value) {
                        echo "This POST contained " . $key . " as key and " . $value . " as value <br />";
                    }
                }
            ?>
        </div>
    </div>
</div>
</body>
</html>