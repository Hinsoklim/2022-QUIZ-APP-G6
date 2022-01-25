

// creqte a function to display questions
function displayQuestion( array ){
    // Mey 

    let div = document.createElement('div');
    div.className = 'quizForm';
    document.body.appendChild(div);

    
    let old = document.querySelectorAll('.quizForm');
    if (old.length >1){
        old[0].remove();
    }

    for (let questionQuiz of array){
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
            
        }
        
    }
    
}


function addQuestion(){
    // Soklim
    // Get Value Input
    let inputQuestion = document.getElementById('question').value;
    let inputAn1 = document.getElementById('option1').value;
    let inputAn2 = document.getElementById('option2').value;
    let inputAn3 = document.getElementById('option3').value;
    let inputAn4 = document.getElementById('option4').value;
    
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


    // setInLocalStorage(questions);
    
}

// function setInLocalStorage(questions){

//     localStorage.setItem('question',JSON.stringify(questions));
// }

questions = [];

// Event Button
const btnAdd = document.getElementById('btn-create');
btnAdd.addEventListener('click',addQuestion);




