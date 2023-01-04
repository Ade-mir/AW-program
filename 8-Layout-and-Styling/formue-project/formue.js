// Welcome message

let firstName = 'Thorvald';

let welcomeMessageNode = document.getElementById('welcomeMessage');

function updateName() {
  welcomeMessageNode.innerHTML = 'Velkommen til din portefølje ' + firstName;
}
updateName();

// End welcome message

let randomColor = function randomColorGen() {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

let portfolio = {
  'ABC inc': [10, 5, 156],
  'Zone Corporation': [7, 10, 9],
  'Finance xyz': [4, 89, 2025],
  'Restaurant bonds': [10, 90, 36],
  'Formue.no': [10, 90, 36],
  Oljefondet: [10, 90, 36],
};

let portfolioSize = Object.values(portfolio).length;
let portfolioSumNOK = 0;
let portfolioSumCarbon = 0;
let portfolioCash = 10000;
let welcomeMessage = '';

let containerNode = document.getElementById('container');

function addPortfolio() {
  for (let i = 0; i < portfolioSize; i++) {
    containerNode.insertAdjacentHTML(
      'beforebegin',
      '<div class = "stock" >' +
        '<h1>' +
        `${Object.keys(portfolio)[i]}` +
        '</h1><p>Price per share: ' +
        `${Object.values(portfolio)[i][0]}` +
        ' NOK' +
        '<p>Shares owned: ' +
        `${Object.values(portfolio)[i][1]}` +
        '</p>' +
        '<p>Share value: ' +
        `${Object.values(portfolio)[i][0] * Object.values(portfolio)[i][1]}` +
        '</p>' +
        '<p>Carbon Footprint: ' +
        `${Object.values(portfolio)[i][2]}` +
        ' tonns/CO2' +
        '</p></div>'
    );
  }
}

function addPortfolioSum() {
  for (let i = 0; i < portfolioSize; i++) {
    portfolioSumNOK +=
      Object.values(portfolio)[i][0] * Object.values(portfolio)[i][1];
  }
  containerNode.insertAdjacentHTML(
    'beforebegin',
    '<div>' +
      '<h2>Porteføljen verdi: ' +
      `${portfolioSumNOK}` +
      ' NOK</h2></div>'
  );
  containerNode.insertAdjacentHTML(
    'beforebegin',
    '<div>' + '<h2>Portfolio Sum: ' + `${portfolioCash}` + ' NOK</h2></div>'
  );
}

addPortfolioSum();
addPortfolio();

// Pie Chart

let ctx = document.getElementById('myPieChart').getContext('2d');
let myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [], // labels for the pie slices
    datasets: [
      {
        data: [], // data for each slice
        backgroundColor: [randomColor(), randomColor(), randomColor()], // colors for each slice
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontColor: 'white',
      },
    },
  },
});

function addPortfolioToPie() {
  for (let i = 0; i < portfolioSize; i++) {
    Object.values(myPieChart)[3].data.datasets[0].data.push(
      Object.values(portfolio)[i][0] * Object.values(portfolio)[i][1]
    );
    Object.values(myPieChart)[3].data.datasets[0].backgroundColor.push(
      randomColor()
    );
    Object.values(myPieChart)[3].data.labels.push(Object.keys(portfolio)[i]);
  }
  myPieChart.update();
}

addPortfolioToPie();

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

let menuOpen = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('open');
    menuOpen = true;
    console.log('test');
  } else {
    // ITS HERE THE BUG
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    menuOpen = false;
    console.log('test');
  }
}
