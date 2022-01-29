

// function to display questions on the Dom
function displayQuestion() {
    // get data from local storage
    let newData = getData();
    // all qestion
    let quizContainer = document.getElementById('quizContainer');
    let div = document.createElement('div');
    div.className = 'quizForm';
    document.body.appendChild(div);
    let old = document.querySelectorAll('.quizForm');
    if (old.length > 1) {
        old[0].remove();
    }
    for (let questionQuiz of newData) {
        let form = document.createElement('form');
        let p = document.createElement('p');
        p.textContent = questionQuiz.question;
        form.appendChild(p);
        div.appendChild(form);
        for (ans of questionQuiz.answer) {
            let optionAn = document.createElement('input');
            let br = document.createElement('br');
            let label = document.createElement('label');
            optionAn.type = 'radio';
            optionAn.name = 'answer';
            optionAn.value = ans.option;
            label = textContent = ans.option;
            form.append(optionAn);
            form.append(label);
            form.append(br);
            div.appendChild(form);
            quizContainer.append(div);
        }
    } 
    
}

// Check result =======================

function checkGoodAnswer() {
    let countScore = 0;
    let questions = getData();
    let AllQuestion = document.querySelectorAll('input');

    for (let question of questions) {
        for (let answer of question.answer) {
            for (a of AllQuestion){
                if (a.checked){
                    if (answer.option === a.value && answer.isCorrect === true){
                        countScore+= 1
                    }
                }
            }
        }
    }
    return countScore;
}

// function display score
function displayScore(){
    displayQuiz(false);
    let divScore = document.createElement('div');
    divScore.className = 'score';
    let footer = document.createElement('footer');
    footer.textContent = 'App Quiz Group 6 Web "B 2022"'
    let h2 = document.createElement('h2');
    h2.textContent = 'You score :' + checkGoodAnswer();
    divScore.appendChild(h2);
    document.body.appendChild(divScore);
    document.body.appendChild(footer);
}

// function get data
function getData() {
    return JSON.parse(localStorage.getItem('question'));
}

// function play quiz
function playQuiz() {
    let btnPlay = document.getElementById('btnPlayQuiz');
    btnPlay.style.display = 'none';
    displayQuiz(true)
    displayQuestion()
}
//  hide or show the quiz
//  @param isDisplayed ; if true display  - if false hide
function displayQuiz(isDisplayed) {
    let display = 'none';
    if (isDisplayed) {
        display = 'block'
    }
    quizContainer.style.display = display;
    btnSubmit.style.display = display;
}
// Button Play Quiz Event Click 
let btnPlay = document.getElementById('btnPlay');
btnPlay.addEventListener('click', playQuiz);
// get quiz container from html
const quizContainer = document.getElementById('quizContainer');
// Button submit Quiz 
const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', displayScore)

displayQuiz(false)

