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
                $("#next").show();
                break;
            case 49:
                deleteButtons(button1, button2, button3);
                changeScene(50);
                textChange("a");
                $("#next").show();
                break;
            case 58:
                deleteButtons(button1, button2);
                changeScene(59);
                $('.char2').animate({ marginRight: "-1000px" }, 1500);
                textChange("a");
                $("#next").show();
                break;
            case 69:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(70);
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
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 79:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(80);
                textChange("a");
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 90:
                deleteButtons(button1, button2);
                changeScene(91);
                textChange("a");
                char2Change(RegEx.smile);
                $("#next").show();
                break;
            case 94:
                gertrude("b");
                break;
            case 101:
                martha("b");
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
                textChange("b");
                $("#next").show();
                break;
            case 49:
                deleteButtons(button1, button2, button3);
                changeScene(50);
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
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 79:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(80);
                textChange("b");
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 90:
                deleteButtons(button1, button2);
                changeScene(91);
                textChange("b");
                char2Change(RegEx.smile);
                $("#next").show();
                break;
            case 94:
                gertrude("b");
                break;
            case 101:
                martha("b");
                break;
        }
    });

    $('#button3').on('click', function() {
        switch (currentScene) {
            case 44:
                deleteButtons(button1, button2, button3);
                changeScene(45);
                textChange("c");
                $("#next").show();
                break;
            case 49:
                deleteButtons(button1, button2, button3);
                changeScene(50);
                textChange("c");
                $("#next").show();
                break;
            case 69:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(70);
                textChange("c");
                char2Change(Closure.wtf);
                $("#next").show();
                break;
            case 72:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(73);
                textChange("c");
                musicScore++;
                char2Change(Closure.mic);
                $("#next").show();
                break;
            case 75:
                deleteButtons(button1, button2, button3);
                deleteRepeat();
                changeScene(76);
                textChange("c");
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
                char2Change(Closure.mic);
                $("#next").show();
                break;
            case 94:
                gertrude("a");
                break;
            case 101:
                martha("b");
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