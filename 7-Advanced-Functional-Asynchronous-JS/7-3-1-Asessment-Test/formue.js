let portfolio = {
  'ABC inc': [19, 5, 156],
  'Zone Corporation': [78, 10, 9],
  'Finance xyz': [40, 89, 2025],
  'Restaurant bonds': [100, 90, 36],
};

let portfolioSize = Object.values(portfolio).length;
let portfolioSumNOK = 0;
let portfolioSumCarbon = 0;

containerNode = document.getElementById('container');

function addPortfolio() {
  for (let i = 0; i < portfolioSize; i++) {
    containerNode.insertAdjacentHTML(
      'beforebegin',
      '<div>' +
        '<p>' +
        `${Object.keys(portfolio)[i]}` +
        '</p>Price per share: ' +
        `${Object.values(portfolio)[i][0]}` +
        ' NOK</p>' +
        '</p>Shares owned: ' +
        `${Object.values(portfolio)[i][1]}` +
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
    portfolioSumNOK += Object.values(portfolio)[i][0];
  }
  containerNode.insertAdjacentHTML(
    'beforebegin',
    '<div>' + '<p>Portfolio Sum:' + `${portfolioSumNOK}` + '</div>'
  );
}

addPortfolio();
addPortfolioSum();
