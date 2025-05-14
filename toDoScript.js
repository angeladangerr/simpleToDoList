document.querySelector('#push').onclick = function(){

    // VALIDATION FOR EMPTY INPUT
    if(document.querySelector('#newtask input').value.length == 0){
        alert("field cannot be empty!")
    }

    // ADD A NEW TASK
    else{
        document.querySelector('#tasks').innerHTML 
        += `
            <div class="task">
                <span id="taskname">
                ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;


        // DELETE A TASK
        var current_task = document.querySelectorAll(".delete");
        for(var i=0; i<current_task.length; i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }


        // CROSS OFF A COMPLETED TASK
        var task = document.querySelectorAll(".task");
        for(var i=0; i<task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }


        // CLEAR INPUT FIELD AFTER EACH ENTRY
        document.querySelector("#newtask input").value = "";


        
    }
}