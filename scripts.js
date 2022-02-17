//Selectors
const toDoInput = document.querySelector(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");

//Events Listeners
toDoButton.addEventListener("click", addTodo);
toDoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(event){
    //Prevents from from submitting
    event.preventDefault()
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    //Create LI
    const newToDo = document.createElement("li");
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add("todo-item");
    todoDiv.appendChild(newToDo);
    //Check off button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fa-solid fa-square-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    toDoList.appendChild(todoDiv);
    //Clear Todo input value
    toDoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //Delete todo
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }

    //Check todo
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}