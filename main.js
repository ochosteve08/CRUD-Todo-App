let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let msg = document.getElementById('msg');
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");


/*click and submit*/
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    formValidation();
});

/*form validation*/
let formValidation =()=>{
    if(textInput.value === ""){
        msg.innerHTML="Task cannot be blank";

    }
    else{

        msg.innerHTML="";

        acceptData();

        add.setAttribute("data-bs-dismiss","modal"); /*modal closing after clicking add button*/
        add.click();
       (()=>{add.setAttribute("data-bs-dismiss","");})();

    }
}


/*accept and store data*/
let data=[];
let acceptData=()=>{
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textArea.value
        });

    localStorage.setItem("data",JSON.stringify(data));

    createTask() ;
}



/*create new task*/
let createTask=()=>{

    tasks.innerHTML="";

    data.map((x,y)=>{


        return  (tasks.innerHTML +=
              ` <div id=${y} >
                    <span class="fw-bold">${x.text}</span>
                    <span class="small text-secondary">${x.date}</span>
                    <p>${x.description}</p>
                    <span class="options">
                     <i data-bs-toggle="modal" data-bs-target="#form" onClick="editTask(this)" class="fas fa-edit"></i>
                     <i onCLick="deleteTask(this);createTask()" class="fas fa-trash-alt"></i>
                    </span>
                </div>`);

    })

        resetForm();
}


/*delete task*/
let deleteTask=(event)=>{
    event.parentElement.parentElement.remove();
    data.splice(event.parentElement.parentElement.id,1);
    localStorage.setItem("data",JSON.stringify(data));
}


/*edit task*/
let editTask=(event)=>{
    let selectedParent =event.parentElement.parentElement;
    textArea.value=selectedParent.children[2].innerHTML;
    dateInput.value=selectedParent.children[1].innerHTML;
    textInput.value=selectedParent.children[0].innerHTML;
    deleteTask(event);
  };


/* reset form fields*/
let resetForm=()=>{
    textInput.value="";
    dateInput.value="";
    textArea.value="";

}
 
/*retrieve data from storage*/
(()=>{
    data= JSON.parse(localStorage.getItem("data"))||[];
    createTask();
})();
