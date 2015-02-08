var advertisedisplayimages = "http://www.alio.lt/public/photos/display.html?id=51945273";
var advertiseswapimages = "http://www.alio.lt/public/photos/swap.html?id=51945273";

var $filequeue,
$filelist;

$(document).ready(function() {
    $filequeue = $(".filelist.queue");
    $filelist = $(".filelist.complete");

    $(".dropped").dropper({
    action: "http://www.alio.lt/public/photos/uploadifyupload.html?id=51945273",
    maxSize: 10485760
    }).on("start.dropper", onStart)
    .on("complete.dropper", onComplete)
    .on("fileStart.dropper", onFileStart)
    .on("fileProgress.dropper", onFileProgress)
    .on("fileComplete.dropper", onFileComplete)
    .on("fileError.dropper", onFileError);

    $(window).one("pronto.load", function() {
    $(".dropped").dropper("destroy").off(".dropper");
    });
    });

function onStart(e, files)
{
    var html = '';

    for (var i = 0; i < files.length; i++) {
    html += '<div data-index="' + files[i].index + '"><span class="file fl">' + files[i].name + '</span><span class="fr progress">Queued</span><div class="clr"></div></div>';
    }

    $filequeue.empty();
    $filequeue.append(html);
    }

function onComplete(e)
{

    $.ajax({ async: true, url: advertisedisplayimages }).done(function( data ) {
        if(data)
        {
            $("#photos_b").html(data);
            PhotoswapInitSwap();
        }
    });
    }

function onFileStart(e, file)
{
    $filequeue.find("div[data-index=" + file.index + "]")
        .find(".progress").text("0%");
    }

function onFileProgress(e, file, percent)
{
    $filequeue.find("div[data-index=" + file.index + "]")
        .find(".progress").text(percent + "%");
    }

function onFileComplete(e, file, response)
{
    var data_t = $.trim(response);
    var error_t = false;

    if(data_t == "internal")
    {
    error_t = 'Vidinė klaida. Pabandykite dar kartą įkelti nuotrauką.';
    }
    else if(data_t == "format")
    {
    error_t = 'Pasirinkto failo formatas yra netinkamas: ';
    }
    else if(data_t == "max_photos")
    {
    error_t = 'Galite įkelti ne daugiau 10 nuotraukų';
    }
    else if(data_t == "width")
    {
    error_t = file.name + ' ' + 'nuotrauka yra siauresnė nei 30px. Prašome įkelti platesnę nuotrauką.';
    }

    if(error_t)
    {
    $filequeue.find("div[data-index=" + file.index + "]").addClass("error-upload-image")
    .find(".progress").text("Klaida: " + error_t);
    }
    else
    {
    $filequeue.find("div[data-index=" + file.index + "]").remove();
    }


    }

function onFileError(e, file, error)
{
    $filequeue.find("div[data-index=" + file.index + "]").addClass("error-upload-image")
        .find(".progress").text("Klaida: " + error);
    }