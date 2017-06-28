var musicScore = 0;
var wordOne = 0;

// ============================================
// ============== CHARACTERS ==================
// ============================================

var Emilie = {
    name: "Emilie",
    hey: "img/emi-hey.png",
    what: "img/emi-what.png",
    happy: "img/emi-happy.png",
    ugh: "img/emi-ugh.png",
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
    smile: "img/js-smile.png",
    nope: "img/js-nope.png",
    rage: "img/js-rage.png",
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
    neutral: "img/cl-neutral.png",
    smile: "img/cl-smile.png",
    mic: "img/cl-mic.png",
    wtf: "img/cl-wtf.png",
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

var texts = {
    text_1: "Bzzzz",
    text_2: "Go forth my minion and bring back that unworthy soul.",
    text_3: "Bzzzz zz z bzz bz zzzz ? Bzzzzz zzz bzz'z!",
    text_4: "Oh...What happened? What time is it? Where am I?",
    text_5: "It's IronHeck...",
    text_6: "Hohohoho... It is *not* IronHeck",
    text_7: "It is JAVASCRIPT HELL!",
    text_8: "What do you mean? Javascript Hell?",
    text_9: "I am the Javascript Lord. I have been observing you.",
    text_10: "Creepy...",
    text_11: "You are a DISGRACE! You barely have a grasp of Jquery. You don't even understand what a forEach loop is." + "You still have to understand what a function object is.",
    text_12: "Well, it's hard. I'm doing my best but...I'm doing fine with Jquery.",
    text_13: "Look",
    text_14: "$('JSLord').css('border', '2px solid #bad455');",
    text_15: "I'm the Lord of PURE JAVASCRIPT !!!! STOP THIS BLASPHEMY AT ONCE!!!",
    text_16: "Where was I...",
    // ========== CHOICE ========
    text_17: "KO",
    text_a17: "If you hadn't interrupted me, I was about to explain.",
    text_b17: "You should not take it so lightly... Heed my warning.",
    // ========== CHOICE ======== //
    text_18: "This is your last chance to right your wrongs...",
    text_19: "I did nothing wrong.",

    text_20: "Enough! Can't you just focus and listen for two minutes?!",
    text_21: "This is probably why you can't get your head around function constructor.",
    text_22: "That's mean...",
    text_23: "Follow the path to redemption. You will have to face three trials. Succeed in all of them and I will release you. Fail and you will be stuck here forever.",
    text_24: "It's not *that* bad here you know.",
    text_25: "And you will spend your days debugging...",
    text_26: "complex...",
    text_27: "...VANILLA Javascript.",
    text_28: "OH NO !!!!! Can't I die instead ? Can we talk about alternatives ? I have money ! ",
    text_29: "BWWHAAAAAAHAAAAAAHAAAAAAHAAA",
    text_30: "Ok ok... Let's not succomb to panic.",
    text_31: "There must be a way out.",
    text_32: "Here is your first trial !",
    // ========================
    // ===== FIRST TRIAL =====
    // ========================
    text_33: "I am Ajax, Lord of client-side...",
    text_34: "Stop right there. I haven't studied Ajax yet so this is just *not* fair.",
    text_35: "Don't interrupt me pitiful mortal!",
    text_36: "I will explain the rules of the trial.",
    text_37: "I will choose either rock, paper or scissors and...",
    text_38: "We're playing rock paper scissors?!",
    text_39: "What is it now mortal?!",
    text_40: "This has nothing to do with Javascript.",
    text_41: "And it's just luck! This is not fair.",
    text_42: "Would you prefer some Javascript riddle?",
    text_43: "Errr, no.",
    text_44: "Choose your answer.",

    // ========== CHOICE ========
    text_45: "KOOKOOKOKOKO",
    text_a45: "You chose 'Rock'. That is a shame, I chose 'PAPER'!",
    text_b45: "So you selected 'Paper'? My SCISSORS will tear you apart!",
    text_c45: "You think you can win with 'Scissors'? Not against my ROCK!",
    // ========== CHOICE ======== //

    text_46: "Hinhinhin! Fool!",
    text_47: "I've still got a chance.",
    text_48: "If I win again it's over for you.",
    text_49: "Make your choice.",

    // ========== CHOICE ========
    text_50: "Ca ne marche pas o__o",
    text_a50: "Too bad...I chose PAPER!",
    text_b50: "How unfortunate...I chose SCISSORS!",
    text_c50: "Not your lucky day...ROCK TIME!",
    // ========== CHOICE ======== //

    text_51: "NOOOOOOOOOOOOOOOOO!",
    text_52: "You thought you could beat me?! I am the Great Ajax, I *cannot* be beaten!",
    text_53: "Wait a minute... Do you mean that you cheated and I have no chance to win whatsoever?",
    text_54: "It is not 'cheating', I simply know your answers and can adapt.",
    text_55: "C H E A T I N G !",
    text_56: "I did not cheat!",
    text_57: "You know his Id, use it against him.",
    text_58: "His Id ? Of course !",

    // ========== CHOICE ========
    text_59: "Ca ne marche pas o__o",
    text_a59: "No! Don't!",
    text_b59: "Stop it!",
    // ========== CHOICE ======== //

    text_60: "Alright, trial number one cleared",
    // ========================
    // ===== SECOND TRIAL =====
    // ========================
    text_61: "Well done.",
    text_62: "Let me introduce myself. I am Closure.",
    text_63: "Well, that was less pompous",
    text_64: "What's the challenge, let's do it.",
    text_65: "I am glad to see you so eager...",
    text_66: "...To play THE MUSIC QUIZ !",
    text_67: "A music quiz ? Now that's cool.",
    text_68: "Let us start the challenge.",
    text_69: "Guess the song!",

    // ========== CHOICE ========
    text_70: "WRONG",
    text_a70: "EXACTLY ! I love this song. It doesn't matter Bout the car I drive or What I wear around my neck",
    text_b70: "Are you kidding me...?",
    text_c70: "Know your boys bands. Please.",
    // ========== CHOICE ======== //

    text_71: "Next one!",
    text_72: "It's a good one!",

    // ========== CHOICE ========
    text_73: "WRONG.",
    text_a73: "'And how you gonna act How you gonna handle that' cool song, but wrong.",
    text_b73: "You chose randomly?...",
    text_c73: "So so so scandalous! Alright!",
    // ========== CHOICE ======== //

    text_74: "Last one, get ready.",
    text_75: "An easy one.",

    // ========== CHOICE ========
    text_76: "WRONG",
    text_a76: "Sadly not and how can you be so wrong?!",
    text_b76: "Do you even know what you're saying?",
    text_c76: "YAASS QUEEN ! I didn't like the movie though.",
    // ========== CHOICE ======== //

    text_77: "I'm having so much fun. Let's do another one.",
    text_78: "Errrr...Sure but...",
    text_79: "Let's roll!",

    // ========== CHOICE ========
    text_80: "WRONG",
    text_a80: "Wow, that's so wrong...",
    // DANGER J'AI INVERSE LES LETTRES
    text_c80: "OMG... That's complety different.",
    text_b80: "Strike a pose! Strike a pose!.",
    // ========== CHOICE ======== //

    text_81: "Wow, that was cool.",
    text_82: "You guessed " + musicScore + " songs out of 4.",

    // ========== CHOICE ========
    text_83: "WRONG",
    text_a83: "That's pathetic. I don't know what you're doing with your life but you should listen to more music.",
    text_b83: "That's acceptable.",
    text_c83: "You did well.",
    // ========== CHOICE ======== //

    text_84: "So... What's up? Have I passed the trial?",
    text_85: "Oh that... Sure. I had a lot of fun. Good luck with the rest.",
    text_86: "Tada!",
    text_87: "Well that was easy.",
    text_88: "I guess it's time for the final boss.",
    text_89: "Hohohoho...",
    text_90: "Mortal, I am RegEx, your ultimate oppponent.",

    // ========== CHOICE ========
    text_91: "Oho, ça ne marche pas",
    text_a91: "We will see if you still sing the same tune in a moment.",
    text_b91: "You are right to fear my powers human.",
    // ========== CHOICE ======== //

    text_92: "My challenge is simple : You have 3 tries to find the word I have chosen. Each time you select one I'll tell you how many letters are right.",
    text_93: "Can't we do a music quiz instead?",
    text_94: "Don't be silly, you will love it. Make your choice. Carefully.",

    // ========== CHOICE ========
    text_95: "Text relatif aux mots",
    text_a95: "0 are right.",
    text_b95: "1 is right.",
    text_c95: "2 are right.",
    text_d95: "Well played, it was 'FOES'.",
    // ========== CHOICE ======== //

    text_96: "Some text",
    text_0000: "Tada!",

    text_200: "That is game over my dear..."
};