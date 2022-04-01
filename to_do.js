const list = document.getElementById('list');
const button = document.getElementById('button');
const inputBox = document.getElementById('newTask');
const textContainer = document.getElementById('textContainer');

let addItem = () => {
    let listItem = document.createElement('li');
    listItem.innerHTML = inputBox.value;
    list.insertBefore(listItem, textContainer);
    inputBox.value = '';
}

button.addEventListener('click', addItem);

list.addEventListener('click', (e) => {
    if (e.target.tagName == "LI" && e.target.id != 'textContainer')
    e.target.remove();
})
