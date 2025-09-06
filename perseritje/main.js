const questionst=[
{q:"what is 5 + 3",answer: "8"},
{q:"name a programming language with shortcut JS",answer:"Javascript" },
{q:"Type yes to continue",answer: "Yes"},
];

function checkAnswer(correct,userInput){
const pattern = new RegExp("^"+correct+"$","i");
return pattern.test(userInput.trim());
}

document.getElementById("startQuiz").addEventListener("click", function(){
let score=0;

for(let i=0;i<questionst.length; i++){
    const userInput = prompt(questionst[i].q);

    if(checkAnswer(questionst[i].answer, userInput)){
        score++;
        alert("Correct!");
    }
    else{
        alert("Wrong! The correct answer was"+questionst[i].answer);
    }
}

document.getElementById("Results").textContent =
"You scored"+score+"out of"+questionst.length;

})