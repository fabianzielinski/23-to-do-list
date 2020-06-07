const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const inputSerch = (e)=> {
   const searchText = e.target.value.toLowerCase();
   let tasks = [...liElements];
   tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
   ul.textContent = '';
   tasks.forEach(li=>ul.appendChild(li));
}

document.addEventListener('input', inputSerch);