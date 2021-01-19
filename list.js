// Store links to elements on page
let button = document.getElementById('button');
let target = document.getElementById('target');

// Array of items
let items = ['Product 1', 'Product 2', 'Other shit', 'Daymn, Email clothes are Esexy'];

// Create Event listener
button.addEventListener('click', e => {

    // Clear the targets html
    target.innerHTML = '';

    // Loop over each item array
    items.forEach(item => {

        // Create element, chance HTML text and append to target
        let element = document.createElement('div');
        element.innerHTML = item;
        target.appendChild(element)
    })
})

