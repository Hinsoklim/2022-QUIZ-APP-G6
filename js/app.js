function removebtn(){
    let btnPlay = document.getElementById('btnPlayQuiz');
    btnPlay.style.display = 'none';
    displayQuiz()
}

let btn = document.getElementById('btnPlay');
btn.addEventListener('click',removebtn);

function displayQuiz(){
    container.style.display = 'block';
}
let container = document.getElementById('container');
container.style.display = 'none';