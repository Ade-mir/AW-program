// Exercise 1

let h1Node = document.createElement('h1');
h1Node.innerHTML = 'Heading';

let h2Node = document.createElement('h2');
h2Node.innerHTML = 'Subheading';

let pNode = document.createElement('p');
pNode.innerHTML = 'Hello World';

// Exercise 2
let ulNode = document.createElement('ul');

let liNode = document.createElement('li');
liNode.innerHTML = 'Item 1';
let liNode2 = document.createElement('li');
liNode2.innerHTML = 'Item 2';
let liNode3 = document.createElement('li');
liNode3.innerHTML = 'Item 3';
let liNode4 = document.createElement('li');
liNode4.innerHTML = 'Item 4';

ulNode.append(liNode, liNode2, liNode3, liNode4);

let mainNode = document.getElementById('main');
mainNode.append(h1Node, h2Node, pNode, ulNode);

mainNode.removeChild(pNode);

document.title = 'Solution';

// Exercise 3
h1Node.innerHTML = 'Nyheter';
h2Node.innerHTML = 'Fra norske kilder';

liNode.innerHTML = '';
liNode2.innerHTML = '';
liNode3.innerHTML = '';
liNode4.innerHTML = '';

let a1Node = document.createElement('a');
liNode.append(a1Node);
a1Node.innerText = 'vg.no';
a1Node.setAttribute('href', 'https://www.vg.no');

let a2Node = document.createElement('a');
liNode2.append(a2Node);
a2Node.innerText = 'dagbladet.no';
a2Node.setAttribute('href', 'https://www.db.no');

let a3Node = document.createElement('a');
liNode3.append(a3Node);
a3Node.innerText = 'nrk.no';
a3Node.setAttribute('href', 'https://www.nrk.no');

let a4Node = document.createElement('a');
liNode4.append(a4Node);
a4Node.innerText = 'aftenposten.no';
a4Node.setAttribute('href', 'https://www.aftenposten.no');

h1Node.innerHTML = 'Film og spillnyheter';
h2Node.innerHTML = 'Fra nrk.no';

ulNode.removeChild(liNode4);
ulNode.removeChild(liNode3);

// Exercise 4

// Image 1
a1Node.innerText = '';
let img1 = document.createElement('img');
img1.setAttribute(
  'src',
  'https://gfx.nrk.no/RQuT5S6N_k0hBKQ2ldhE6AZ_ztdOPcHhyq88JWTM33Ng.jpg'
);
liNode.prepend(img1);
let h3Node = document.createElement('h3');
h3Node.innerText = 'Woody Allen inngikk forlik med Amazon';
a1Node.append(h3Node);

// Image 2
a2Node.innerText = '';
let img2 = document.createElement('img');
img2.setAttribute(
  'src',
  'https://gfx.nrk.no/72Mx3Ozh03bdT-V9XR0UBgjKmPNcQ5Jw3TbZkFeAQfNg.jpg'
);
liNode2.prepend(img2);
let h3Node2 = document.createElement('h3');
h3Node2.innerText = 'Dæven søkke dette var bra';
a2Node.append(h3Node2);

// Exercise 5
document.title = 'Exercises';

let h1Node2 = document.createElement('h1');
h1Node2.innerHTML = 'Some other text';
mainNode.append(h1Node2);

mainNode.style.minHeight = '500px';
mainNode.style.width = '50%';
mainNode.style.margin = '0 auto';
mainNode.style.textAlign = 'center';
liNode.style.listStyle = 'none';
liNode2.style.listStyle = 'none';
ulNode.style.padding = '0';

let backgroundNode = document.querySelector('body');
backgroundNode.style.backgroundColor = '#AE1F00';
backgroundNode.style.color = 'white';
h3Node.style.color = 'white';
h3Node2.style.color = 'white';
a1Node.style.textDecoration = 'none';
a2Node.style.textDecoration = 'none';
mainNode.style.backgroundColor = '#00AE76';

// Exercise 6
document.title = 'Solutions';
h1Node.innerHTML = 'Heading';
h2Node.innerHTML = 'Subheading';

a1Node.removeChild(h3Node);
a2Node.removeChild(h3Node2);
liNode.removeChild(img1);
liNode2.removeChild(img2);
mainNode.removeChild(h1Node2);
ulNode.removeChild(liNode, liNode2, liNode3, liNode4);
liNode.removeChild(a1Node, a2Node, a3Node, a4Node);
