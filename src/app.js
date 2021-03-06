/*
Challenge 1
*/

const doorToDoor = (volunteers, neighbourhoods) =>
  neighbourhoods.length / volunteers.length;

/*
Challenge 2
*/

const interviewAnswer = topic => {
  const answers = {
    "arts funding": "We'll have to get creative!",
    economy: "Time is money.",
    transportation: "It's going to be a long road, so we better get moving."
  };

  return answers[topic] || "QUACK!";
};

/*
Challenge 3
*/

const castVote = (name, votes) => {
  const namesIndexes = {
    Tim: 0,
    Sally: 1,
    Beth: 2
  };

  return votes.map((voteCount, index) =>
    index === namesIndexes[name] ? voteCount + 1 : voteCount
  );
};

/*
Challenge 4
*/

const registerToVote = (name, unregisteredVoters) =>
  unregisteredVoters.filter(voter => voter !== name);

/*
Challenge 5
*/

const chooseStations = stations =>
  stations.reduce(
    (appropriate, [name, capacity, type]) =>
      capacity >= 20 && (type == "community centre" || type == "school")
        ? appropriate.concat(name)
        : appropriate,
    []
  );

const voterTurnout = (voter_signatures, voter_ids) => {
  if (voter_signatures.length !== voter_ids.length) {
    return false;
  }

  for (let i = 0; i < voter_signatures.length; i++) {
    if (voter_signatures[i] !== voter_ids[i]) {
      return "FRAUD!";
    }
  }

  return "All clear, we can count the votes!";
};

const termTopics = interviews => {
  const topics = ["smart city", "arts funding", "transportation"];

  const results = interviews.reduce(
    (result, interview) =>
      result[interview]
        ? { ...result, [interview]: result[interview] + 1 }
        : { ...result, [interview]: 1 },
    {}
  );

  return topics.map(topic => results[topic] || 0);
};

const smartGarbage = (trash, bins) => ({ ...bins, [trash]: bins[trash] + 1 });

const carPassing = (cars, speed) => [...cars, { time: Date.now(), speed }];

const whereCanIPark = (spots, vehicle) => {
  const config = {
    regular: ["R"],
    small: ["R", "S"],
    motorcycle: ["R", "S", "M"]
  };

  for (let row = 0; row < spots.length; row += 1) {
    for (let col = 0; col < spots[row].length; col += 1) {
      if (config[vehicle].includes(spots[row][col])) return [col, row];
    }
  }

  return false;
};

const busTimes = buses =>
  Object.entries(buses).reduce(
    (returnObject, [busStopName, { distance, speed }]) => ({
      ...returnObject,
      [busStopName]: distance / speed
    }),
    {}
  );

const checkAir = (samples, threshold) =>
  samples.filter(sample => sample === "dirty").length / samples.length <
  threshold
    ? "Clean"
    : "Polluted";

const lightsOn = lights => lights.map(({ id }) => ({ id, on: true }));

const lightsOff = lights => lights.map(({ id }) => ({ id, on: false }));

const toggleLights = (lights, lightsAreOn) =>
  lightsAreOn ? lightsOff(lights) : lightsOn(lights);

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  const basePrice = 1;
  const chargePerKm = 0.25;
  const threshold = 30;
  const thresholdAddition = 0.25;

  const totalPrice =
    basePrice +
    chargePerKm * distanceTraveled +
    (numberOfPeople >= threshold ? thresholdAddition : 0);

  return "$" + totalPrice.toFixed(2);
};

const finalPosition = moves => {
  const directions = {
    north: { xChange: 0, yChange: +1 },
    south: { xChange: 0, yChange: -1 },
    west: { xChange: -1, yChange: 0 },
    east: { xChange: +1, yChange: 0 }
  };

  return moves.reduce(
    ([oldX, oldY], move) => [
      oldX + directions[move].xChange,
      oldY + directions[move].yChange
    ],
    [0, 0]
  );
};

const festivalColours = color1 => {
  const normalize = color => (color <= 360 ? color : color - 360);
  return [normalize(color1 + 150), normalize(color1 + 210)];
};

const judgeVegetable = (vegetables, metric) =>
  vegetables.reduce((winner, contestant) =>
    contestant[metric] > winner[metric] ? contestant : winner
  ).submitter;

const countTickets = tickets =>
  tickets.reduce(
    (countObject, ticket) => ({
      ...countObject,
      [ticket]: countObject[ticket] + 1
    }),
    { red: 0, green: 0, blue: 0 }
  );

const bestOdds = (tickets, raffleEntries) => {
  const bestChanceColor = Object.entries(countTickets(tickets))
    .map(([color, count]) => [color, count / raffleEntries[color]])
    .reduce(([winnerColor, winnerChances], [nextColor, nextChances]) =>
      nextChances > winnerChances
        ? [nextColor, nextChances]
        : [winnerColor, winnerChances]
    )[0];
  return `You have the best odds of winning the ${bestChanceColor} raffle.`;
};

const pumpkinSpice = money => {
  const piePrice = 5;
  const lattePrice = 3;
  const macaronsPrice = 1;

  const pieGrams = 30;
  const latteGrams = 15;
  const makaronGrams = 3;

  const pies = Math.floor(money / piePrice);
  const lattes = Math.floor((money - pies * piePrice) / lattePrice);
  const macarons = Math.floor(
    (money - pies * piePrice - lattes * lattePrice) / macaronsPrice
  );

  const spice = pies * pieGrams + lattes * latteGrams + macarons * makaronGrams;

  return [pies, lattes, macarons, spice];
};

const PI = 3.14159;

const sphereVolume = radius => (PI * radius ** 3 * 4) / 3;

const coneVolume = (radius, height) => (PI * radius ** 2 * height) / 3;

const prismVolume = (height, width, depth) => width * height * depth;

const totalVolume = solids =>
  solids
    .map(solid => {
      if (solid.type == "sphere") return sphereVolume(solid.radius);
      if (solid.type == "cone") return coneVolume(solid.radius, solid.height);
      if (solid.type == "prism")
        return prismVolume(solid.height, solid.width, solid.depth);
    })
    .reduce((a, b) => a + b, 0);

const chooseRecipe = (bakeryA, bakeryB, recipes) =>
  recipes.find(
    ({ ingredients }) =>
      (bakeryA.includes(ingredients[0]) && bakeryB.includes(ingredients[1])) ||
      (bakeryA.includes(ingredients[1]) && bakeryB.includes(ingredients[0]))
  ).name;

module.exports = {
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
};
