// Function Display Question
function displayQuestion(array){
    let div = document.createElement('div');
    
    div.className = 'quizForm';
    div.id = 'editQuiz';
    document.body.appendChild(div);
    let old = document.querySelectorAll('.quizForm');
    if (old.length >1){
        old[0].remove();
    }
    for (let questionQuiz of array){
        let bossForm = document.createElement('div');
        let form = document.createElement('form');
        form.dataset.numberQuestion= questionQuiz.idQuestion;
        let p = document.createElement('p');
        let btnDelete = document.createElement('span');
        btnDelete.textContent = 'Delete';
        // add event on button delete on click
        btnDelete.addEventListener('click',deleteQuiz);
        btnDelete.classList.add('delete')
        btnDelete.id = 'delete'
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
            form.appendChild(btnDelete);
            bossForm.appendChild(form);
        }
        div.appendChild(bossForm);
    }
}

// Function Add question
function addQuestion() {
    // Get Value Input
    let inputQuestion = document.getElementById('question').value;
    let inputAn1 = document.getElementById('option1').value;
    let inputAn2 = document.getElementById('option2').value;
    let inputAn3 = document.getElementById('option3').value;
    let inputAn4 = document.getElementById('option4').value;
    let goodAnswer = document.querySelector('.trueAnswer');
    if (inputQuestion ==='' || inputAn1 === '' || inputAn2 === '' || inputAn3 ==='' || inputAn4 ===''){
        window.alert('put the question and answer!!')
    } else{
        let newQuestion = {};
        let answer = [];
        let Answer1 = {};
        let Answer2 = {};
        let Answer3 = {};
        let Answer4 = {};
        newQuestion['idQuestion'] = question_id 
        question_id += 1
        newQuestion['question'] = inputQuestion;
        questions.push(newQuestion);
        Answer1['option'] = inputAn1;
        if (goodAnswer[0].value === goodAnswer.value){
            Answer1['isCorrect'] = true;
        }else{
            Answer1['isCorrect'] = false;
        }
        answer.push(Answer1);
        Answer2['option'] = inputAn2;
        if (goodAnswer[1].value === goodAnswer.value){
            Answer2['isCorrect'] = true;
        }else{
            Answer2['isCorrect'] = false;
        }
        answer.push(Answer2);
        Answer3['option'] = inputAn3;
        if (goodAnswer[2].value === goodAnswer.value){
            Answer3['isCorrect'] = true;
        }
        else{
            Answer3['isCorrect'] = false;
        }
        answer.push(Answer3);
        Answer4['option'] = inputAn4;

        if (goodAnswer[3].value === goodAnswer.value){
            Answer4['isCorrect'] = true;
        }
        else{
            Answer4['isCorrect'] = false;
        }
        answer.push(Answer4);
        newQuestion['answer'] = answer;
    }
    // at to local storage
    setInLocalStorage(questions)
    // display question
    displayQuestion(questions);
}

// function set to local storage
function setInLocalStorage(){
    localStorage.setItem('question',JSON.stringify(questions));
}

// function delete quiz
function deleteQuiz(event){
    if (event.target.className === 'delete'){
       let formParent = event.target.parentElement.firstChild.textContent;
       for(indexQuestion in questions){
           if (formParent === questions[indexQuestion].question){
               questions.splice(indexQuestion,1);
           }
       }
       setInLocalStorage(questions);
       displayQuestion(questions);
    }
}
// id of the question 
let question_id = 0
// all question
questions = [];
// Button ADD question 
const btnAdd = document.getElementById('btn-create');
btnAdd.addEventListener('click',addQuestion);
