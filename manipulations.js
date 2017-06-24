var Emilie = {
    name: "Emilie",
    happy: "img/emi-happy.png",
    sad: "img/emi-sad.png",
    color: "#bad455"
};

var JSMonster = {
    name: "The Lord of Javascript",
    neutral: "img/js-neutral.png",
    threatning: "img/js-threatning.png",
    color: "#2444e2"
};

var BG = {
    room: "img/bg-room.png",
    hell: "img/bg-hell.png"

};

// ============================================
// =========== DOC READY !!!!!! ===============
// ============================================

$(document).ready(function() {

    var magicNum = 0;

    var path_a = false;
    var path_b = true;

    $('button').on('click', function() {
        // changer BG
        magicNum++;
        console.log(magicNum);

        // change le texte
        if (path_a) {
            textChange("text", "a");
        }
        if (magicNum > 4 && path_b) {
            textChange("text", "b");
            // changer persos
        } else {
            textChange("text", "");
        }

        // the changes in characters expressions must be made separated from the text as
        // they do not change together
        if (magicNum === 4 || magicNum === 3) {
            char1Change('img/emi-sad.png');
        } else {
            char1Change('img/emi-happy.png');
        }

    });

    var text_1 = "The text 1";
    var text_2 = "The text 2";
    var text_3 = "The text 3";
    var text_4 = "The text 4";

    var text_a4 = "The text a0";
    var text_a5 = "The text a1";
    var text_a6 = "The text a2";

    var text_b4 = "The text b0";
    var text_b5 = "The text b1";
    var text_b6 = "The text b2";

    function textChange(textPlaceHolder, path) {
        $("p").text(eval(textPlaceHolder + "_" + path + magicNum));
        console.log(textPlaceHolder + "_" + path + magicNum);
    }

    function char1Change(theImage) {
        $("#char1").attr('src', theImage);
    }



}); // end of doc ready