// Function Display Question
function displayQuestion( array ){
    let div = document.createElement('div');
    div.className = 'quizForm';
    div.id = 'editQuiz'
    document.body.appendChild(div);
    let old = document.querySelectorAll('.quizForm');
    if (old.length >1){
        old[0].remove();
    }
    for (let questionQuiz of array){
        let form = document.createElement('form');
        let p = document.createElement('p');
        let btnDelete = document.createElement('span');
        btnDelete.textContent = 'Delete';
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
            div.appendChild(form);
        }
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
    if (inputQuestion ==='' || inputAn1 === '' || inputAn2 === '' || inputAn3 ==='' || inputAn4 ===''){
        window.alert('put the question and answer!!')
    }else{
        let newQuestion = {};
        let answer = [];
        let Answer1 = {};
        let Answer2 = {};
        let Answer3 = {};
        let Answer4 = {};
        newQuestion['question'] = inputQuestion;
        questions.push(newQuestion);
        Answer1['option'] = inputAn1;
        Answer1['isCorrect'] = false;
        answer.push(Answer1);
        Answer2['option'] = inputAn2;
        Answer2['isCorrect'] = false;
        answer.push(Answer2);
        Answer3['option'] = inputAn3;
        Answer3['isCorrect'] = true;
        answer.push(Answer3);
        Answer4['option'] = inputAn4;
        Answer4['isCorrect'] = false;
        answer.push(Answer4);
        newQuestion['answer'] = answer;
        
        displayQuestion(questions);

    }
    // Function Local storage
    setInLocalStorage(questions);
}
function setInLocalStorage(questions){

    localStorage.setItem('question',JSON.stringify(questions));
}

// Delete quiz
function deleteQuiz(event){
    if (event.target.className === 'delete'){
        event.target.parentElement.remove();
    }
}

questions = [];

// Event Button===================

// Button ADD question 
const btnAdd = document.getElementById('btn-create');
btnAdd.addEventListener('click',addQuestion);
//  Button Delete Question



