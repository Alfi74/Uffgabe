const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Hier wird die funktion zum erstellen der neuen HTML elemente aufgerufen
// plus der saveData Funktion

function neueUffgabe() {
    if(inputBox.value === '') {
        alert("Ei her, du muscht scho was eigebe");
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        }
        inputBox.value = '';
        saveData();
}

// Das 'Abhören' des Klicks event und löschen events + aufrufen der saveData funktion 

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// In dieser funktion werden die Daten auf dem Browser gespeichert damit sie nicht verloren gehen,
// und bei neu öffnen des Browser wiedergegeben

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();

// Entertaste wird hier zum Klicken des Buttons verwendet

let text = document.getElementById('input-box');
let btn = document.getElementById('btn');

text.addEventListener('keyup', e => {
    e.preventDefault();
    if(e.keyCode === 13) {        
        btn.click();
    }
})

