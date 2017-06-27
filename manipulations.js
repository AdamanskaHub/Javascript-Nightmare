// ============================================
// =========== DOC READY !!!!!! ===============
// ============================================

var currentScene = 0;

var path_a, path_b, path_1a, path_1b, path_1c,
    path_2a, path_2b, path_2c,
    path_3a, path_3b, song_1, song_2, song_3, song_3x = false;

$(document).ready(function() {



    $('button').on('click', function() {

        currentScene++;
        // console.log("Button clicked", currentScene);

        changeScene(currentScene);

    }); // click button next end

});

function changeScene(sceneNumber) {
    currentScene = sceneNumber;
    console.log("changing scene to ", sceneNumber);

    switch (sceneNumber) {
        case 1:
            // ==================
            // djPlayThatSong(sounds.round1, 10000)
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
        case 11:
            nameChange(JSMonster.name, JSMonster.color);
            textChange();
            break;
        case 14:
            $("#char2").addClass("border");
            textChange();
            break;
        case 15:
            char2Change(JSMonster.rage);
            $("#char2").removeClass("border");
            textChange(undefined, 2);
            nameChange(JSMonster.name, JSMonster.color);
            break;
        case 16:
            textChange();
            char2Change(JSMonster.neutral);
            nameChange(JSMonster.name, JSMonster.color);
            addButtons("About to tell me how I get out", "Disgrace, hell, stuff like that");
            $("#next").hide();
            $('#button1').on('click', function() {
                { path_a = true; }
                console.log("a = " + path_a);
                // currentScene++;
                console.log(currentScene);
                deleteButtons(button1, button2);
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { path_b = true; }
                deleteButtons(button2, button1);
                $("#next").show();
            });
            // I'm not clicking next and can't increase my count!
            break;

        case 17:
            nameChange(JSMonster.name, JSMonster.color);
            if (path_a) {
                textChange("a");
            } else if (path_b) {
                textChange("b");
            }
            break;

        case 18:
            nameChange(JSMonster.name, JSMonster.color);
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
            textChange();
            break;
        case 23:
            nameChange(JSMonster.name, JSMonster.color);
            char2Change(JSMonster.neutral);
            textChange();
            break;
        case 25:
            nameChange(JSMonster.name, JSMonster.color);
            char2Change(JSMonster.smile);
            textChange(undefined, 1.5);
            break;
        case 26:
            nameChange(JSMonster.name, JSMonster.color);
            textChange(undefined, 2);
            break;
        case 27:
            nameChange(JSMonster.name, JSMonster.color);
            textChange(undefined, 3);
            $(".char2").effect("bounce", { times: 16, distance: 10 }, 2000);
            break;
        case 28:
            nameChange(Emilie.name, Emilie.color);

            textChange(undefined, 2);
            break;
        case 29:
            nameChange(JSMonster.name, JSMonster.color);
            textChange(undefined, 2);
            $(".char2").effect("bounce", { times: 8, distance: 10 }, 1000);
            break;
            break;
        case 30:
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 32:
            nameChange(JSMonster.name, JSMonster.color);
            textChange();
            $(".char2").fadeOut();
            break;
        case 33:
            char2Change(Ajax.neutral);
            $(".char2").fadeIn();
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 35:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 37:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 39:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 42:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 44:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            addButtons("Rock", "Paper", "Scissors");
            $("#next").hide();
            $('#button1').on('click', function() {
                { path_1a = true; }
                deleteButtons(button1, button2, button3);
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { path_1b = true; }
                deleteButtons(button1, button2, button3);
                $("#next").show();
            });
            $('#button3').on('click', function() {
                { path_1c = true; }
                deleteButtons(button1, button2, button3);
                $("#next").show();
            });
            break;

        case 45:
            nameChange(Ajax.name, Ajax.color);
            if (path_1a) {
                textChange("a");
            } else if (path_1b) {
                textChange("b");
            } else if (path_1c) {
                textChange("c");
            }
            break;
        case 46:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 47:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 49:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            addButtons("Smash some scissors", "Wrap some rocks",
                "Cut some paper");
            $("#next").hide();
            $('#button1').on('click', function() {
                { path_2a = true; }
                deleteButtons(button1, button2, button3);
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { path_2b = true; }
                deleteButtons(button1, button2, button3);
                $("#next").show();
            });
            $('#button3').on('click', function() {
                { path_2c = true; }
                deleteButtons(button1, button2, button3);
                $("#next").show();
            });
            break;

        case 50:
            nameChange(Ajax.name, Ajax.color);
            if (path_2a) {
                textChange("a");
            } else if (path_2b) {
                textChange("b");
            } else if (path_2c) {
                textChange("c");
            }
            break;
        case 51:
            $(".char1").effect("shake");
            textChange(undefined, 2.5);
            break;
        case 52:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 54:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 55:
            textChange(undefined, 2);
            break;
        case 56:
            nameChange(Ajax.name, Ajax.color);
            textChange();
            break;
        case 57:
            nameChange(Voice.name, Voice.color);
            textChange();
            break;
        case 58:
            textChange();
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
            nameChange(Ajax.name, Ajax.color);
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
        case 65:
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 66:
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 68:
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 69:
            djPlayThatSong(sounds.pop, 10000);
            nameChange(Closure.name, Closure.color);
            textChange();
            songChoice("Pop - N'sync", "Britney Spears - Slave 4 u",
                "BackstreetBoys - Everybody", "'I need to listen to it again'");
            $("#next").hide();
            $('#button1').on('click', function() {
                { song_1 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { song_2 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button3').on('click', function() {
                song_3x = true;
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
                console.log("song_3", song_3x, "magic", currentScene);
            });
            $('#button4').on('click', function() {
                djPlayThatSong(sounds.pop, 10000);
            });
            break;
        case 70:
            nameChange(Closure.name, Closure.color);
            console.log(song_3x);
            if (song_1) {
                textChange("a");
                musicScore++;
            } else if (song_2) {
                textChange("b");
            } else if (song_3x) {
                console.log("HERE");
                textChange("c");
            }
            break;
        case 71:
            song_1 = false;
            song_2 = false;
            song_3 = false;
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 72:
            djPlayThatSong(sounds.scandalous, 10000);
            nameChange(Closure.name, Closure.color);
            textChange();
            songChoice("Mya - Case of the ex", "Ciara - Like a boy",
                "Miss Teeq - Scandalous", "'One more time'");
            $("#next").hide();
            $('#button1').on('click', function() {
                { song_1 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { song_2 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button3').on('click', function() {
                { song_3 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button4').on('click', function() {
                djPlayThatSong(sounds.scandalous, 10000);
            });
            break;
        case 73:
            nameChange(Closure.name, Closure.color);
            if (song_1) {
                textChange("a");
            } else if (song_2) {
                textChange("b");
            } else if (song_3) {
                textChange("c");
                musicScore++;
            }
            break;
        case 74:
            song_1 = false;
            song_2 = false;
            song_3 = false;
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 75:
            djPlayThatSong(sounds.queen, 10000);
            nameChange(Closure.name, Closure.color);
            textChange();
            songChoice("Destiny's Child - Independant woman",
                "Tony Braxton - He wasn't man enough",
                "Whitney Houston - Queen of the night",
                "'Again please'");
            $("#next").hide();
            $('#button1').on('click', function() {
                { song_1 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { song_2 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button3').on('click', function() {
                { song_3 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button4').on('click', function() {
                djPlayThatSong(sounds.queen, 10000);
            });
            break;
        case 76:
            nameChange(Closure.name, Closure.color);
            if (song_1) {
                textChange("a");
            } else if (song_2) {
                textChange("b");
            } else if (song_3) {
                textChange("c");
                musicScore++;
            }
            break;

        case 77:
            song_1 = false;
            song_2 = false;
            song_3 = false;
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 78:
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;

        case 79:
            djPlayThatSong(sounds.vogue, 20000);
            nameChange(Closure.name, Closure.color);
            textChange();
            songChoice("Natalie Imbruglia - Torn",
                "Madonna - Vogue",
                "Freeland - Borderline",
                "'Again please'");
            $("#next").hide();
            $('#button1').on('click', function() {
                { song_1 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { song_2 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button3').on('click', function() {
                { song_3 = true; }
                deleteButtons(button1, button2, button3, button4);
                $("#next").show();
            });
            $('#button4').on('click', function() {
                djPlayThatSong(sounds.vogue, 20000);
            });
            break;
        case 80:
            nameChange(Closure.name, Closure.color);
            if (song_1) {
                textChange("a");
            } else if (song_2) {
                musicScore++;
                textChange("b");
            } else if (song_3) {
                textChange("c");
            }
            break;
        case 81:
            nameChange(Closure.name, Closure.color);
            textChange();
            song_1 = false;
            song_2 = false;
            song_3 = false;
            break;
        case 82:
            nameChange(Closure.name, Closure.color);
            textChange();
            break;

        case 83:
            console.log("On est à 83");
            nameChange(Closure.name, Closure.color);
            if (musicScore <= 2) {
                textChange("a");
            }
            if (musicScore === 3) {
                textChange("b");
            }
            if (musicScore === 4) {
                textChange("c");
            }
            break;
        case 84:
            nameChange(Emilie.name, Emilie.color);
            textChange();
            break;
        case 85:
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 86:
            nameChange(Closure.name, Closure.color);
            textChange();
            break;
        case 87:
            nameChange(Emilie.name, Emilie.color);
            textChange();
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

    var b4 = $("<button id='button4'>" + v4 + "</button>");
    $(".text-content").append(b4);
}

function deleteButtons() {
    for (i = 1; i < arguments.length + 1; i++) {
        $("#button" + i).remove();
    }
}

function nextOff() {
    $("#next").css('pointer-events', 'none');
}

function music(soundFile) {
    soundFile.play();
}

function djPlayThatSong(song, time) {
    var audio = document.createElement('audio');
    audio.src = song;
    audio.play();
    setTimeout(function() {
        audio.pause();
        audio.currentTime = 0;
    }, time);
}