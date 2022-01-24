

// Function ADD Quiz
function StoreDataInput(storeData){
    storeData = []
    questionStore = {};
    answerStore = {};

    // Get Value input Form
    let inputQuestion = document.getElementById('quest').value;
    let inputAn1 = document.getElementById('option1').value;
    let inputAn2 = document.getElementById('option2').value;
    let inputAn3 = document.getElementById('option3').value;
    let inputAn4 = document.getElementById('option4').value;
    questionStore['Question'] = inputQuestion;
    
    answerStore['answer1'] = inputAn1;
    answerStore['answer2'] = inputAn2;
    answerStore['answer3'] = inputAn3;
    answerStore['answer4'] = inputAn4;

    storeData.push(questionStore);
    storeData.push(answerStore);

    let form = document.createElement('form');
    


    // localStorage.setItem('form',storeData);
    
    
}





// Event Button
let btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click',StoreDataInput);



