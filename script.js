function addTask(){
    let input = document.getElementById("taskInput");

    let li = document.createElement("li");

    li.innerText = input.value;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function saveNote(){
    let note = document.getElementById("noteText").value;

    localStorage.setItem("myNote",note);

    document.getElementById("savedMessage").innerText = "Note Saved";
}

let timeLeft = 1500;
function startTimer(){
    let timer = setInterval(function(){
        let minutes = Math.floor(timeLeft/60);

        let seconds = timeLeft % 60 ;

        document.getElementById("time").innerText = minutes + ":" + seconds ;

        timeLeft--;
         
        if(timeLeft < 0){
            clearInterval(timer);
        }
    },1000);
}