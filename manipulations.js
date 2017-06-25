// ============================================
// ============== CHARACTERS ==================
// ============================================

var Emilie = {
    name: "Emilie",
    happy: "img/emi-happy.png",
    sad: "img/emi-sad.png",
    color: "#D893EE"
};

var JSMonster = {
    name: "The Lord of Javascript",
    neutral: "img/js-neutral.png",
    threatning: "img/js-threatning.png",
    color: "#93A4EE"
};

var Ajax = {
    name: "Ajax",
    neutral: "img/js-neutral.png",
    threatning: "img/js-threatning.png",
    color: "#93A4EE"
};

var Closure = {
    name: "Closure",
    neutral: "img/js-neutral.png",
    threatning: "img/js-threatning.png",
    color: "#93A4EE"
};

var RegEx = {
    name: "RegEx",
    neutral: "img/js-neutral.png",
    threatning: "img/js-threatning.png",
    color: "#93A4EE"
};

var BG = {
    room: "img/bg-room.png",
    hell: "img/bg-hell.png"

};

var sounds = {
    sleep: "img/bg-room.png",
    hell: "img/bg-hell.png",
    round1: "",
    round2: "",
    round3: "",
    final: ""
};

// ============================================
// =========== DOC READY !!!!!! ===============
// ============================================

$(document).ready(function() {

    var magicNum = 1;

    var path_a = false;
    var path_b = false;

    $('button').on('click', function() {

        magicNum++;
        console.log(magicNum);

        var js = nameChange(JSMonster.name, JSMonster.color);
        var txt = textChange("text", "");

        switch (magicNum) {
            case 2:
                nameChange(JSMonster.name, JSMonster.color);
                textChange("text", "");
                break;
            case 3:
                nameChange("Mosquito");
                textChange("text", "");
                break;
            case 4:
                nameChange(Emilie.name, Emilie.color);
                textChange("text", "");
                break;
            case 6:
                nameChange(JSMonster.name, JSMonster.color);
                textChange("text", "");
                break;
            case 7:
                nameChange(JSMonster.name, JSMonster.color);
                textChange("text", "");
                break;
            case 9:
                js;
                txt;
                break;
            case 11:
                js;
                txt;
                break;
            default:
                nameChange(Emilie.name, Emilie.color);
                textChange("text", "");
                break;
        }

        // the changes in characters expressions must be made separated from the text as
        // they do not change together
        switch (magicNum) {
            case 2:
                char1Change(Emilie.sad);
                break;
            case 3:
                char1Change(Emilie.sad);
                break;

            default:
                char1Change(Emilie.happy);
                break;
        }


        // Also separating the names as they do not change with images or text
        // but do change with colour
        // if (magicNum > 2 && magicNum < 6) {
        //     nameChange(JSMonster.name, JSMonster.color);
        // } else {
        //     nameChange(Emilie.name, Emilie.color);
        // }

        // The BG is also independant :/ Oh well...
        if (magicNum > 3) {
            bgChange(BG.hell);
        } else {
            bgChange(BG.room);
        }

    });

    function textChange(textPlaceHolder, path) {
        $("p").text(eval(textPlaceHolder + "_" + path + magicNum));
        // console.log(textPlaceHolder + "_" + path + magicNum);
    }

    function char1Change(theImage) {
        $("#char1").attr('src', theImage);
    }

    function nameChange(theName, theColor) {
        $("h3").text(theName);
        $("p").css("color", theColor);
        $("h3").css("color", theColor);
    }

    function bgChange(theBG) {
        $(".main").css("background-image", "url('" + theBG + "')");
    }



}); // end of doc ready