
// create  a list of questions
let all_questions = [
    {
        title: 'What is your favorite teacher and most handsome?',
        answers: { ans1: "rady", ans2: "him", ans3: "hyacinthe", ans4: "ronan" },
        correctAnswer: "ans4"
    },
    {
        title: ' Which is not valid data type in Javascript ',
        answers: { ans1: "Undefinded", ans2: "Undefinded", ans3: "float", ans4: "Number" },
        correctAnswer: "ans2"
    },
    {
        title: 'Which type of language is Javascript',
        answers: { ans1: " Programming", ans2: "HtScriptingml", ans3: "Markup", ans4: " None of the above" },
        correctAnswer: "ans1"
    },
    {
        title: 'By which javascript code is used',
        answers: { ans1: "Classes", ans2: " Methods/Functions", ans3: "RMI", ans4: "Events" },
        correctAnswer: "ans1"
    },
    {
        title: 'Which tag is used to write the javascript code',
        answers: { ans1: "<script>", ans2: "<sp>", ans3: " <javascript>", ans4: "<java>" },
        correctAnswer: "ans1"
    },

]

// creqte a function to display questions
function displayQuestion() {
    // Mey
    for (let allQuetoins of all_questions) {

        let cardForm = document.querySelector('.card-form-created');
        let ol = document.createElement('ol');
        let div = document.createElement('div');
        div.setAttribute('id', 'delete');
        // cardForm.appendChild(ol);
        let p = document.createElement('p');
        p.textContent = allQuetoins['title'];
        div.appendChild(p);
        ol.appendChild(div);
        cardForm.appendChild(ol);
        choiceAnswer = allQuetoins['answers']
        trueAnswer = allQuetoins['correctAnswer']
        

        for (let allAnswer in choiceAnswer) {
            let li = document.createElement('li');
            let label = document.createElement('label');
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'definition';
            label.textContent = choiceAnswer[allAnswer];
            li.appendChild(radio);
            li.appendChild(label);
            div.appendChild(li)
            
         
        
        }
        let i = document.createElement('i');
        i.className = 'fa fa-trash';
        ol.appendChild(i);
        
        
    }
}

displayQuestion()
function removeQuestion(event){
    if (event.target.className === 'fa fa-trash'){
        event.target.parentElement.remove()
      }
    console.log(event.target.className);
}
function addQuestion() {
    // Soklim
    // Get Value Input
    let inputQuestion = document.getElementById('quest').value;
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
    questions.push(newQuestion);
    console.log(questions);
    displayQuestion(questions);
    setInLocalStorage(questions);



}

function setInLocalStorage(questions) {

    localStorage.setItem('question', JSON.stringify(questions));
}

questions = [];

// Event Button
const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', addQuestion);

const btnRemove =document.querySelector('ol');
btnRemove.addEventListener('click',removeQuestion);