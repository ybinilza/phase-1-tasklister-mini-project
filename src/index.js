document.addEventListener("DOMContentLoaded", () => {

  addingEventListeners();
 
});



//Get the form and adding EventListner


function addingEventListeners()
{
document.getElementById("create-task-form").addEventListener("submit",handleFormSubmit);
  
}



function handleFormSubmit(e) {
  e.preventDefault()
 const task = e.target[0].value;
 displayTask(task);
  
}

function displayTask(task) {

const taskUl= document.getElementById("tasks")
const taskLi=document.createElement("li");
const deleteBtn=document.createElement("button");
deleteBtn.textContent="x";
deleteBtn.addEventListener("click",deleteTask)
taskLi.textContent=task + "  ";
taskLi.appendChild(deleteBtn);
taskUl.appendChild(taskLi)

}



function deleteTask(e) {
e.target.parentNode.remove();
}

