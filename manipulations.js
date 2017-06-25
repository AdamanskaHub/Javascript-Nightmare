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

        switch (magicNum) {
            case 1:
                nameChange("Mosquito", '#fff');
                // char2Change("img/mosquito.png");
                break;
            case 2:
                bgChange(BG.room);
                js;
                txt;
                break;
            case 3:
                nameChange("Mosquito", '#fff');
                txt;
                break;
            case 4:
                $("#char2").fadeOut();
                nameChange(Emilie.name, Emilie.color);
                bgChange(BG.hell);
                char1Change(Emilie.grumpy);
                // char2Change("");
                break;
            case 5:
                char1Change(Emilie.surprised);
                nameChange(Emilie.name, Emilie.color);
                break;
            case 6:
                js;
                txt;
                break;
            case 7:
                js;
                txt;
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