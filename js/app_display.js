
// Function Remove Button Play Quiz
function removebtn(){
    let btnPlay = document.getElementById('btnPlayQuiz');
    btnPlay.style.display = 'none';
    displayQuiz()
}
// Function Display Quiz 
function displayQuiz(){
    container.style.display = 'block';
}
// Button Play Quiz Event Click 
let btn = document.getElementById('btnPlay');
btn.addEventListener('click',removebtn);
// Remove quiz
let container = document.getElementById('container');
container.style.display = 'none';

// Get Value From Input 







