const toDoList = [];

const   form = document.querySelector('form');
const   ul = document.querySelector('ul');
const   taskNumber = document.querySelector('h3 span');
const   listItems = document.getElementsByClassName('task');
const   input = document.querySelector('input');
const   search = document.querySelector('input:last-child');

const renderList = ()=> {
    ul.textContent ='';
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    });
}

const removeTask = (e)=> {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    renderList();
    taskNumber.textContent = listItems.length;
}

const inputSearch = (e)=> {
        const searchText = e.target.value.toLowerCase();
        let tasks = toDoList;
        tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
        ul.textContent = '';
        tasks.forEach(li=>ul.appendChild(li));
 }

const addTask = (e)=> {
    e.preventDefault();
    const titleTask = input.value;
    if(titleTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = `${titleTask}<button>Usun</button>`;
    toDoList.push(task);
    renderList();
    ul.appendChild(task);
    input.value = '';
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);
search.addEventListener('input', inputSearch);