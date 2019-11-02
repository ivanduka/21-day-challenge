const { doorToDoor } = require('./app');

describe('Challenge 01', () => {
  it('works', () => {
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

    const actual = doorToDoor(volunteers, neighbourhoods);
    const expected = 2;

    expect(actual).toEqual(expected);
  });
});

const { interviewAnswer } = require('./app');

describe('Challenge 02', () => {
  it('arts funding', () => {
    const actual = interviewAnswer('arts funding');
    const expected = "We'll have to get creative!";

    expect(actual).toEqual(expected);
  });

  it('economy', () => {
    const actual = interviewAnswer('economy');
    const expected = 'Time is money.';

    expect(actual).toEqual(expected);
  });

  it('transportation', () => {
    const actual = interviewAnswer('transportation');
    const expected = "It's going to be a long road, so we better get moving.";

    expect(actual).toEqual(expected);
  });

  it('other question', () => {
    const actual = interviewAnswer('other question');
    const expected = 'QUACK!';

    expect(actual).toEqual(expected);
  });
});
