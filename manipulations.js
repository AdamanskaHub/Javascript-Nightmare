// ============================================
// =========== DOC READY !!!!!! ===============
// ============================================

var magicNum = 0;

var path_a, path_b, path_1a, path_1b, path_1c,
    path_2a, path_2b, path_2c,
    path_3a, path_3b, song_1, song_2, song_3, song_3x = false;

$(document).ready(function() {

    $('button').on('click', function() {

        magicNum++;
        console.log("Button clicked", magicNum);

        changeScene();

    }); // click button next end

});

function changeScene() {
    var js = nameChange(JSMonster.name, JSMonster.color);
    var aj = nameChange(Ajax.name, Ajax.color);
    var cl = nameChange(Closure.name, Closure.color);
    var txt = textChange("text", "");
    var emi = nameChange(Emilie.name, Emilie.color);

    console.log("changing scene to ", magicNum);

    var x = sounds.round1;
    switch (magicNum) {
        case 1:
            // ==================
            // djPlayThatSong(sounds.round1, 10000)
            // ==================
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
            bgChange(BG.hell);
            $("#char2").fadeOut();
            $(".main").effect("shake");
            nameChange(Emilie.name, Emilie.color);
            bgChange(BG.hell);
            char1Change(Emilie.grumpy);
            // char2Change("");
            break;
        case 5:
            bgChange(BG.hell);
            char1Change(Emilie.surprised);
            emi;
            break;
        case 6:
            nameChange(JSMonster.name, JSMonster.color);
            txt;
            char2Change(JSMonster.neutral);
            $("char2").fadeIn(2000);
            break;
        case 7:
            nameChange(JSMonster.name, JSMonster.color);
            txt;
            $("p").css("font-size", "3em");
            break;
        case 8:
            $("p").css("font-size", "1.25em");
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
            $("p").css("font-size", "2em");
            $("#char2").removeClass("border");
            txt;
            nameChange(JSMonster.name, JSMonster.color);
            break;
        case 16:
            $("p").css("font-size", "1.25em");
            txt;
            nameChange(JSMonster.name, JSMonster.color);
            addButtons(
                "About to tell me how I get out",
                "Disgrace, hell, stuff like that"
            );
            $("#next").hide();
            $('#button1').on('click', function() {
                { path_a = true; }
                console.log("a = " + path_a);
                // magicNum++;
                console.log(magicNum);
                deleteButtons();
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { path_b = true; }
                deleteButtons();
                $("#next").show();
            });
            // I'm not clicking next and can't increase my count!
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
            nameChange(JSMonster.name, JSMonster.color);
            txt;
            break;
        case 20:
            nameChange(JSMonster.name, JSMonster.color);
            txt;
            break;
        case 21:
            nameChange(JSMonster.name, JSMonster.color);
            txt;
            break;
        case 23:
            nameChange(JSMonster.name, JSMonster.color);
            txt;
            break;
        case 25:
            nameChange(JSMonster.name, JSMonster.color);
            txt;
            $("p").css("font-size", "1.5em");
            break;
        case 26:
            $("p").css("font-size", "2em");
            nameChange(JSMonster.name, JSMonster.color);
            js;
            txt;
            break;
        case 27:
            $("p").css("font-size", "3em");
            nameChange(JSMonster.name, JSMonster.color);
            js;
            txt;
            break;
        case 28:
            $("p").css("font-size", "2em");
            txt;
            break;
        case 29:
            $("p").css("font-size", "2em");
            nameChange(JSMonster.name, JSMonster.color);
            txt;
            break;
        case 30:
            $("p").css("font-size", "1.25em");
            txt;
            break;
        case 32:
            nameChange(JSMonster.name, JSMonster.color);
            txt;
            $(".char2").fadeOut();
            break;
        case 33:
            char2Change(Ajax.neutral);
            $(".char2").fadeIn();
            nameChange(Ajax.name, Ajax.color);
            txt;
            break;
        case 35:
            nameChange(Ajax.name, Ajax.color);
            txt;
            break;
        case 37:
            nameChange(Ajax.name, Ajax.color);
            txt;
            break;
        case 39:
            nameChange(Ajax.name, Ajax.color);
            txt;
            break;
        case 42:
            nameChange(Ajax.name, Ajax.color);
            txt;
            break;
        case 44:
            nameChange(Ajax.name, Ajax.color);
            txt;
            addThreeButtons();
            $("#next").hide();
            $('#button1').on('click', function() {
                { path_1a = true; }
                deleteThreeButtons();
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { path_1b = true; }
                deleteThreeButtons();
                $("#next").show();
            });
            $('#button3').on('click', function() {
                { path_1c = true; }
                deleteThreeButtons();
                $("#next").show();
            });
            break;

        case 45:
            nameChange(Ajax.name, Ajax.color);
            if (path_1a) {
                textChange("text", "a");
            } else if (path_1b) {
                textChange("text", "b");
            } else if (path_1c) {
                textChange("text", "c");
            }
            break;
        case 46:
            nameChange(Ajax.name, Ajax.color);
            txt;
            break;
        case 47:
            aj;
            txt;
            break;
        case 49:
            nameChange(Ajax.name, Ajax.color);
            txt;
            addThreeButtons2();
            $("#next").hide();
            $('#button1').on('click', function() {
                { path_2a = true; }
                deleteThreeButtons();
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { path_2b = true; }
                deleteThreeButtons();
                $("#next").show();
            });
            $('#button3').on('click', function() {
                { path_2c = true; }
                deleteThreeButtons();
                $("#next").show();
            });
            break;

        case 50:
            nameChange(Ajax.name, Ajax.color);
            if (path_2a) {
                textChange("text", "a");
            } else if (path_2b) {
                textChange("text", "b");
            } else if (path_2c) {
                textChange("text", "c");
            }
            break;
        case 51:
            $("p").css("font-size", "2.5em");
            $(".char1").effect("shake");
            txt;
            break;
        case 52:
            $("p").css("font-size", "1.25em");
            nameChange(Ajax.name, Ajax.color);
            txt;
            break;
        case 54:
            nameChange(Ajax.name, Ajax.color);
            txt;
            break;
        case 55:
            $("p").css("font-size", "2em");
            txt;
            break;
        case 56:
            $("p").css("font-size", "1.25em");
            nameChange(Ajax.name, Ajax.color);
            txt;
            break;
        case 57:
            nameChange(Voice.name, Voice.color);
            txt;
            break;
        case 58:
            txt;
            addButtons("Slide into oblivion!",
                "Fade the hell out of him");
            $("#next").hide();
            $('#button1').on('click', function() {
                { path_3a = true; }
                deleteButtons();
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { path_3b = true; }
                deleteButtons();
                $("#next").show();
            });
            break;
        case 59:
            nameChange(Ajax.name, Ajax.color);
            if (path_3a) {
                $('.char2').animate({ marginRight: "-1000px" }, 1500);
                textChange("text", "a");
            } else if (path_3b) {
                textChange("text", "b");
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
            txt;
            break;
        case 62:
            nameChange(Closure.name, Closure.color);
            txt;
            break;
        case 65:
            nameChange(Closure.name, Closure.color);
            txt;
            break;
        case 66:
            nameChange(Closure.name, Closure.color);
            txt;
            break;
        case 68:
            nameChange(Closure.name, Closure.color);
            txt;
            break;
        case 69:
            djPlayThatSong(sounds.pop, 10000);
            nameChange(Closure.name, Closure.color);
            txt;
            songChoice("Pop - N'sync", "Britney Spears - Slave 4 u",
                "BackstreetBoys - Everybody", "'I need to listen to it again'");
            $("#next").hide();
            $('#button1').on('click', function() {
                { song_1 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { song_2 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button3').on('click', function() {
                song_3x = true;
                deleteAllThat("#button4");
                $("#next").show();
                console.log("song_3", song_3x, "magic", magicNum);
            });
            $('#button4').on('click', function() {
                djPlayThatSong(sounds.pop, 10000);
            });
            break;
        case 70:
            nameChange(Closure.name, Closure.color);
            console.log(song_3x);
            if (song_1) {
                textChange("text", "a");
                musicScore++;
            } else if (song_2) {
                textChange("text", "b");
            } else if (song_3x) {
                console.log("HERE");
                textChange("text", "c");
            }
            break;
        case 71:
            song_1 = false;
            song_2 = false;
            song_3 = false;
            nameChange(Closure.name, Closure.color);
            txt;
            break;
        case 72:
            djPlayThatSong(sounds.scandalous, 10000);
            nameChange(Closure.name, Closure.color);
            txt;
            songChoice("Mya - Case of the ex", "Ciara - Like a boy",
                "Miss Teeq - Scandalous", "'One more time'");
            $("#next").hide();
            $('#button1').on('click', function() {
                { song_1 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { song_2 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button3').on('click', function() {
                { song_3 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button4').on('click', function() {
                djPlayThatSong(sounds.scandalous, 10000);
            });
            break;
        case 73:
            nameChange(Closure.name, Closure.color);
            if (song_1) {
                textChange("text", "a");
            } else if (song_2) {
                textChange("text", "b");
            } else if (song_3) {
                textChange("text", "c");
                musicScore++;
            }
            break;
        case 74:
            song_1 = false;
            song_2 = false;
            song_3 = false;
            nameChange(Closure.name, Closure.color);
            txt;
            break;
        case 75:
            djPlayThatSong(sounds.queen, 10000);
            nameChange(Closure.name, Closure.color);
            txt;
            songChoice("Destiny's Child - Independant woman",
                "Tony Braxton - He wasn't man enough",
                "Whitney Houston - Queen of the night",
                "'Again please'");
            $("#next").hide();
            $('#button1').on('click', function() {
                { song_1 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { song_2 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button3').on('click', function() {
                { song_3 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button4').on('click', function() {
                djPlayThatSong(sounds.queen, 10000);
            });
            break;
        case 76:
            nameChange(Closure.name, Closure.color);
            if (song_1) {
                textChange("text", "a");
            } else if (song_2) {
                textChange("text", "b");
            } else if (song_3) {
                textChange("text", "c");
                musicScore++;
            }
            break;

        case 77:
            song_1 = false;
            song_2 = false;
            song_3 = false;
            nameChange(Closure.name, Closure.color);
            txt;
            break;
        case 78:
            nameChange(Emilie.name, Emilie.color);
            txt;
            break;

        case 79:
            djPlayThatSong(sounds.vogue, 20000);
            nameChange(Closure.name, Closure.color);
            txt;
            songChoice("Natalie Imbruglia - Torn",
                "Madonna - Vogue",
                "Freeland - Borderline",
                "'Again please'");
            $("#next").hide();
            $('#button1').on('click', function() {
                { song_1 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button2').on('click', function() {
                { song_2 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button3').on('click', function() {
                { song_3 = true; }
                deleteAllThat("#button4");
                $("#next").show();
            });
            $('#button4').on('click', function() {
                djPlayThatSong(sounds.vogue, 20000);
            });
            break;
        case 80:
            nameChange(Closure.name, Closure.color);
            if (song_1) {
                textChange("text", "a");
            } else if (song_2) {
                musicScore++;
                textChange("text", "b");
            } else if (song_3) {
                textChange("text", "c");
            }
            break;
        case 81:
            nameChange(Closure.name, Closure.color);
            txt;
            song_1 = false;
            song_2 = false;
            song_3 = false;
            break;
        case 82:
            nameChange(Closure.name, Closure.color);
            textChange("text", "");
            break;

        case 83:
            console.log("On est à 83");
            nameChange(Closure.name, Closure.color);
            if (musicScore <= 2) {
                textChange("text", "a");
            }
            if (musicScore === 3) {
                textChange("text", "b");
            }
            if (musicScore === 4) {
                textChange("text", "c");
            }
            break;
        case 84:
            nameChange(Emilie.name, Emilie.color);
            txt;
            break;
        case 85:
            nameChange(Closure.name, Closure.color);
            txt;
            break;
        case 86:
            nameChange(Closure.name, Closure.color);
            txt;
            break;
        case 87:
            nameChange(Emilie.name, Emilie.color);
            txt;
            break;








        default:
            nameChange(Emilie.name, Emilie.color);
            textChange("text", "");
            break;
    }

}


// ===================================================
// ================= THE FUNCTIONS ===================
// ===================================================

function textChange(textPlaceHolder, path) {
    console.log("Text change", textPlaceHolder, path, magicNum);
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
function addButtons(value1, value2) {
    var b1 = $("<button id='button1'>" + value1 + "</button>");
    $(".button-space").append(b1);
    var b2 = $("<button id='button2'>" + value2 + "</button>");
    $(".button-space").append(b2);
}

function addThreeButtons() {
    var b1 = $("<button id='button1'>Rock</button>");
    $(".button-space").append(b1);
    var b2 = $("<button id='button2'>Paper</button>");
    $(".button-space").append(b2);
    var b3 = $("<button id='button3'>Scissors</button>");
    $(".button-space").append(b3);
}

function addThreeButtons2() {
    var b1 = $("<button id='button1'>Smash some scissors</button>");
    $(".button-space").append(b1);
    var b2 = $("<button id='button2'>Wrap some rocks</button>");
    $(".button-space").append(b2);
    var b3 = $("<button id='button3'>Cut some paper</button>");
    $(".button-space").append(b3);
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
    $("#button1").remove();
    $("#button2").remove();
}

function deleteThreeButtons() {
    $("#button1").remove();
    $("#button2").remove();
    $("#button3").remove();
}

function deleteSomeButtons(value) {
    $(value).remove();
}

function deleteAllThat(value) {
    deleteThreeButtons();
    deleteSomeButtons(value);
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