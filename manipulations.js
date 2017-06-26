// ============================================
// =========== DOC READY !!!!!! ===============
// ============================================

$(document).ready(function() {

    var magicNum = 0;

    var path_a, path_b, path_1a, path_1b, path_1c,
        path_2a, path_2b, path_2c = false;

    $('button').on('click', function() {

        magicNum++;
        console.log(magicNum);

        var js = nameChange(JSMonster.name, JSMonster.color);
        var aj = nameChange(Ajax.name, Ajax.color);
        var cl = nameChange(Closure.name, Closure.color);
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
                bgChange(BG.hell);
                $("#char2").fadeOut();
                $(".main").effect("shake");
                emi;
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
            case 9:
                $("p").css("font-size", "1.25em");
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
                js;
                txt;
                break;
            case 27:
                $("p").css("font-size", "3em");
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
                break;
            case 33:

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
                cl;
                txt;
                break;
            case 68:
                nameChange(Closure.name, Closure.color);
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

    function deleteButtons() {
        $("#button1").remove();
        $("#button2").remove();
    }

    function deleteThreeButtons() {
        $("#button1").remove();
        $("#button2").remove();
        $("#button3").remove();
    }

    function nextOff() {
        $("#next").css('pointer-events', 'none');
    }


}); // end of doc ready