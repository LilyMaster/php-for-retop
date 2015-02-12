function numericBind(objects)
{
    var ctrlDown = false;
    var ctrlKey = 17, vKey = 86, cKey = 67, zKey = 90, xKey = 88;

    //console.log("numericBind");

    objects.live('keydown', function(event)
    {
        //console.log("NumericBind keydown: " + event.keyCode);
        var shifted = event.shiftKey;

        if (event.keyCode == ctrlKey) ctrlDown = true;

        if (ctrlDown && (event.keyCode == vKey || event.keyCode == cKey || event.keyCode == zKey || event.keyCode == xKey ))
        {
        }
        else
        {
            // Allow: backspace, delete, tab and escape
            if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                    // Allow: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) ||
                    // Allow: Ctrl+R
                (event.keyCode == 82 && event.ctrlKey === true) ||
                    // Allow: home, end, left, right
                (event.keyCode >= 35 && event.keyCode <= 39))
            {
                // let it happen, don't do anything
                return;
            }

            else if((shifted && event.keyCode == 187) || (event.keyCode == 107))
            {
                return;
            }

            //numbers
            else if(((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) && !event.shiftKey )
            {
                return;
            }
            else
            {
                event.preventDefault();
            }
        }

    }).live('keyup', function(event)
    {
        if (event.keyCode == ctrlKey) ctrlDown = false;
    });
}

function numericDotBind(objects)
{
    var ctrlDown = false;
    var ctrlKey = 17, vKey = 86, cKey = 67, zKey = 90, xKey = 88;

    //console.log("numericDotBind");

    objects.live('keydown', function(event)
    {
        //console.log("NumericDotBind keydown: " + event.keyCode);
        var shifted = event.shiftKey;

        if (event.keyCode == ctrlKey) ctrlDown = true;

        if (ctrlDown && (event.keyCode == vKey || event.keyCode == cKey || event.keyCode == zKey || event.keyCode == xKey ))
        {
        }
        else
        {
            // Allow: backspace, delete, tab and escape, dot
            if(event.keyCode == 190 || event.keyCode == 110)
            {
                return;
            }
            else if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                    // Allow: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) ||
                    // Allow: Ctrl+R
                (event.keyCode == 82 && event.ctrlKey === true) ||
                    // Allow: home, end, left, right
                (event.keyCode >= 35 && event.keyCode <= 39))
            {
                // let it happen, don't do anything
                return;
            }

            else if((shifted && event.keyCode == 187) || (event.keyCode == 107))
            {
                return;
            }

            //numbers
            else if(((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) && !event.shiftKey )
            {
                return;
            }
            else
            {
                event.preventDefault();
            }
        }

    }).live('keyup', function(event)
    {
        if (event.keyCode == ctrlKey) ctrlDown = false;
    });
}


function alphanumericBind(objects)
{
    var ctrlDown = false;
    var ctrlKey = 17, vKey = 86, cKey = 67, zKey = 90, xKey = 88;

    //console.log("alphanumericBind");

    objects.keydown(function(event)
    {
        //console.log("AlphanumericBind keydown: " + event.keyCode);

        var shifted = event.shiftKey;
        if (event.keyCode == ctrlKey) ctrlDown = true;

        if (ctrlDown && (event.keyCode == vKey || event.keyCode == cKey || event.keyCode == zKey || event.keyCode == xKey ))
        {
        }
        else
        {
            if(event.keyCode == 190 || event.keyCode == 110)
            {
                return;
            }
            else if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
                    // Allow: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) ||
                    // Allow: Ctrl+R
                (event.keyCode == 82 && event.ctrlKey === true) ||
                    // Allow: home, end, left, right
                (event.keyCode >= 35 && event.keyCode <= 39))
            {
                // let it happen, don't do anything
                return;
            }

            //32 - space
            else if((shifted && event.keyCode == 187) || (event.keyCode == 107) || event.keyCode == 32)
            {
                return;
            }

            //numbers
            else if(((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 95 && event.keyCode < 106)) && !event.shiftKey )
            {
                return;
            }
            //characters
            else if(
                (
                (event.keyCode >= 65 && event.keyCode <= 90) || // A-Z
                (event.keyCode >= 97 && event.keyCode <= 122)
                )
                &&
                (
                event.keyCode != 111
                && event.keyCode != 109
                && event.keyCode != 106
                )
            )
            {
                return;
            }
            else
            {
                event.preventDefault();
            }

        }

    }).keyup(function(event)
    {
        if (event.keyCode == ctrlKey) ctrlDown = false;
    });
}



$(document).ready(function()
{
    $("#main_data_n_b_advertise").mouseover(function()
    {
        $("#main_data_n_b_advertise_hints").show();
    }).mouseout(function()
    {
        $("#main_data_n_b_advertise_hints").hide();
    });

    $("#main_data_more_n_b_advertise").mouseover(function()
    {
        $("#main_data_more_n_b_advertise_hints").show();
    }).mouseout(function()
    {
        $("#main_data_more_n_b_advertise_hints").hide();
    });
});