var musicScore = 0;

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

var Voice = {
    name: "Distant voice",
    color: "#93A4EE"
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
    round1: "music/Guile.mp3",
    round2: "",
    round3: "",
    final: "",
    pop: "music/NSYNC-Pop.mp3",
    scandalous: "music/Mis-Teeq-Scandalous.mp3",
    queen: "music/Queen-Of-The-Night.mp3",
    vogue: "music/Madonna-Vogue.mp3"
};

// ============================================
// ================= TEXT =====================
// ============================================

var text_1 = "Bzzzz";
var text_2 = "Go forth my minion and bring back that unworthy soul.";
var text_3 = "Bzzzz zz z bzz bz zzzz ? Bzzzzz zzz bzz'z!";
var text_4 = "Oh...What happened? What time is it? Where am I?";
var text_5 = "It's IronHeck...";
var text_6 = "Hohohoho... It is *not* IronHeck";
var text_7 = "It is JAVASCRIPT HELL!";
var text_8 = "What do you mean? Javascript Hell?";
var text_9 = "I am the Javascript Lord. I have been observing you.";
var text_10 = "Creepy...";
var text_11 = "You are a DISGRACE! You barely have a grasp of Jquery. You don't even understand what a forEach loop is." + "You still have to understand what a function object is.";
var text_12 = "Well, it's hard. I'm doing my best but...I'm doing fine with Jquery.";
var text_13 = "Look";
var text_14 = "$('JSLord').css('border', '2px solid #bad455');";
var text_15 = "I'm the Lord of PURE JAVASCRIPT !!!! STOP THIS BLASPHEMY AT ONCE!!!";
var text_16 = "Where was I...";
// ========== CHOICE ========
var text_17 = "KOOKOOKOKOKO";
var text_a17 = "If you hadn't interrupted me, I was about to explain.";
var text_b17 = "You should not take it so lightly... Heed my warning.";
// ========== CHOICE ======== //
var text_18 = "This is your last chance to right your wrongs...";
var text_19 = "I did nothing wrong.";

var text_20 = "Enough! Can't you just focus and listen for two minutes?!";
var text_21 = "This is probably why you can't get your head around function constructor.";
var text_22 = "That's mean...";
var text_23 = "Follow the path to redemption. You will have to face three trials. Succeed in all of them and I will release you. Fail and you will be stuck here forever.";
var text_24 = "It's not *that* bad here you know.";
var text_25 = "And you will spend your days debugging...";
var text_26 = "complex...";
var text_27 = "...VANILLA Javascript.";
var text_28 = "OH NO !!!!! Can't I die instead ? Can we talk about alternatives ? I have money ! ";
var text_29 = "BWWHAAAAAAHAAAAAAHAAAAAAHAAAAAAAA";
var text_30 = "Ok ok... Let's not succomb to panic.";
var text_31 = "There must be a way out.";
var text_32 = "Here is your first trial !";
var text_33 = "I am Ajax, Lord of client-side...";
var text_34 = "Stop right there. I haven't studied Ajax yet so this is just *not* fair.";
var text_35 = "Don't interrupt me pitiful mortal!";
var text_36 = "I will explain the rules of the trial.";
var text_37 = "I will choose either rock, paper or scissors and...";
var text_38 = "We're playing rock paper scissors?!";
var text_39 = "What is it now mortal?!";
var text_40 = "This has nothing to do with Javascript.";
var text_41 = "And it's just luck! This is not fair.";
var text_42 = "Would you prefer some Javascript riddle?";
var text_43 = "Errr, no.";
var text_44 = "Choose your answer.";
// ========== CHOICE ========
var text_45 = "KOOKOOKOKOKO";
var text_a45 = "You chose 'Rock'. That is a shame, I chose 'PAPER'!";
var text_b45 = "So you selected 'Paper'? My SCISSORS will tear you apart!";
var text_c45 = "You think you can win with 'Scissors'? Not against my ROCK!";
// ========== CHOICE ======== //
var text_46 = "Hinhinhin! Fool!";
var text_47 = "I've still got a chance.";
var text_48 = "If I win again it's over for you.";
var text_49 = "Make your choice.";
// ========== CHOICE ========
var text_50 = "Ca ne marche pas o__o";
var text_a50 = "Too bad...I chose PAPER!";
var text_b50 = "How unfortunate...I chose SCISSORS!";
var text_c50 = "Not your lucky day...ROCK TIME!";
// ========== CHOICE ======== //
var text_51 = "NOOOOOOOOOOOOOOOOO!";
var text_52 = "You thought you could beat me?! I am the Great Ajax, I *cannot* be beaten!";
var text_53 = "Wait a minute... Do you mean that you cheated and I have no chance to win whatsoever?";
var text_54 = "It is not 'cheating', I simply know your answers and can adapt.";
var text_55 = "C H E A T I N G !";
var text_56 = "I did not cheat!";
var text_57 = "You know his Id, use it against him.";
var text_58 = "His Id ? Of course !";
// ========== CHOICE ========
var text_59 = "Ca ne marche pas o__o";
var text_a59 = "No! Don't!";
var text_b59 = "Stop it!";
// ========== CHOICE ======== //
var text_60 = "Alright, trial number one cleared";
var text_61 = "Well done.";
var text_62 = "Let me introduce myself. I am Closure.";
var text_63 = "Well, that was less pompous";
var text_64 = "What's the challenge, let's do it.";
var text_65 = "I am glad to see you so eager...";
var text_66 = "...To play THE MUSIC QUIZ !";
var text_67 = "A music quiz ? Now that's cool.";
var text_68 = "Let us start the challenge.";
var text_69 = "Guess the song!";
// ========== CHOICE ========
var text_70 = "WRONG";
var text_a70 = "EXACTLY ! I love this song. It doesn't matter Bout the car I drive or What I wear around my neck";
var text_b70 = "Are you kidding me...?";
var text_c70 = "Know your boys bands. Please.";
// ========== CHOICE ======== //
var text_71 = "Next one!";
var text_72 = "It's a good one!";
// ========== CHOICE ========
var text_73 = "WRONG.";
var text_a73 = "'And how you gonna act How you gonna handle that' cool song, but wrong.";
var text_b73 = "You chose randomly?...";
var text_c73 = "So so so scandalous! Alright!";
// ========== CHOICE ======== //
var text_74 = "Last one, get ready.";
var text_75 = "An easy one.";
// ========== CHOICE ========
var text_76 = "WRONG";
var text_a76 = "Sadly not and how can you be so wrong?!";
var text_b76 = "You chose randomly?...";
var text_c76 = "YAASS QUEEN ! I didn't like the movie though.";
// ========== CHOICE ======== //
var text_77 = "I'm having so much fun. Let's do another one.";
var text_78 = "Errrr...Sure but...";
var text_79 = "Let's roll!";
// ========== CHOICE ========
var text_80 = "WRONG";
var text_a80 = "Sadly not and how can you be so wrong?!";
var text_b80 = "You chose randomly?...";
var text_c80 = "YAASS QUEEN ! I didn't like the movie though.";
// ========== CHOICE ======== //
var text_81 = "Wow, that was cool.";
var text_82 = "You guessed " + musicScore + " songs out of 4.";
// ========== CHOICE ========
var text_83 = "WRONG";
var text_a83 = "That's pathetic. I don't know what you're doing with your life but you should listen to more music.";
var text_b83 = "That's acceptable.";
var text_c83 = "You did well.";
// ========== CHOICE ======== //
var text_84 = "So... What's up? Have I passed the trial?";
var text_85 = "Oh that... Sure. I had a lot of fun. Good luck with the rest.";
var text_86 = "Tada!";
var text_87 = "Well that was easy.";