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

module.exports = {
  doorToDoor,
  interviewAnswer,
  castVote,
  registerToVote,
  chooseStations,
  voterTurnout
};
