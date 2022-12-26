var votes = [
  { id: 1, party: 'Piratpartiet' },
  { id: 2, party: 'AP' },
  { id: 3, party: 'Piratpartiet' },
  { id: 4, party: 'SV' },
  { id: 5, party: 'Piratpartiet' },
  { id: 6, party: 'MDG' },
  { id: 7, party: 'Høyre' },
  { id: 8, party: 'Frp' },
  { id: 9, party: 'MDG' },
  { id: 10, party: 'Høyre' },
];
let allVotesCombined = votes.reduce(function (accu, current) {
  return {
    ...accu,
    [current.id]: [current.party],
  };
}, {});
console.log(allVotesCombined);
