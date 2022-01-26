



function playQuiz(){
    let btnPlay = document.getElementById('btnPlayQuiz');
    btnPlay.style.display = 'none';
    displayQuiz(true)
    displayQuestion()
}
//  hide or show the quiz
//  @param isDisplayed ; if true display  - if false hide
function displayQuiz(isDisplayed){
    let   display = 'none';
    if (isDisplayed){
        display = 'block'
    }
    quizContainer.style.display = display;
    btnSubmit.style.display = display;
}
// Button Play Quiz Event Click 
let btnPlay = document.getElementById('btnPlay');
btnPlay.addEventListener('click',playQuiz);
const quizContainer = document.getElementById('quizContainer');
const btnSubmit = document.getElementById('btnSubmit');
displayQuiz(false)












