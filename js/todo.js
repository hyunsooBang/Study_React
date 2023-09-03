const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //const -> let로 상수-> 변수로 변경

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} // 배열모양자체를 스트링 형식으로 변경

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  //filter의 함수 리턴값이 true인 값만 저장됨 (false 걸러짐) id는 number
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //중복값 구별
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    //parse는 스트링을 다시 배열 객체로 전환시켜줌
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //todo 배열값 로컬저장소와 동기화
  parsedToDos.forEach(paintToDo);
}