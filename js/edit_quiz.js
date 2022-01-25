
// create  a list of questions
let all_questions = []

// creqte a function to display questions
function displayQuestion( questions ){
    // Mey

}


function addQuestion(){
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

function setInLocalStorage(questions){

    localStorage.setItem('question',JSON.stringify(questions));
}

questions = [];

// Event Button
const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click',addQuestion);



