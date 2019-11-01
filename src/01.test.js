const doorToDoor = require('./01');

const volunteers = ['Sally', 'Jake', 'Brian', 'Hamid'];

const neighbourhoods = [
  'Central Valley',
  'Big Mountain',
  'Little Bridge',
  'Bricktown',
  'Brownsville',
  "Paul's Boutique",
  'Clay Park',
  'Fox Nest',
];

it('Challenge 01', () => {
  const actual = doorToDoor(volunteers, neighbourhoods);
  const expected = 2;

  expect(actual).toEqual(expected);
});
