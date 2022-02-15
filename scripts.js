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
    console.log("hello!")
}