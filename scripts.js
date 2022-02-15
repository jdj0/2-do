//Selectors
const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");

//Events Listeners
toDoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event){
    //Prevents from from submitting
    event.preventDefault()
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    //Create LI
    const newToDo = document.createElement("li");
    newToDo.innerText = "Hey";
    newToDo.classList.add("todo-item");
    todoDiv.appendChild(newToDo);
    //Check off button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class = 'fa-solid fa-square-plus'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    toDoList.appendChild(todoDiv);
}