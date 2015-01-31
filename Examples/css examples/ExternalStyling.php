<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
<h1>This is a heading</h1>

<p>This is a paragraph.</p>

<div class="divClass">
    <p id="p01">
        This text is of <b>p id="p01"</b> class.
    </p>

    <p> This is a text of div class="divClass" only.</p>
</div>

<div class="code"><code><pre>
            <--TODO: add code for side show of code snippet--/>
<?php
$string = '
    h1 {
    color:blue;
    font-family:verdana;
    font-size:300%;
    }

    /* here p01 is id in <p id="p01"> */
    p#p01  {
    color:red;
    font-family:courier;
    font-size:160%;
    }

    /* here divClass is a class in <div class="divClass"> */
    div.divClass {
    color:darkmagenta;
    font-family:times;
    font-size:120%;
    }';
$htmlString = htmlentities($string);
echo $htmlString;
?>
    </pre>
    </code></div>
</body>

</html>