const questions = [
    'Which is the capital of France?',
    'Which planet is known as the Red Planet?', 
    'What is the largest Ocean on Earth?',
    'Which of these is NOT a programming language?',
    'What is the chemical symbol for gold?'
];

const answers = [
    'Paris',
    'Mars',
    'Pacific Ocean',
    'Banana',
    'Au'
];

const options = [
    ['London', 'Berlin', 'Paris', 'Madrid'],
    ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
    ['Java', 'Python', 'JavaScript', 'Banana'],
    ['Au', 'Ag', 'Ca', 'K']
]

let scorePoint = 0;

function checkOption(button){
    let selectedAnswer = button.innerText;
    let correctAnswer = answers[currentQuestion];
    
    if(selectedAnswer == correctAnswer){
        button.style.backgroundColor = "#aeffae";
        button.style.borderColor = "#16f516";
        scorePoint++;
        
    }
    else{
        button.style.backgroundColor = "#FFCCCB";
        button.style.borderColor = "#ef6563";
    }
    setTimeout(function(){
        currentQuestion++;
        if (currentQuestion >= questions.length){
            endQuiz();
        }
        else {
            changeQuestion();
        }
        
    }, 1000);

};


let currentQuestion = 0;
function changeQuestion() {

    let progressFill = document.getElementById("progress-fill");
    let progressPercentage = ((currentQuestion ) / questions.length) * 100;
    progressFill.style.width = progressPercentage + "%";

    let questionElement = document.getElementById("question");
    questionElement.innerText = questions[currentQuestion];

    let option1Element = document.getElementById("one");
    option1Element.innerText = options[currentQuestion][0];

    let option2Element = document.getElementById("two");
    option2Element.innerText = options[currentQuestion][1];

    let option3Element = document.getElementById("three");
    option3Element.innerText = options[currentQuestion][2];

    let option4Element = document.getElementById("four");
    option4Element.innerText = options[currentQuestion][3];

    let scoreElement = document.getElementById("score");
    scoreElement.innerText = "Score: " + scorePoint;

    let questionNumberElement = document.getElementById("question-number");
    questionNumberElement.innerText = "Question " + (currentQuestion+1) + " of 5";

    option1Element.style.backgroundColor = "";
    option1Element.style.borderColor = "";

    option2Element.style.backgroundColor = "";
    option2Element.style.borderColor = "";

    option3Element.style.backgroundColor = "";
    option3Element.style.borderColor = "";

    option4Element.style.backgroundColor = "";
    option4Element.style.borderColor = "";
  
};

function endQuiz(){
    localStorage.setItem("score", scorePoint);
    window.location.href = "results.html";
}

changeQuestion();



