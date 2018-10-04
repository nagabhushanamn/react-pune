

import 'bootstrap/dist/css/bootstrap.css';


//----------------------------------------------------
// using DOM api

let alertBox = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');

showBtn.addEventListener('click', e => {
    alertBox.style.display = ''
});
hideBtn.addEventListener('click', e => {
    alertBox.style.display = 'none'
});
document.querySelector('.btn-success')
    .addEventListener('click', e => {
        alertBox.innerText = "Hello.."
    });

//----------------------------------------------------


// Timer API

const timeBadge = document.querySelector('.badge');

setInterval(() => {
    let now = new Date().toLocaleTimeString();
    timeBadge.innerText = now;
}, 1000);

//----------------------------------------------------


// XHR / Fetch API


const loadTodosBtn = document.querySelector('.btn-dark');
loadTodosBtn.addEventListener('click', e => {
    const api = "https://jsonplaceholder.typicode.com/todos?_limit=5";
    let promise = fetch(api);
    promise
        .then(response => response.json())
        .then(todos => {
            let arr = [];
            todos.forEach(todo => {
                let template = `
                    <li class="list-group-item">
                        <span class="badge badge-dark">${todo.id}</span>
                        <label>${todo.title} - ${todo.completed}</label>
                    </li>
                `;
                arr.push(template);
            });
            document.getElementById('todo-list').innerHTML = arr.join(" ");
        })
});