function setSceneListeners() {
    $('#button1').on('click', function() {
        switch (currentScene) {
            case 16:
                deleteButtons(button1, button2);
                //$("#next").show();
                changeScene(17);
                textChange("a");
                $("#next").show();
                break;
            case 44:
                deleteButtons(button1, button2, button3);
                changeScene(45);
                textChange("a");
                char2Change(Ajax.paper);
                $("#next").show();
                break;
            case 49:
                deleteButtons(button1, button2, button3);
                changeScene(50);
                char2Change(Ajax.paper);
                textChange("a");
                $("#next").show();
                break;
            case 58:
                deleteButtons(button1, button2);
                changeScene(59);
                $('.char2').animate({ marginRight: "-1000px" }, 3000);
                textChange("a");
                $("#next").show();
                break;
            case 69:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(70);
                char1Change(Emilie.ok);
                textChange("a");
                musicScore++;
                $("#next").show();
                break;
            case 72:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(73);
                textChange("a");
                char2Change(Closure.mic);
                $("#next").show();
                break;
            case 75:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(76);
                textChange("a");
                char1Change(Emilie.sad);
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 79:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(80);
                textChange("a");
                char1Change(Emilie.sad);
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 90:
                deleteButtons(button1, button2);
                changeScene(91);
                textChange("a");
                char2Change(RegEx.cool);
                char1Change(Emilie.yes);
                $("#next").show();
                break;
            case 94:
                console.log("pool clicked");
                gertrude("b");
                break;
            case 101:
                martha("b");
                break;
            case 106:
                deleteButtons(button1, button2, button3);
                changeScene(107);
                textChange("a");
                char2Change(RegEx.cool);
                $("#next").show();
                break;
        }
    });

    $('#button2').on('click', function() {
        switch (currentScene) {
            case 16:
                deleteButtons(button1, button2);
                changeScene(17);
                textChange("b");
                $("#next").show();
                break;
            case 44:
                deleteButtons(button1, button2, button3);
                changeScene(45);
                char2Change(Ajax.scissors);
                textChange("b");
                $("#next").show();
                break;
            case 49:
                deleteButtons(button1, button2, button3);
                changeScene(50);
                char2Change(Ajax.scissors);
                textChange("b"); { path_3a = true; }
                $("#next").show();
                break;
            case 58:
                deleteButtons(button1, button2);
                changeScene(59);
                $('.char2').fadeOut("slow");
                textChange("b"); { path_3b = true; }
                $("#next").show();
                // path for 61
                break;
            case 69:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(70);
                textChange("b");
                char1Change(Emilie.sad);
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 72:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(73);
                textChange("b");
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 75:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(76);
                textChange("b");
                char1Change(Emilie.sad);
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 79:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(80);
                textChange("b");
                char1Change(Emilie.ok);
                char2Change(Closure.mic);
                $("#next").show();
                break;
            case 90:
                deleteButtons(button1, button2);
                changeScene(91);
                textChange("b");
                char2Change(RegEx.smile);
                char1Change(Emilie.sad);
                $("#next").show();
                break;
            case 94:
                gertrude("b");
                break;
            case 101:
                martha("b");
                break;
            case 106:
                deleteButtons(button1, button2, button3);
                changeScene(107);
                textChange("b");
                char2Change(RegEx.cool);
                $("#next").show();
                break;
        }
    });

    $('#button3').on('click', function() {
        switch (currentScene) {
            case 44:
                deleteButtons(button1, button2, button3);
                changeScene(45);
                char2Change(Ajax.rock);
                textChange("c");
                $("#next").show();
                break;
            case 49:
                deleteButtons(button1, button2, button3);
                changeScene(50);
                char2Change(Ajax.rock);
                textChange("c");
                $("#next").show();
                break;
            case 69:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(70);
                textChange("c");
                char1Change(Emilie.sad);
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 72:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(73);
                textChange("c");
                char1Change(Emilie.ok);
                musicScore++;
                char2Change(Closure.mic);
                $("#next").show();
                break;
            case 75:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(76);
                textChange("c");
                char1Change(Emilie.yes);
                char2Change(Closure.mic);
                musicScore++;
                $("#next").show();
                break;
            case 79:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(80);
                textChange("c");
                musicScore++;
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 94:
                gertrude("a");
                break;
            case 101:
                martha("b");
                break;
            case 106:
                // deleteButtons(button1, button2, button3);
                // $("#next").show();
                changeScene(300);
                //textChange("c");

                break;
        }
    });


    $('#button4').on('click', function() {
        switch (currentScene) {
            case 94:
                gertrude("b");
                break;
            case 101:
                martha("c");
                break;

        }
    });
    $('#button5').on('click', function() {
        $("#button5").css("background-color:", "#414b72");
        switch (currentScene) {
            case 94:
                gertrude("b");
                break;
            case 101:
                martha("b");
                break;
        }
    });
    $('#button6').on('click', function() {
        switch (currentScene) {
            case 94:
                gertrude("b");
                break;
            case 101:
                martha("b");
                break;

        }
    });
    $('#button7').on('click', function() {
        switch (currentScene) {
            case 94:
                deleteButtons(button1, button2, button3, button4, button5, button6, button7, button8, button9);
                changeScene(95);
                textChange("d");
                $("#next").show();
                // Changer expression
                break;
            case 101:
                martha("b");
                break;

        }
    });
    $('#button8').on('click', function() {
        switch (currentScene) {
            case 94:
                gertrude("b");
                break;
            case 101:
                deleteButtons(button1, button2, button3, button4, button5, button6, button7, button8, button9);
                changeScene(102);
                textChange("d");
                $("#next").show();
                // Changer expression
                break;
        }
    });
    $('#button9').on('click', function() {
        switch (currentScene) {
            case 94:
                gertrude("c");
                break;
            case 101:
                martha("b");
                break;

        }
    });


    $('#buttonx').on('click', function() {
        switch (currentScene) {
            case 16:
                deleteButtons(button1, button2);
                changeScene(17);
                textChange("a");
                $("#next").show();
                break;
            case 69:
                djPlayThatSong(sounds.pop, 10000, 33);
                break;
            case 72:
                djPlayThatSong(sounds.scandalous, 9000, 3);
                break;
            case 75:
                djPlayThatSong(sounds.queen, 12000);
                break;
            case 75:
                djPlayThatSong(sounds.vogue, 8000, 17);
                break;
        }
    });



}