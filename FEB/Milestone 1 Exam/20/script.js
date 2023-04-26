//Dynamically Addint List Items to an Ordered List

//Visit https://pwskills.com/course/Full-Stack-Web-developememt page and look for "What you'll learn" section. The section consists of a list of information on what you will be learning in the course. You are required to write a JavaScript program that stores a pre-existing array of list items. On each button click, the program should add a new list item in sequential order. The Program should verify if any remaining items are available in the list item array and add the next item to the list accordingly. If no items  are left, the function should display a message indicating that all items have been added. 


const listItems = ['Item 1', 'Item 2' , 'Item 3' , 'Item 4', 'Item 5'];
let currentItem = 0;

const addButton = document.getElementById('add-btn');
const list = document.getElementById('list');
const message = document.getElementById('msg');

function addListItem() {
    if (currentItem < listItems.length) {
        const newItem = document.createElement('li');
        newItem.textContent = listItems[currentItem];
        list.appendChild(newItem);
        currentItem++;
    } else {
        message.textContent = 'All items have been added.';
    }
}


addButton.addEventListener('click', addListItem);