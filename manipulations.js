// ============================================
// =========== DOC READY !!!!!! ===============
// ============================================

var currentScene = 0;

var path_3a, path_3b = false;
// I need those

$(document).ready(function() {

    $('button').on('click', function() {

        currentScene++;
        // console.log("Button clicked", currentScene);

        changeScene(currentScene);

    });

});

function changeScene(sceneNumber) {
    currentScene = sceneNumber;
    console.log("changing scene to ", sceneNumber);

    switch (sceneNumber) {
        case 1:
            // ==================

            // djPlayThatSong(sounds.round1, 10000, 0);

            // ==================
            textChange();
            nameChange("Mosquito", '#fff');
            char2Change("img/mosquito.png");
            break;
        case 2:
            bgChange(BG.room);
            nameChange(JSMonster.name, JSMonster.color);
            textChange();
            break;
        case 3:
            nameChange("Mosquito", '#fff');
            textChange();
            break;
        case 4:
            bgChange(BG.hell);
            $("#char2").fadeOut();
            $(".main").effect("shake");
            nameChange(Emilie.name, Emilie.color);
            bgChange(BG.hell);
            char1Change(Emilie.grumpy);
            textChange();
            // char2Change("");
            break;
        case 5:
            bgChange(BG.hell);
            char1Change(Emilie.surprised);
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 6:
            nameChange(JSMonster.name, JSMonster.color);
            textChange();
            char2Change(JSMonster.smile);
            $("char2").fadeIn(2000);
            break;
        case 7:
            nameChange(JSMonster.name, JSMonster.color);
            textChange(undefined, 3);
            char1Change(Emilie.suspicious);
            break;
        case 8:
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 9:
            nameChange(JSMonster.name, JSMonster.color);
            char2Change(JSMonster.neutral);
            textChange();
            break;
        case 10:
            nameChange(Emilie.name, Emilie.color);
            char1Change(Emilie.no);
            textChange();
            break;
        case 11:
            nameChange(JSMonster.name, JSMonster.color);
            char1Change(Emilie.suspicious);
            textChange();
            break;
        case 12:
            nameChange(Emilie.name, Emilie.color);
            char1Change(Emilie.wtf);
            textChange();
            break;
        case 13:
            nameChange(Emilie.name, Emilie.color);
            char1Change(Emilie.yes);
            textChange();
            break;
        case 14:
            $("#char2").addClass("border");
            textChange();
            break;
        case 15:
            char2Change(JSMonster.rage);
            char1Change(Emilie.no);
            $("#char2").removeClass("border");
            textChange(undefined, 2);
            nameChange(JSMonster.name, JSMonster.color);
            break;
        case 16:
            textChange();
            char1Change(Emilie.suspicious);
            char2Change(JSMonster.neutral);
            nameChange(JSMonster.name, JSMonster.color);
            addButtons("About to tell me how I get out", "Disgrace, hell, stuff like that");
            $("#next").hide();
            setSceneListeners();
            break;

        case 17:
            nameChange(JSMonster.name, JSMonster.color);
            break;

        case 18:
            nameChange(JSMonster.name, JSMonster.color);
            textChange();
            break;
        case 19:
            char1Change(Emilie.wtf);
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 20:
            nameChange(JSMonster.name, JSMonster.color);
            char2Change(JSMonster.rage);
            textChange();
            break;
        case 21:
            nameChange(JSMonster.name, JSMonster.color);
            char2Change(JSMonster.smile);
            char1Change(Emilie.sad);
            textChange();
            break;
        case 23:
            nameChange(JSMonster.name, JSMonster.color);
            char2Change(JSMonster.neutral);
            textChange();
            break;
        case 24:
            char1Change(Emilie.wtf);
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 25:
            nameChange(JSMonster.name, JSMonster.color);
            char2Change(JSMonster.smile);
            char1Change(Emilie.suspicious);
            textChange(undefined, 1.5);
            break;
        case 26:
            nameChange(JSMonster.name, JSMonster.color);
            textChange(undefined, 2);
            break;
        case 27:
            nameChange(JSMonster.name, JSMonster.color);
            textChange(undefined, 3);
            char1Change(Emilie.scream);
            $(".char2").effect("bounce", { times: 28, distance: 10 }, 4000);
            break;
        case 28:
            nameChange(Emilie.name, Emilie.color);

            textChange(undefined, 2);
            break;
        case 29:
            nameChange(JSMonster.name, JSMonster.color);
            textChange(undefined, 2);
            $(".char2").effect("bounce", { times: 12, distance: 10 }, 2000);
            break;
        case 30:
            nameChange(Emilie.name, Emilie.color);
            char1Change(Emilie.thinking);
            textChange();
            break;
        case 32:
            nameChange(JSMonster.name, JSMonster.color);
            textChange();
            char1Change(Emilie.nope);
            $(".char2").fadeOut();
            break;
        case 33:
            char2Change(Ajax.sexy);
            $(".char2").fadeIn();
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 34:
            char1Change(Emilie.point);
            textChange();
            nameChange(Emilie.name, Emilie.color);
            break;
        case 35:
            nameChange(Ajax.name, Ajax.color);
            char2Change(Ajax.rage);
            textChange();
            break;
        case 36:
            nameChange(Ajax.name, Ajax.color);
            char2Change(Ajax.sexy);
            textChange();
            break;
        case 37:
            nameChange(Ajax.name, Ajax.color);
            char1Change(Emilie.wtf);
            char2Change(Ajax.sexy);
            textChange();
            break;
        case 38:
            char1Change(Emilie.point);
            char2Change(Ajax.nope);
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 39:
            nameChange(Ajax.name, Ajax.color);
            char2Change(Ajax.nope);
            textChange();
            break;
        case 41:
            char1Change(Emilie.wtf);
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 42:
            nameChange(Ajax.name, Ajax.color);
            char2Change(Ajax.smirk);
            textChange();
            break;
        case 43:
            char1Change(Emilie.no);
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 44:
            nameChange(Ajax.name, Ajax.color);
            char2Change(Ajax.smirk);
            char1Change(Emilie.thinking);
            textChange();
            addButtons("Rock", "Paper", "Scissors");
            $("#next").hide();
            setSceneListeners();
            break;

        case 45:
            nameChange(Ajax.name, Ajax.color);
            char1Change(Emilie.scream);
            break;
        case 46:
            nameChange(Ajax.name, Ajax.color);
            char2Change(Ajax.smirk);
            textChange();
            break;
        case 47:
            nameChange(Emilie.name, Emilie.color);
            char1Change(Emilie.point);
            textChange();
            break;
        case 48:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 49:
            nameChange(Ajax.name, Ajax.color);
            char1Change(Emilie.thinking);
            textChange();
            addButtons("Smash some scissors", "Wrap some rocks",
                "Cut some paper");
            $("#next").hide();
            setSceneListeners();
            break;

        case 50:
            nameChange(Ajax.name, Ajax.color);

            console.log(musicScore);
            break;
        case 51:
            nameChange(Emilie.name, Emilie.color);
            char1Change(Emilie.scream);
            char2Change(Ajax.smirk);
            $(".char1").effect("shake");
            textChange(undefined, 2.5);
            break;
        case 52:
            nameChange(Ajax.name, Ajax.color);
            char2Change(Ajax.sexy);
            textChange();
            break;
        case 53:
            nameChange(Emilie.name, Emilie.color);
            char2Change(Ajax.sexy);
            char1Change(Emilie.point);
            textChange();
            break;
        case 54:
            nameChange(Ajax.name, Ajax.color);
            char2Change(Ajax.nope);
            textChange();
            break;
        case 55:
            nameChange(Emilie.name, Emilie.color);
            textChange(undefined, 2);
            break;
        case 56:
            nameChange(Ajax.name, Ajax.color);
            char2Change(Ajax.angry);
            textChange();
            break;
        case 57:
            nameChange(Voice.name, Voice.color);
            textChange();
            break;
        case 58:
            textChange();
            char1Change(Emilie.idea);
            addButtons("Slide into oblivion!",
                "Fade the hell out of him");
            $("#next").hide();
            $('#button1').on('click', function() {
                { path_3a = true; }
                deleteButtons(button1, button2);
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { path_3b = true; }
                deleteButtons(button1, button2);
                $("#next").show();
            });
            break;
        case 59:
            char1Change(Emilie.ok);
            nameChange(Ajax.name, Ajax.color);
            char2Change(Ajax.rage);
            if (path_3a) {
                $('.char2').animate({ marginRight: "-1000px" }, 1500);
                textChange("a");
            } else if (path_3b) {
                textChange("b");
                $('.char2').fadeOut("slow");
            }
            break;
        case 61:
            char2Change(Closure.neutral);
            char1Change(Emilie.nope);
            if (path_3a) {
                $(".char2").animate({ marginRight: "0px" }, 1500);
            } else if (path_3b) {
                $(".char2").fadeIn("slow");
            }
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 62:
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 63:
            nameChange(Emilie.name, Emilie.color);
            char1Change(Emilie.ok);
            textChange();
            break;
        case 65:
            char2Change(Closure.smile);
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 66:
            char2Change(Closure.mic);
            char1Change(Emilie.yes);
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 68:
            nameChange(Closure.name, Closure.color);
            char1Change(Emilie.ok);
            textChange();
            break;
        case 69:
            djPlayThatSong(sounds.pop, 10000, 33);
            char2Change(Closure.smile);
            char1Change(Emilie.thinking);
            nameChange(Closure.name, Closure.color);
            textChange();
            songChoice("Pop - N'sync", "Britney Spears - Slave 4 u",
                "BackstreetBoys - Everybody");
            repeatButton("I need to listen to it again");
            $("#next").hide();
            setSceneListeners();
            break;
        case 70:
            nameChange(Closure.name, Closure.color);
            break;
        case 71:
            console.log(musicScore);
            char2Change(Closure.mic);
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 72:
            djPlayThatSong(sounds.scandalous, 9000, 3);
            char2Change(Closure.smile);
            char1Change(Emilie.thinking);
            nameChange(Closure.name, Closure.color);
            textChange();
            songChoice("Mya - Case of the ex", "Ciara - Like a boy",
                "Miss Teeq - Scandalous", "'One more time'");
            $("#next").hide();
            setSceneListeners();
            break;
        case 73:
            nameChange(Closure.name, Closure.color);
            break;
        case 74:
            console.log(musicScore);
            char2Change(Closure.mic);
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 75:
            djPlayThatSong(sounds.queen, 12000, 0);
            char2Change(Closure.smile);
            char1Change(Emilie.thinking);
            nameChange(Closure.name, Closure.color);
            textChange();
            songChoice("Destiny's Child - Independant woman",
                "Tony Braxton - He wasn't man enough",
                "Whitney Houston - Queen of the night",
                "'Again please'");
            $("#next").hide();
            setSceneListeners();
            break;
        case 76:
            nameChange(Closure.name, Closure.color);
            break;

        case 77:
            console.log(musicScore);
            char2Change(Closure.mic);
            char1Change(Emilie.wtf);
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 78:
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;

        case 79:
            djPlayThatSong(sounds.vogue, 8000, 17);
            char2Change(Closure.smile);
            nameChange(Closure.name, Closure.color);
            textChange();
            songChoice("Natalie Imbruglia - Torn",
                "Madonna - Vogue",
                "Freeland - Borderline",
                "'Again please'");
            $("#next").hide();
            setSceneListeners();
            break;
        case 80:
            nameChange(Closure.name, Closure.color);
            break;
        case 81:
            console.log(musicScore);
            char2Change(Closure.neutral);
            char1Change(Emilie.ok);
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 82:
            nameChange(Closure.name, Closure.color);
            char2Change(Closure.neutral);
            textChange();
            break;

        case 83:
            nameChange(Closure.name, Closure.color);
            if (musicScore <= 2) {
                textChange("a");
                char2Change(Closure.wtf);
                char1Change(Emilie.sad);
            }
            if (musicScore === 3) {
                textChange("b");
                char2Change(Closure.neutral);
                char1Change(Emilie.ok);
            }
            if (musicScore === 4) {
                textChange("c");
                char2Change(Closure.smile);
                char1Change(Emilie.yes);
            }
            break;
        case 84:
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 85:
            nameChange(Closure.name, Closure.color);
            char2Change(Closure.neutral);
            char1Change(Emilie.ok);
            textChange();
            break;
        case 86:
            nameChange(Closure.name, Closure.color);
            char2Change(Closure.smile);
            $('.char2').animate({ marginRight: "-1000px" }, 1500);
            textChange();
            break;
        case 87:
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 88:

        case 89:
            nameChange(RegEx.name, RegEx.color);
            char2Change(RegEx.smile);
            char1Change(Emilie.nope);
            $('.char2').animate({ marginRight: "0px" }, 1500);
            textChange();
            break;
        case 90:
            nameChange(RegEx.name, RegEx.color);
            textChange();
            addButtons("Finally, bring it.", "RegEx! Oh no... That's just too hard...");
            $("#next").hide();
            setSceneListeners();
            break;
        case 91:
            nameChange(RegEx.name, RegEx.color);
            char2Change(RegEx.smile);
            break;
        case 92:
            nameChange(RegEx.name, RegEx.color);
            char1Change(Emilie.neutral);
            textChange();
            break;
        case 93:
            nameChange(Emilie.name, Emilie.color);
            char1Change(Emilie.sad);
            textChange();
            break;
        case 94:
            nameChange(RegEx.name, RegEx.color);
            char2Change(RegEx.cool);
            textChange();
            addButtons("POOL", "ROAM", "DEAN", "WORD", "COPY", "FEND", "FOES", "DIED", "TIES");
            $("#next").hide();
            setSceneListeners();
            break;
        case 95:
            nameChange(RegEx.name, RegEx.color);
            textChange();
            break;
        case 96:
            nameChange(RegEx.name, RegEx.color);
            char2Change(RegEx.smile);
            textChange();
            break;
        case 97:
            nameChange(RegEx.name, RegEx.color);
            textChange();
            break;
        case 98:
            nameChange(RegEx.name, RegEx.color);
            textChange();
            break;
        case 99:
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 100:
            nameChange(RegEx.name, RegEx.color);
            textChange();
            break;
        case 101:
            nameChange(RegEx.name, RegEx.color);
            textChange();
            addButtons("SENDING", "SETTING", "WARRIOR", "OFFLINE", "WRITING", "WARNING", "TESTING", "ACQUIRE", "WELCOME");
            $("#next").hide();
            setSceneListeners();

            break;
        case 102:
            nameChange(RegEx.name, RegEx.color);
            char2Change(RegEx.cool);
            textChange();
            break;
        case 103:
            nameChange(RegEx.name, RegEx.color);
            char2Change(RegEx.smile);
            textChange();
            break;
        case 104:
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 105:
            nameChange(RegEx.name, RegEx.color);
            textChange();
            break;
        case 106:
            nameChange(RegEx.name, RegEx.color);
            char2Change(RegEx.angry);
            textChange();
            addButtons("Yes! (I don't want to end here again!)", "I will. I'll make a Javascript alarm clock with cute animals!", "Nope. Jquery is the only thing I'm willing to use.");
            $("#next").hide();
            setSceneListeners();
            break;
        case 107:
            nameChange(RegEx.name, RegEx.color);
            break;




            // ==================================
            // ========== GAME OVER =============
        case 200:
            nameChange(RegEx.name, RegEx.color);
            textChange();
            char2Change(RegEx.cool);
            deleteButtons(button1, button2, button3, button4, button5, button6, button7, button8, button9);
            $("#next").show();
            break;
        case 201:
            // $("index.html").
            window.location.href = "gameover.html";
            break;

        case 300:
            nameChange(RegEx.name, RegEx.color);
            textChange();
            char2Change(RegEx.angry);
            deleteButtons(button1, button2, button3);
            $("#next").show();
            break;
        case 301:
            // $("index.html").
            window.location.href = "gameover.html";
            break;



        default:
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
    }

}


// ===================================================
// ================= THE FUNCTIONS ===================
// ===================================================

function textChange(path, fontSize) {
    if (path === undefined) {
        path = "";
    }

    if (fontSize === undefined) {
        $("p").css("font-size", "1.25em");
    } else {
        $("p").css("font-size", fontSize + "em");
    }

    $("p").text(texts["text_" + path + currentScene]);
    // console.log(textPlaceHolder + "_" + path + currentScene);
}

function textChangeSpecial(path, scene) {
    if (path === undefined) {
        path = "";
    }

    console.log('====');
    console.log('scene PASSING TO TEXTCHANGESPECIAL');
    console.log(scene);
    console.log('====');
    $("p").text(texts["text_" + path + scene]);
    // console.log(textPlaceHolder + "_" + path + currentScene);
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
    $("#char2").css("display", "block");
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
function addButtons() {
    for (i = 1; i < arguments.length + 1; i++) {
        var button = $("<button id='button" + i + "'>" + arguments[i - 1] + "</button>");
        $(".button-space").append(button);
    }
}

function songChoice(v1, v2, v3, v4) {
    var b1 = $("<button id='button1'>" + v1 + "</button>");
    $(".button-space").append(b1);
    var b2 = $("<button id='button2'>" + v2 + "</button>");
    $(".button-space").append(b2);
    var b3 = $("<button id='button3'>" + v3 + "</button>");
    $(".button-space").append(b3);
}

function repeatButton(text) {
    var b4 = $("<button id='buttonx'>" + text + "</button>");
    $(".text-content").append(b4);
}

function deleteButtons() {
    for (i = 1; i < arguments.length + 1; i++) {
        $("#button" + i).remove();
    }
}

function deleteRepeat() {
    $("#buttonx").remove();
}

function nextOff() {
    $("#next").css('pointer-events', 'none');
}

function music(soundFile) {
    soundFile.play();
}

function djPlayThatSong(song, time, startPos) {
    var audio = document.createElement('audio');
    audio.src = song;
    audio.play();
    audio.pause();
    audio.currentTime = startPos;
    audio.play();
    setTimeout(function() {
        audio.pause();
        audio.currentTime = 0;
    }, time);
}

// function countingWords(theWord) {
//     if (theWord < 2) {
//         theWord++;
//         console.log("word = " + theWord);
//         return theWord;
//     }
// }

function gertrude(thePath) {
    wordOne++;
    console.log("gertrude = " + wordOne);
    if (wordOne < 3) {
        //wordOne = countingWords(wordOne);

        console.log("Plus petit et augmente = " + wordOne);
        textChangeSpecial(thePath, 95);
    } else {
        changeScene(200);
    }
}

function martha(thePath) {
    wordTwo++;
    if (wordTwo < 3) {
        //wordTwo = countingWords(wordTwo);
        textChangeSpecial(thePath, 101);
    } else {
        changeScene(200);
    }
}