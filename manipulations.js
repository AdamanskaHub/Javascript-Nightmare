// ============================================
// ============== CHARACTERS ==================
// ============================================

var Emilie = {
    name: "Emilie",
    happy: "img/emi-happy.png",
    sad: "img/emi-sad.png",
    grumpy: "img/emi-grumpy.png",
    surprised: "img/emi-surprised.png",
    sleeping: "img/emi-sleeping.png",
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

var mosquito = "img/mosquito.png";

var BG = {
    room: "img/bg-room.png",
    hell: "img/bg-hell.jpg"

};

var sounds = {
    sleep: "music/bg-room.png",
    hell: "music/bg-hell.png",
    round1: "",
    round2: "",
    round3: "",
    final: ""
};

// ============================================
// =========== DOC READY !!!!!! ===============
// ============================================

$(document).ready(function() {

    var magicNum = 0;

    var path_a = false;
    var path_b = false;

    $('button').on('click', function() {

        magicNum++;
        console.log(magicNum);

        var js = nameChange(JSMonster.name, JSMonster.color);
        var txt = textChange("text", "");
        var emi = nameChange(Emilie.name, Emilie.color);

        switch (magicNum) {
            case 1:
                nameChange("Mosquito", '#fff');
                char2Change("img/mosquito.png");
                break;
            case 2:
                bgChange(BG.room);
                nameChange(JSMonster.name, JSMonster.color);
                txt;
                break;
            case 3:
                nameChange("Mosquito", '#fff');
                txt;
                break;
            case 4:
                $("#char2").fadeOut();
                emi;
                bgChange(BG.hell);
                char1Change(Emilie.grumpy);
                // char2Change("");
                break;
            case 5:
                char1Change(Emilie.surprised);
                emi;
                break;
            case 6:
                nameChange(JSMonster.name, JSMonster.color);
                txt;
                char2Change(JSMonster.neutral);
                $("char2").fadeIn();
                break;
            case 7:
                nameChange(JSMonster.name, JSMonster.color);
                txt;
                break;
            case 9:
                nameChange(JSMonster.name, JSMonster.color);
                txt;
                break;
            case 11:
                nameChange(JSMonster.name, JSMonster.color);
                txt;
                break;
            case 14:
                $("#char2").addClass("border");
                txt;
                break;
            case 15:
                $("#char2").removeClass("border");
                txt;
                nameChange(JSMonster.name, JSMonster.color);
                break;
            case 16:
                txt;
                js;
                addButtons(
                    "About to tell me why I'm here and how I get out",
                    "Disgrace, hell, stuff like that"
                );
                $('#button1').on('click', function() {
                    path_a = true;
                    deleteButtons();
                });
                $('#button2').on('click', function() {
                    path_b = true;
                    deleteButtons;
                });
                break;
            case 17:
                nameChange(JSMonster.name, JSMonster.color);
                if (path_a) {
                    textChange("text", "a");
                } else if (path_b) {
                    textChange("text", "b");
                }
                break;
            case 18:
                js;
                txt;
                break;
            case 20:
                js;
                txt;
                break;
            case 21:
                js;
                txt;
                break;
            default:
                emi;
                textChange("text", "");
                break;
        }

    }); // click button next end

    // ================= THE FUNCTIONS ===================

    function textChange(textPlaceHolder, path) {
        $("p").text(eval(textPlaceHolder + "_" + path + magicNum));
        // console.log(textPlaceHolder + "_" + path + magicNum);
    }

    //function textillate() {
    // $('p').textillate({ in: { effect: 'rollIn' } });
    //}
    //textillate();

    function char1Change(theImage) {
        $("#char1").attr('src', theImage);
    }

    function char2Change(theImage) {
        $("#char2").attr('src', theImage);
        $("#char2").css("display", "block")
    }

    function nameChange(theName, theColor) {
        $("h3").text(theName);
        $("p").css("color", theColor);
        $("h3").css("color", theColor);
    }

    function bgChange(theBG) {
        $(".main").css("background-image", "url('" + theBG + "')");
    }

    // this locks me with two buttons, but in my case that's fine
    function addButtons(value1, value2) {
        var b1 = $("<button id='button1'>" + value1 + "</button>");
        $(".button-space").append(b1);
        var b2 = $("<button id='button1'>" + value1 + "</button>");
        $(".button-space").append(b2);
    }

    function deleteButtons() {
        $("#button1").delete();
        $("#button2").delete();
    }



}); // end of doc ready