const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// == const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    //want to delete
    const li = event.target.parentElement;
    li.remove(); 
    //li id와 toDo.id가 같을 경우 filter함수를 이용하여 제외한다.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.style = "list-style:none";
    li.className = "mt-1 mb-1";
    const span = document.createElement("span");
    span.className = "px-2";
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.style = "color:gray";
    button.className = "btn";
    button.addEventListener("click", deleteToDo);
    //create <span> inside of the <li>
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), //looks like random num
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);   
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); //transform string to array
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);  //operate for each item about array
}