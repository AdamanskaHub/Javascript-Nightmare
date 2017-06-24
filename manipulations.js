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

    function bgChange(theBG) {

        // $(".main").
    }

    var magicNum = 0;

    $('button').on('click', function() {
        // je balance toutes les fonctions
        // changer BG
        // changer persos
        // change le texte
        magicNum++;
        textChange("text");
    });

    var text_1 = "The text 1";
    var text_2 = "The text 2";
    var text_3 = "The text 3";

    function textChange(textPlaceHolder) {
        $("p").text(eval(textPlaceHolder + "_" + magicNum));
        console.log(magicNum);
    }



});