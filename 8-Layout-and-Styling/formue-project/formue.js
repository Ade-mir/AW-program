// Welcome message

let firstName = 'Thorvald';
let lastName = 'Hansen';

const welcomeMessageNode = document.getElementById('welcomeMessage');

function updateName() {
  welcomeMessageNode.innerHTML = 'Velkommen til din portefølje ' + firstName;
}
updateName();

// Random color generator for pie chart

let randomColor = function randomColorGen() {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

// Portfolio
// { 'Fund name': [Price per share, Shares owned, CO2 in tonns] }

let portfolio = {
  'Handelsbanken Bærekraftig Energi': [19, 503400, 156],
  'First Norden Fokus': [115, 1078000, 9],
  'JPM US Growth A (USD)': [27, 898999, 2025],
  'JPM China A (USD)': [48, 900890, 36],
  'Odin Sverige D': [64, 35700, 36],
  'DNB Nordic Small Cap Retail': [10, 82340, 36],
};

let portfolioSize = Object.values(portfolio).length;
let portfolioSumNOK = 0;
let portfolioSumCarbon = 0;

const containerNode = document.getElementById('container');

// Adding portfolio data To HTML

addPortfolioSum();
addPortfolio();

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

// Adding total value of portfolio in NOK

function addPortfolioSum() {
  for (let i = 0; i < portfolioSize; i++) {
    portfolioSumNOK +=
      Object.values(portfolio)[i][0] * Object.values(portfolio)[i][1];
  }
  containerNode.insertAdjacentHTML(
    'beforebegin',
    '<div>' +
      '<h6>Porteføljen din har en samlet verdi av: ' +
      `${portfolioSumNOK}` +
      ' NOK</h6></div>'
  );
}

// function addPortfolioSum() {
//   for (let i = 0; i < portfolioSize; i++) {
//     portfolioSumNOK +=
//       Object.values(portfolio)[i][0] * Object.values(portfolio)[i][1];
//   }
//   containerNode.insertAdjacentHTML(
//     'beforebegin',
//     '<div>' +
//       '<h6>Porteføljen din har en samlet verdi av: ' +
//       `${portfolioSumNOK}` +
//       ' NOK</h6></div>'
//   );
// }

// Adding pie chart from API: https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js

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
        fontColor: 'black',
      },
    },
  },
});

// Adding portfolio data to piechart and updating to display in HTML

addPortfolioToPie();

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
