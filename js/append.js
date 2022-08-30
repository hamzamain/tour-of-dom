// console.log('append dot js')
// const li = document.createElement('li')
// li.innerText = 'ha vai'
// const songs = document.getElementById('song-list');
// songs.appendChild(li)


const mainContainer = document.getElementById('main-container');

const section =document.createElement('section');
mainContainer.appendChild(section);

const h1 = document.createElement('h1')
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
section.appendChild(ul);

const li1  = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2  = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3  = document.createElement('li');
li3.innerText = 'Kala Vona';
ul.appendChild(li3);

// mainContainer.appendChild(section)
const dressSection = document.createElement('section');
dressSection.innerHTML = `
<h1> My new Dress Section </h1>
<ul>
<li> T-Shirt </li>
<li> Pant </li>
<li> Underware </li>
<li> Lunggi </li>
</ul>
`;
mainContainer.appendChild(dressSection);