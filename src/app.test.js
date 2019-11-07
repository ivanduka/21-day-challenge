const {
  doorToDoor,
  interviewAnswer,
  castVote,
  registerToVote,
  chooseStations,
  voterTurnout,
  termTopics
} = require("./app");

describe("Challenge 01", () => {
  it("works", () => {
    const volunteers = ["Sally", "Jake", "Brian", "Hamid"];

    const neighbourhoods = [
      "Central Valley",
      "Big Mountain",
      "Little Bridge",
      "Bricktown",
      "Brownsville",
      "Paul's Boutique",
      "Clay Park",
      "Fox Nest"
    ];

    const actual = doorToDoor(volunteers, neighbourhoods);
    const expected = 2;

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 02", () => {
  it("arts funding", () => {
    const actual = interviewAnswer("arts funding");
    const expected = "We'll have to get creative!";

    expect(actual).toEqual(expected);
  });

  it("economy", () => {
    const actual = interviewAnswer("economy");
    const expected = "Time is money.";

    expect(actual).toEqual(expected);
  });

  it("transportation", () => {
    const actual = interviewAnswer("transportation");
    const expected = "It's going to be a long road, so we better get moving.";

    expect(actual).toEqual(expected);
  });

  it("other question", () => {
    const actual = interviewAnswer("other question");
    const expected = "QUACK!";

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 03", () => {
  it("Example 1", () => {
    const name = "Sally";
    const votes = [
      0, // Tim
      2, // Sally
      1 // Beth
    ];

    const actual = castVote(name, votes);
    const expected = [
      0, // Tim
      3, // Sally
      1 // Beth;
    ];

    expect(actual).toEqual(expected);
  });

  it("Example 2", () => {
    const name = "Tim";
    const votes = [
      1, // Tim
      1, // Sally
      2 // Beth
    ];

    const actual = castVote(name, votes);
    const expected = [
      2, // Tim
      1, // Sally
      2 // Beth
    ];

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 04", () => {
  it("Example", () => {
    const name = "Bradley";
    const unregisteredVoters = ["Jake", "Alanna", "Bradley", "Stephanie"];

    const actual = registerToVote(name, unregisteredVoters);
    const expected = ["Jake", "Alanna", "Stephanie"];

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 05", () => {
  it("Example", () => {
    const stations = [
      ["Big Bear Donair", 10, "restaurant"],
      ["Bright Lights Elementary", 50, "school"],
      ["Moose Mountain Community Centre", 45, "community centre"]
    ];

    const actual = chooseStations(stations);
    const expected = [
      "Bright Lights Elementary",
      "Moose Mountain Community Centre"
    ];

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 06", () => {
  it("example 1", () => {
    const voter_signatures = [
      "Bill Billiamson",
      "Kate Etak",
      "Brandon Brandonus",
      "Fake McFakerson",
      "Jane Janesford"
    ];

    const voter_ids = [
      "Bill Billiamson",
      "Kate Etak",
      "Brandon Brandonus",
      "Simon Simonson",
      "Jane Janesford"
    ];

    const actual = voterTurnout(voter_signatures, voter_ids);
    const expected = "FRAUD!";

    expect(actual).toEqual(expected);
  });

  it("example 2", () => {
    const voter_signatures = [
      "Bill Billiamson",
      "Kate Etak",
      "Brandon Brandonus",
      "Simon Simonson",
      "Jane Janesford"
    ];

    const voter_ids = [
      "Bill Billiamson",
      "Kate Etak",
      "Brandon Brandonus",
      "Simon Simonson",
      "Jane Janesford"
    ];

    const actual = voterTurnout(voter_signatures, voter_ids);
    const expected = "All clear, we can count the votes!";

    expect(actual).toEqual(expected);
  });

  it("example 3", () => {
    const voter_signatures = [
      "Bill Billiamson",
      "Brandon Brandonus",
      "Simon Simonson",
      "Jane Janesford"
    ];

    const voter_ids = [
      "Bill Billiamson",
      "Kate Etak",
      "Brandon Brandonus",
      "Simon Simonson",
      "Jane Janesford"
    ];

    const actual = voterTurnout(voter_signatures, voter_ids);
    const expected = false;

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 07", () => {
  it("example 1", () => {
    const interviews = [
      "smart city",
      "rebuild the lighthouse",
      "arts funding",
      "transportation",
      "arts funding",
      "rebuild the lighthouse",
      "sports funding",
      "tax cuts",
      "smart city",
      "arts funding",
      "smart city"
    ];

    const actual = termTopics(interviews);

    const expected = [
      3, // smart city
      3, // arts funding
      1 // transportation
    ];

    expect(actual).toEqual(expected);
  });
});
