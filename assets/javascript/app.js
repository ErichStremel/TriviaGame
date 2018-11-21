$("#start").on("click", function () {
    quiz.start();
})

$(document).on('click','#end', function(){
    quiz.done();
})

var questions = [{
    question: "What is the tallest peak in Colorado?",
    answers: ["Mt. Harvard", "Pikes Peak", "Mt. Elbert", "Longs Peak"],
    correctAnswer: "Mt. Elbert"
}, {
    question: "What is the largest ski resort in Colorado?",
    answers: ['Steamboat', 'Snowmass', 'Vail', 'Breckenridge'],
    correctAnswer: "Snowmass"
}, {
    question: "Where is the steapest ski slope in Colorado?",
    answers: ['Aspen', 'Breckenridge', 'Arapahoe Basin', 'Loveland'],
    correctAnswer: "Aspen"
}, {
    question: "On average, how many inches of rain does Colorado get per year?",
    answers: ['10', '20', '30', '15'],
    correctAnswer: "15"
}, {
    question: "Which brewery is not in Colorado?",
    answers: ['Molson Coors', 'New Belgium', 'Dogfish Head', 'Ska Brewing'],
    correctAnswer: "Dogfish Head"
}, {
    question: 'Which of these chain restaurants was not founded in Colorado?',
    answers: ['Noodles and Company', 'Larkburger', 'Chipotle', 'Voodoo Donuts'],
    correctAnswer: "Voodoo Donuts"
}, {
    question: "How much of Colorados total land is owned by the federal government?",
    answers: ['1/2', '1/3', '1/5', '1/10'],
    correctAnswer: '1/3'
}];

var quiz = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function () {
        quiz.counter--;
        $("#counter").html(quiz.counter);
        if (quiz.counter <= 0) {
            console.log("Time is up!");
            quiz.done();
        }
    },
    start: function () {
        timer = setInterval(quiz.countdown, 1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds </h2>');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            

            // Loop through the answers arrays to display options
            for (var j = 0; j < questions[i].answers.length; j++) {

                // <input type='radio' name='question-2' value=
                $("#subwrapper").append("<input type='radio' name='question-" + [i] + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
        $("#subwrapper").append('<br><button id="end">Finish</button>');
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
    this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>Congratulations, you have finished the quiz!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Not Answered: "+ (questions.length -(this.incorrect+this.correct))+"</h3>");
    }
};

