let todoList = [];

displyTodoItems()
function addTodo(){
    let todoInputElement = document.querySelector('#todo-input');
    let todo = todoInputElement.value;
    let todoDateElement = document.querySelector('#todo-date');
    let  date = todoDateElement.value;

    todoList.push({item: todo, dueDate: date});
    todoInputElement.value='';
    todoDateElement.value='';
    displyTodoItems();
}

function displyTodoItems()
{
    let container = document.querySelector('.todo-container');
    container.innerText='';
    let newHtml='';
     for(let i=0; i < todoList.length; i++)
     {
        let {item, dueDate} = todoList[i];
        newHtml += `
       \n <span>${item}</span>
       <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i} , 1); displyTodoItems(); " >Delete</button>
        `
     }

     container.innerHTML = newHtml;
}