const data = [
    {
        id: 1,
        name: 'PHILIP PRECILDA',
        title: 'Software Developer',
        description: 'A sample refers to a smaller, manageable version of a larger group. It is a subset containing the characteristics of a larger population. Samples are used in statistical testing when population sizes are too large for the test to include all possible members or observations. A sample should represent the population as a whole and not reflect any bias toward a specific attribute.',
        img: '../assets/test.jpg'
    },
    {
        id: 2,
        name: 'Philip Precilda1',
        title: 'Software Developer1',
        description: 'BUILD BUILD BUILD1',
        img: '../assets/luffy.jpg'
    },
    {
        id: 3,
        name: 'Philip Precilda2',
        title: 'Software Developer2',
        description: 'BUILD BUILD BUILD2',
        img: '../assets/luffy.jpg'
    },
    {
        id: 4,
        name: 'Philip Precilda3',
        title: 'Software Developer3',
        description: 'BUILD BUILD BUILD3',
        img: '../assets/luffy.jpg'
    },
    {
        id: 5,
        name: 'Philip Precilda4',
        title: 'Software Developer4',
        description: 'BUILD BUILD BUILD4',
        img: '../assets/luffy.jpg'
    }
]

const img = document.getElementById('img');
const name = document.getElementById('name');
const title = document.getElementById('title');
const description = document.getElementById('description');

let indexValue = 0;

// initial load window
window.addEventListener('DOMContentLoaded', function(){
    showContent();
})

// SHOW CONTENT
function showContent(){
    const item = data[indexValue];
    img.src = item.img;
    name.textContent = item.name;
    title.textContent = item.title;
    description.textContent = item.description;
}