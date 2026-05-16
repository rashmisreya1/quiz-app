let finalScore = localStorage.getItem("score");

let finalScoreElement = document.getElementById("score-description");
finalScoreElement.innerText = "You scored " + finalScore + " out of 5";

function endMessage(){
    let finalMessage = document.getElementById("message");
    if (finalScore == 1){
        finalMessage.innerText = "Keep trying! You can do better"
    }
    else if (finalScore == 2){
        finalMessage.innerText = "Not bad, but keep studying harder!"
    }
    else if (finalScore == 3){
        finalMessage.innerText = "Good effort! A solid average score"
    }
    else if (finalScore == 4){
        finalMessage.innerText = "Excellent! Almost a perfect score"
    }
    else if (finalScore == 5){
        finalMessage.innerText = "Absolute perfection! Brilliant job today"
    }
    else if(finalScore == 0){
        finalMessage.innerText = "Better luck next time!"
    }
    else{
        finalMessage.innerText = "No results to display"
    }
}

endMessage();

