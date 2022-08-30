const mainContainer = document.getElementById('main-container');

const newSection = document.createElement('section');
mainContainer.appendChild(newSection);

const h1 = document.createElement('h1');
h1.innerText = 'Amar baper hotel';
newSection.appendChild(h1);

const ul = document.createElement('ul');
newSection.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'Amar Bap';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Amar Ma';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Amar Choto Bon';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Ami';
ul.appendChild(li4);