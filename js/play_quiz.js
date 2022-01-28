// create a function to display questions
function displayQuestion(){
    let newData = JSON.parse(localStorage.getItem('question'));
    let quizContainer = document.getElementById('quizContainer');
    let div = document.createElement('div');
    div.className = 'quizForm';
    document.body.appendChild(div);
    let old = document.querySelectorAll('.quizForm');
    if (old.length >1){
        old[0].remove();
    }
    for (let questionQuiz of newData){
        let form = document.createElement('form');
        let p = document.createElement('p');
        p.textContent = questionQuiz.question;
        form.appendChild(p);
        div.appendChild(form);
        for(ans of questionQuiz.answer){
            let optionAn = document.createElement('input');
            let br = document.createElement('br');
            let label = document.createElement('label');
            optionAn.type = 'radio';
            optionAn.name = 'answer';
            label = textContent = ans.option;
            form.append(optionAn);
            form.append(label);
            form.append(br);
            div.appendChild(form);
            quizContainer.append(div);
        }
    }
}
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












