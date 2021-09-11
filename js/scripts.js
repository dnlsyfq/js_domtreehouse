// 1: Set the text of the <h1> element
const h1 = document.querySelector('h1');
h1.textContent = 'My Activities List';

// 2: Set the color of the <h1> to a different color
h1.style.color = 'blue';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const p = document.querySelector('.desc');
p.innerHTML = `A list of <em>fun</em> things I want to do today`;

// 4: Set the class of the <ul> to 'list'
const ul = document.querySelector('ul');
ul.className = 'list';

// 5: Create a new list item and add it to the <ul>
const li = document.createElement('li');
li.innerHTML = '<input> Eat ice cream';
ul.appendChild(li);


// 6: Change all <input> elements from text fields to checkboxes
const input = document.querySelectorAll('input');
input.forEach(i => {
    i.setAttribute('type','checkbox')
});

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const button = document.createElement('button');
button.textContent = 'Delete';
document.querySelector('.extra').appendChild(button);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
button.addEventListener('click', () => {
    const container = document.querySelector('.container');
    container.removeChild(document.querySelector('.extra'));
});