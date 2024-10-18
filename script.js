numStudents=0
autoC = false



function increment(){
    numStudents++
    studentDis = document.getElementById("count-el")
    studentDis.innerHTML = numStudents
}
function save(){
    saves = document.getElementById("save-atmp")
    saves.innerHTML += numStudents + " - "
}
let intervalId;

function auto() {
    autoC = !autoC;

    if (autoC) {

        intervalId = setInterval(increment, 250);
    } else {

        clearInterval(intervalId);
    }
}
function reset(){
    numStudents=0
    studentDis = document.getElementById("count-el")
    studentDis.innerHTML = numStudents
}


//Title = Student Counter




