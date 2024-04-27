

$(function () {
    
    //jointpoint.Page_Keypress_Operation()
    //jointpoint.hilit_point_related_files()
    $("body").on("keypress", function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        var cha = String.fromCharCode(code).toLowerCase()


        console.log("keypress:", cha)
        switch (cha) {
            case 'g':
            case 'G'://Grammarly Check wording.
            //body_append_jointlink(); break;
            //if(confirm("Grammarly Check wording for All?")){
                //$("*").attr("contenteditable", "true")
                //$("body").css("background-color","yellow")
            //}
            break;
        }
    })
}) 

function show_href(e) {
    if ($(e).text().trim().length === 0) {
        $(e).text($(e).attr("href")).append("<br></a></a><br>")
    }
}

function local_2_web_href(e) {
    var hrf = $(e).attr("href");
    //https://wdingbox.github.io/obilab/test1/ooTablesorter/all_pages_20perline_naturalcat.htm
    var rot = "../../../../../../../wdingbox/obilab/"
    var rep = "https://wdingbox.github.io/obilab/"
    if (hrf.indexOf(rot) === 0) {
        hrf = hrf.replace(rot, rep)
        $(e).attr("href", hrf)
    }
    return hrf
}













var jointpoint = {
    hilit_point_related_files: function () {
        const urlParams = new URLSearchParams(window.location.search);
        var fr = urlParams.get('fr');
        $("a").each(function () {
            //local_2_web_href(this)
            var hrf = $(this).attr("href")
            if (hrf && hrf.indexOf(fr) > 0) {
                $(this).addClass("relatedlink")
                $(this)[0].scrollIntoView()
            }
        })
        //////////////////
        $("a").each(function () {
            //local_2_web_href(this)
            show_href(this)
        })
        $("a").on("click", function () {
            $(".hili").removeClass("hili")
            $(this).addClass("hili")
        })
    },


    Page_Keypress_Operation: function () {
        function body_append_jointlink() {
            const urlParams = new URLSearchParams(window.location.search);
            var fr = urlParams.get('fr');
            var fname = window.location.pathname.split("/").reverse()[0]

            var url = `./jointpoint.htm?fr=${fname}`
            $("body").append(`<br><a id='AttachedLink' href='${url}'>${url}</a>`)
            $("#AttachedLink")[0].scrollIntoView()
        }


        ////key press 'e', to edit the page.
        $("body").on("keypress", function (e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            var cha = String.fromCharCode(code).toLowerCase()
            if (e.shiftKey && e.ctrlKey && cha === '\u0004') {
                var txt = $("html").html()
                var dnw = new uti_downloader()
                dnw.Donwload_Text("tt.htm", `<html>${txt}</html>`)
                alert()
            }

            console.log("keypress:", cha)
            switch (cha) {
                case 'J':
                case 'j':
                    body_append_jointlink(); break;
            }
        })
    }
}

