const {
  doorToDoor,
  interviewAnswer,
  castVote,
  registerToVote,
  chooseStations,
  voterTurnout,
  termTopics,
  smartGarbage,
  carPassing,
  whereCanIPark,
  busTimes,
  checkAir,
  lightsOn,
  lightsOff,
  toggleLights,
  dynamicPricing,
  finalPosition,
  festivalColours,
  judgeVegetable,
  countTickets,
  bestOdds,
  pumpkinSpice,
  sphereVolume,
  coneVolume,
  prismVolume,
  totalVolume,
  chooseRecipe
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

describe("Challenge 08", () => {
  it("works", () => {
    const bins = {
      waste: 4,
      recycling: 2,
      compost: 5
    };

    const trash = "recycling";

    const actual = smartGarbage(trash, bins);
    const expected = {
      waste: 4,
      recycling: 3,
      compost: 5
    };

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 09", () => {
  it("example 1", () => {
    const cars = [
      {
        time: 1568329654807,
        speed: 40
      },
      {
        time: 1568329821632,
        speed: 42
      },
      {
        time: 1568331115463,
        speed: 35
      }
    ];

    const speed = 38;

    const actual = carPassing(cars, speed);
    const expected = [
      {
        time: 1568329654807,
        speed: 40
      },
      {
        time: 1568329821632,
        speed: 42
      },
      {
        time: 1568331115463,
        speed: 35
      },
      {
        time: expect.any(Number),
        speed: 38
      }
    ];

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 10", () => {
  it("example 1", () => {
    const spots = [
      // COLUMNS ARE X
      //    0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "R", "M"], // 1
      ["s", "M", "s", "S", "R", "m"], // 2
      ["S", "r", "s", "m", "R", "M"], // 3
      ["S", "r", "s", "m", "R", "M"], // 4
      ["S", "r", "S", "M", "M", "S"] // 5
    ];

    const vehicle = "regular"; // possible options are 'regular', 'small', or 'motorcycle'

    const actual = whereCanIPark(spots, vehicle);
    const expected = [4, 0];

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 11", () => {
  it("example 1", () => {
    const buses = {
      pickadilly: {
        distance: 10,
        speed: 5
      },
      uptown: {
        distance: 13,
        speed: 10
      }
    };

    const actual = busTimes(buses);
    const expected = {
      pickadilly: 2,
      uptown: 1.3
    };

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 12", () => {
  it("example 1", () => {
    const samples = [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty"
    ];
    const threshold = 0.3;

    const actual = checkAir(samples, threshold);
    const expected = "Polluted";

    expect(actual).toEqual(expected);
  });

  it("example 2", () => {
    const samples = [
      "clean",
      "clean",
      "dirty",
      "clean",
      "clean",
      "clean",
      "clean",
      "clean",
      "clean",
      "dirty"
    ];
    const threshold = 0.5;

    const actual = checkAir(samples, threshold);
    const expected = "Clean";

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 13", () => {
  it("lightsOff", () => {
    const lights = [
      {
        id: 1,
        on: true
      },
      {
        id: 2,
        on: true
      },
      {
        id: 3,
        on: true
      },
      {
        id: 4,
        on: true
      },
      {
        id: 5,
        on: true
      }
    ];

    const actual = lightsOff(lights);
    const expected = [
      {
        id: 1,
        on: false
      },
      {
        id: 2,
        on: false
      },
      {
        id: 3,
        on: false
      },
      {
        id: 4,
        on: false
      },
      {
        id: 5,
        on: false
      }
    ];

    expect(actual).toEqual(expected);
  });

  it("lightsOn", () => {
    const lights = [
      {
        id: 1,
        on: false
      },
      {
        id: 2,
        on: false
      },
      {
        id: 3,
        on: false
      },
      {
        id: 4,
        on: false
      },
      {
        id: 5,
        on: false
      }
    ];

    const actual = lightsOn(lights);
    const expected = [
      {
        id: 1,
        on: true
      },
      {
        id: 2,
        on: true
      },
      {
        id: 3,
        on: true
      },
      {
        id: 4,
        on: true
      },
      {
        id: 5,
        on: true
      }
    ];

    expect(actual).toEqual(expected);
  });

  it("toggleLights", () => {
    const lights = [
      {
        id: 1,
        on: true
      },
      {
        id: 2,
        on: true
      },
      {
        id: 3,
        on: true
      },
      {
        id: 4,
        on: true
      },
      {
        id: 5,
        on: true
      }
    ];

    const lightsAreOn = true;

    const actual = toggleLights(lights, lightsAreOn);
    const expected = [
      {
        id: 1,
        on: false
      },
      {
        id: 2,
        on: false
      },
      {
        id: 3,
        on: false
      },
      {
        id: 4,
        on: false
      },
      {
        id: 5,
        on: false
      }
    ];

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 14", () => {
  it("example 1", () => {
    const numberOfPeople = 15;
    const distanceTraveled = 10;

    const actual = dynamicPricing(numberOfPeople, distanceTraveled);
    const expected = "$3.50";

    expect(actual).toEqual(expected);
  });

  it("example 2", () => {
    const numberOfPeople = 35;
    const distanceTraveled = 5;

    const actual = dynamicPricing(numberOfPeople, distanceTraveled);
    const expected = "$2.50";

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 15", () => {
  it("example 1", () => {
    const moves = ["north", "north", "west", "west", "north", "east", "north"];

    const actual = finalPosition(moves);
    const expected = [-1, 4];

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 16", () => {
  it("example 1", () => {
    const color1 = 100;
    const actual = festivalColours(color1);
    const expected = [250, 310];

    expect(actual).toEqual(expected);
  });

  it("example 2", () => {
    const color1 = 300;
    const actual = festivalColours(color1);
    const expected = [90, 150];

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 17", () => {
  it("example 1", () => {
    const vegetables = [
      {
        submitter: "Old Man Franklin",
        redness: 10,
        plumpness: 5
      },
      {
        submitter: "Sally Tomato-Grower",
        redness: 2,
        plumpness: 8
      },
      {
        submitter: "Hamid Hamidson",
        redness: 4,
        plumpness: 3
      }
    ];

    const metric = "redness";

    const actual = judgeVegetable(vegetables, metric);
    const expected = "Old Man Franklin";

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 18", () => {
  it("example bestOdds 1", () => {
    const tickets = ["red", "red", "green", "blue", "green"];

    const raffleEntries = {
      red: 10,
      green: 30,
      blue: 15
    };

    const actual = bestOdds(tickets, raffleEntries);
    const expected = "You have the best odds of winning the red raffle.";

    expect(actual).toEqual(expected);
  });

  it("example bestOdds 2", () => {
    const tickets = ["green", "green", "green", "blue", "green"];

    const raffleEntries = {
      red: 10,
      green: 4,
      blue: 15
    };

    const actual = bestOdds(tickets, raffleEntries);
    const expected = "You have the best odds of winning the green raffle.";

    expect(actual).toEqual(expected);
  });

  it("example countVotes 1", () => {
    const tickets = ["red", "red", "green", "blue", "green"];

    const actual = countTickets(tickets);
    const expected = {
      red: 2,
      green: 2,
      blue: 1
    };

    expect(actual).toEqual(expected);
  });

  it("example countVotes 2", () => {
    const tickets = ["red", "red", "green", "green", "green"];

    const actual = countTickets(tickets);
    const expected = {
      red: 2,
      green: 3,
      blue: 0
    };

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 19", () => {
  it("example 1", () => {
    const money = 9;
    const actual = pumpkinSpice(money);
    const expected = [1, 1, 1, 48];

    expect(actual).toEqual(expected);
  });
});

describe("Challenge 20", () => {
  it("example 1", () => {
    const sphere = {
      type: "sphere",
      radius: 2
    };
    const actual = sphereVolume(sphere.radius);
    const expected = 33.51029333333333;

    expect(actual).toEqual(expected);
  });

  it("example 2", () => {
    const cone = {
      type: "cone",
      radius: 3,
      height: 5
    };
    const actual = coneVolume(cone.radius, cone.height);
    const expected = 47.123850000000004;
    expect(actual).toEqual(expected);
  });

  it("example 3", () => {
    const prism = {
      type: "prism",
      height: 3,
      width: 4,
      depth: 5
    };
    const actual = prismVolume(prism.height, prism.width, prism.depth);
    const expected = 60;
    expect(actual).toEqual(expected);
  });

  it("example 4", () => {
    const largeSphere = {
      type: "sphere",
      radius: 40
    };

    const smallSphere = {
      type: "sphere",
      radius: 10
    };

    const cone = {
      type: "cone",
      radius: 3,
      height: 5
    };

    const duck = [largeSphere, smallSphere, cone];

    const actual = totalVolume(duck);
    const expected = 272318.2571833333;
    expect(actual).toEqual(expected);
  });

  it("example 5", () => {
    const prism = {
      type: "prism",
      height: 5,
      width: 6,
      depth: 3
    };

    const cone = {
      type: "cone",
      radius: 3,
      height: 6
    };

    const castle = [cone, prism];

    const actual = totalVolume(castle);
    const expected = 146.54862;
    expect(actual).toEqual(expected);
  });
});

describe("Challenge 21", () => {
  it("example 1", () => {
    const bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
    const bakeryB = ["milk", "butter", "cream cheese"];

    const recipes = [
      {
        name: "Coconut Sponge Cake",
        ingredients: ["coconut", "cake base"]
      },
      {
        name: "Persian Cheesecake",
        ingredients: ["saffron", "cream cheese"]
      },
      {
        name: "Custard Surprise",
        ingredients: ["custard", "ground beef"]
      }
    ];

    const actual = chooseRecipe(bakeryA, bakeryB, recipes);
    const expected = "Persian Cheesecake";
    expect(actual).toEqual(expected);
  });

  it("example 2", () => {
    const bakeryA = ["potatoes", "bay leaf", "raisins"];
    const bakeryB = ["red bean", "dijon mustard", "apples"];

    const recipes = [
      {
        name: "Potato Ganache",
        ingredients: ["potatoes", "chocolate"]
      },
      {
        name: "Sweet Fish",
        ingredients: ["anchovies", "honey"]
      },
      {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ["dijon mustard", "raisins"]
      }
    ];

    const actual = chooseRecipe(bakeryA, bakeryB, recipes);
    const expected = "Nima's Famous Dijon Raisins";
    expect(actual).toEqual(expected);
  });
});
