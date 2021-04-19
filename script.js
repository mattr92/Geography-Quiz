//I need to have a responsive start button
//when i click the start button it triggers a timer
//when start is pressed and timeer started it pulls up first question
//question will be answered from multiple choice of 4 selection
//after question is answered, another question will trigger
//if any question is answered incorrectly, time is subtracted from clock
//game will end once all questions are answered or the time is out
//I need to be able to save initials and score once game is over


//starting variables/buttons

var begin = document.querySelector(".begin button")
var quiz = document.querySelector(".geoquiz")
var submit = document.getElementById("#sub")
var restart = document.querySelector(".restart button")
const answers = Array.from(document.querySelector('.answer1'))
const question= document.querySelector('.quest')

//quiz timer
let time = document.querySelector("#seconds")

let seconds = 0

let countdown = ()=>{
    if(seconds === 12)
    {
        clearInterval(interval);
    }
    else
        {
            timer++;
            console.log(timer);
        }
}

//setInterval(countDown, 1000);



begin.addEventListener("click" , ()=>{
    begin.style.display = "none";
});

//quiz questions
var questions = [
    {
        question: 'What is the Largest Continent on Earth?',
        correct: 'c',
        options: [
            "a. South America",
            "b. Africa",
            "c, Asia",
            "d. Australia",
        ]

    }, {
        question: 'What is the Largest Country by area?',
        correct: "b",
        options: [
            "a. Canada",
            "b. Russia",
            "c. Australia",
            "d. China",
        ]
    }, {
        question: 'What is the Longest River in the World?',
        correct: "a",
        options: [
            "a. Nile",
            "b. Congo",
            "c. Yangtze",
            "d. Amazon",
        ]
    }, {
        question: 'Which US State is farthest west?',
        correct: "c",
        options: [
            "a. California",
            "b. Washington",
            "c. Alaska",
            "d. Hawaii",
        ]
    }, {
        question: 'Outside of English and Mandarin, which of these is the most spoken language on Earth?',
        correct: "b",
        options: [
            "a. Spanish",
            "b. Hindi",
            "c. French",
            "d. Bengali",
        ]
    }, {
        question: 'What is currently the Largest city in the World by popluation?',
        correct: "b",
        options: [
            "a. Mexico City, Mexico",
            "b. Tokyo, Japan",
            "c. Shanghai, China",
            "d. Delhi, India",
        ]
    }, {
        question: 'What is the smallest US State by land?',
        correct: "a",
        options: [
            "a. Rhode Island",
            "b.Connecticut",
            "c. Hawaii",
            "d. Deleware",
        ]
    }, {
        question: "What is the southernmost Country on Earth?",
        correct: "a",
        options: [
            "a. Australia",
            "b. New Zealand",
            "c. South Africa",
            "d, Chile",
        ]
    }

]

var i = 0
var score = 0;


//trying to get submit ansswer button to work and got o next question


function goQuestions(){
    for(var a=0; a <span.length; a++){
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q' + (i+1)+ ' '
    +questions[i].question;
    option0.innerHTML = questions[i].option
    [0];
    option0.innerHTML = questions[i].option
    [1];
    option0.innerHTML = questions[i].option
    [2];
    option0.innerHTML = questions[i].option
    [3];
    option0.innerHTML = questions[i].option
    [4];
    option0.innerHTML = questions[i].option
    [5];
    option0.innerHTML = questions[i].option
    [6];
    option0.innerHTML = questions[i].option
    [7];
    status.innerHTML= "Question"+' '+(i+1)+' '
    +'of' + ' ' + questions.length;
}

function nextQuest(){
    if(i<questions.length - 1)
    {
        i=i +1;
        displayQuestion();
    }
    else{
        questions.length;
        quiz.style.display= 'block'
    }
}

submit.addEventListener("click", nextQuest);