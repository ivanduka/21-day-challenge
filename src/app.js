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
  dynamicPricing
};
