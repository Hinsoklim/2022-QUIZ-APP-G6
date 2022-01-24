
// create  a list of questions
let all_questions = []

// creqte a function to display questions
function displayQuestion( questions ){
    // phanith
}


function playQuiz(){
    let btnPlay = document.getElementById('btnPlayQuiz');
    btnPlay.style.display = 'none';

    displayQuiz(true)
}


//  hide or show the quiz
//  @param isDisplayed ; if true display  - if false hide
function displayQuiz(isDisplayed){
    let   display = 'none';
    if (isDisplayed){
        display = 'block'
    }
    quizContainer.style.display = display;
}


// Button Play Quiz Event Click 
let btnPlay = document.getElementById('btnPlay');
btnPlay.addEventListener('click',playQuiz);

const quizContainer = document.getElementById('quizContainer');
displayQuiz(false)







