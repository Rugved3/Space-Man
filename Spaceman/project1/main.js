console.log("connected")

//trivia questions arranged as objects of an array
var questions = [{
        prompt: "who is the father of computer?",
        corrAns: "a2",
        answers: ["James Gosling", "Charles Babbage", "Dennis Ritche", "Bjarne Stroustrup"]
    },
    {
        prompt: "What is the full form of CPU?",
        corrAns: "a3",
        answers: ["Computer Processing Unit", "Computer Principle Unit", "Central Processing Unit", "Control Processing Unit"]

    }, {
        prompt: "Which of the following is the brain of the computer?",
        corrAns: "a1",
        answers: [" Central Processing Unit", "Memory", "Arithmetic & Logic unit", "Control unit"]

    }, {
        prompt: "Which of the following is the smallest unit of data in a computer?",
        corrAns: 'a1',
        answers: ["Bit", "KB", "Nibble", "Byte"]

    }, {
        prompt: "Which of the following is not a type of computer code?",
        corrAns: "a1",
        answers: ["EDIC", " ASCII", "BCD", "EBCDIC"]

    }, {
        prompt: " Which of the following part of a processor contains the hardware necessary to perform all the operations required by a computer?",
        corrAns: "a4",
        answers: [" Controller", " Registers", "Cache", " Data path"]

    }, {
        prompt: "Which of the following are physical devices of a computer?",
        corrAns: "a1",
        answers: [" Hardware", " Software", "System Software", "Package"]

    }, {
        prompt: " Which of the following devices provides the communication between a computer and the outer world?",
        corrAns: "a2",
        answers: [" Compact", "I/O", "Drivers", "Storage"]

    }, {
        prompt: " Which of the following is the device used for converting maps, pictures, and drawings into digital form for storage in computers?",
        corrAns: "a2",
        answers: [" Image Scanner", " Digitizer", " MICR", "Scanner"]

    }, {
        prompt: "Which of the following package allows individuals to use personal computers for storing and retrieving their personal information?",
        corrAns: "a1",
        answers: ["Personal assistance package", "Graphics package", "Spreadsheet package", "Animation package"]

    }, {
        prompt: "What is the full form of SRAM?",
        corrAns: "a1",
        answers: ["Static Random-Access Memory", "Static Remote-Access Memory", "Setup Random-Access Memory", "Setup Remote-Access Memory"]

    }
]

$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

var correctAnswer;
var currentAnswers;
var hangingMan = 0;
//autoplay music
$metroid = $('<audio controls autoplay> <source src="assets/advantage-metroid.mp3" type="audio/mpeg">Your browser is not good so it does not support the “metroid” noise</audio>')
$('body').append($metroid);

$('#nextQ').click(function() {
    console.log("Is working?");
    $('.answers').append('<div class="selectors" id="a1"></div>', '<div class="selectors" id="a2"></div>', '<div class="selectors" id="a3"></div>', '<div class="selectors" id="a4"></div>');
    $('#nextQ').hide();

    startGame();

})

function drawHead() {
    ellipse(515, 165, 60, 60);
    $('drawHead').animateCss('bounce');
}

function drawTorso() {
    line(515, 195, 515, 280);
}

function drawrArm() {
    line(495, 245, 515, 215);
}

function drawlArm() {
    line(515, 215, 535, 245);
}

function drawrLeg() {
    line(485, 330, 515, 280);
}

function drawlLeg() {
    line(515, 280, 545, 330);
}

var parts = [drawHead, drawTorso, drawrArm, drawlArm, drawrLeg, drawlLeg]

function startGame() {

    nextQuestion();

    var counterRight = 0;

    function nextQuestion() {
        var newObject = questions.splice(Math.floor(Math.random() * questions.length), 1)[0];
        var newQuestion = newObject.prompt;
        var newAnswer = newObject.answers;

        $8bitPew = $('<audio autoplay> <source src="assets/8-bit-pew.wav" type="audio/wav">Your browser is not good so it does not support the “8 bit pew” noise</audio>')
        $('quizContent').append($8bitPew);

        $('#instructions').html("(click your chosen answer)");
        $('#headerText').html("");
        $('#prompt').html(newQuestion);
        $('#a1').html("a. " + newAnswer[0]);
        $('#a2').html("b. " + newAnswer[1]);
        $('#a3').html("c. " + newAnswer[2]);
        $('#a4').html("d. " + newAnswer[3]);
        correctAnswer = newObject.corrAns;

    }

    $('.selectors').on('click', function() {
        if (this.id == correctAnswer) {
            counterRight++;
            alert('You are correct!');
            nextQuestion();
            $('#tally').html("<p>Score: " + counterRight + " correct answers so far.</p>");
            if (counterRight === 7) {
                $('#quizSection').html("<h1>YOU WON THE GAME! THE MAN IS SAVED! YOU ARE AMAZING!</h1>");
                $('#quizSection').append("<button class='animated infinite pulse' id='startOver'>Another Game?</button>");
                $('#quizSection').append('<img src="http://mashable.com/wp-content/uploads/2013/07/Anchorman.gif" alt="anchorman excitement">')
                $Ooohhhh = $('<audio autoplay> <source src="assets/Ooohhhh.mp3" type="audio/mpeg">Your browser is not good so it does not support the “Ooohhhh” noise</audio>')
                $('quizSection').append($Ooohhhh);
                $('#startOver').click(function() {
                    location.reload();
                });
            }

        } else {
            alert("That's Wrong.");
            nextQuestion();
            parts[hangingMan]();
            hangingMan++;
            $('#tally').html("<p>Score: " + counterRight + " correct answers so far.</p>");

            if (hangingMan === 6) {
                $('#quizSection').html("<h1>GAME OVER, YOU MURDERER!</h1>");
                $('#quizSection').append("<button class='animated infinite pulse' id='startOver'>Start Over</button>");
                $('#startOver').click(function() {
                    location.reload();
                });

            }
        }
    })

    //mouseover answer choice colors
    $('#a1, #a2, #a3, #a4').hover(function() {
        $(this).css("background", "lightgray");
    })

    $('#a1, #a2, #a3, #a4').mouseout(function() {
        $(this).css("background", "white");
    })

}