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
                deleteButtons(button1, button2, button3, button4);
                changeScene(70);
                textChange("a");
                musicScore++;
                $("#next").show();
                break;
            case 72:
                deleteButtons(button1, button2, button3, button4);
                changeScene(73);
                textChange("a");
                $("#next").show();
                break;
            case 75:
                deleteButtons(button1, button2, button3, button4);
                changeScene(76);
                textChange("a");
                $("#next").show();
                break;
            case 79:
                deleteButtons(button1, button2, button3, button4);
                changeScene(80);
                textChange("a");
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
                deleteButtons(button1, button2, button3, button4);
                changeScene(70);
                textChange("b");
                $("#next").show();
                break;
            case 72:
                deleteButtons(button1, button2, button3, button4);
                changeScene(73);
                textChange("b");
                $("#next").show();
                break;
            case 75:
                deleteButtons(button1, button2, button3, button4);
                changeScene(76);
                textChange("b");
                $("#next").show();
                break;
            case 79:
                deleteButtons(button1, button2, button3, button4);
                changeScene(80);
                textChange("b");
                $("#next").show();
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
                deleteButtons(button1, button2, button3, button4);
                changeScene(70);
                textChange("c");
                $("#next").show();
                break;
            case 72:
                deleteButtons(button1, button2, button3, button4);
                changeScene(73);
                textChange("c");
                musicScore++;
                $("#next").show();
                break;
            case 75:
                deleteButtons(button1, button2, button3, button4);
                changeScene(76);
                textChange("c");
                musicScore++;
                $("#next").show();
                break;
            case 79:
                deleteButtons(button1, button2, button3, button4);
                changeScene(80);
                textChange("c");
                $("#next").show();
                break;
        }
    });
    $('#button4').on('click', function() {
        switch (currentScene) {
            case 16:
                deleteButtons(button1, button2);
                changeScene(17);
                textChange("a");
                $("#next").show();
                break;
            case 69:
                djPlayThatSong(sounds.pop, 10000);
                break;
            case 72:
                djPlayThatSong(sounds.scandalous, 10000);
                break;
            case 75:
                djPlayThatSong(sounds.queen, 10000);
                break;
            case 75:
                djPlayThatSong(sounds.vogue, 20000);
                break;
        }
    });
}