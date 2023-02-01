let addTask=document.getElementById("add-task");
let input =document.getElementById("input-task");
let taskContainer = document.getElementById("task-container");



addTask.addEventListener("click",(event)=>{

    let task = document.createElement('div');
    task.classList.add('task');
    let li=document.createElement('li');
    li.innerText=`${input.value}`;
    task.appendChild(li);
    //console.log("clicked")
   
    let checkButton = document.createElement('button');
    checkButton.innerHTML=`<i class="far fa-check-circle"></i>`;
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML=` <i class="fas fa-trash-alt"></i>`;
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton);

    if(input.value=== ""){
        alert("please enter a task");
        }
        else{
            taskContainer.appendChild(task);
        }

        input.value="";

        checkButton.addEventListener("click",(event)=>{
        console.log("Check");
        checkButton.parentElement.style.textDecoration="line-through";
})

        deleteButton.addEventListener("click",(event)=>{
            let target = event.target;
            target.parentElement.parentElement.remove();
        });
 
})


