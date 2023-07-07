// let addTodo = (event) => {
//     event.preventDefault()
//     console.log("function call")
// }
// let form = document.getElementById("todo");



let form = document.forms.todo;
console.log(form);
let formData;
let addTodoBtn = document.getElementById("addTodo");
let listArray = [];
addTodoBtn.addEventListener("click", (event) => {
    event.preventDefault();
    formData = new FormData(form);
    console.log(formData.get("todo"));
    listArray.push(formData.get("todo"));
    let todoList = document.getElementById("todoList");
    todoList.innerHTML='';
    listArray.forEach(todo => {
        todoList.innerHTML += "<li>" + todo + "</li>"
    });
    document.getElementById("todoInput").value = '';
})
