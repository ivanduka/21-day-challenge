const doorToDoor = (volunteers, neighbourhoods) => neighbourhoods.length / volunteers.length;

const interviewAnswer = (topic) => {
  const answers = {
    'arts funding': "We'll have to get creative!",
    'economy': 'Time is money.',
    'transportation': "It's going to be a long road, so we better get moving.",
  };

  return answers[topic] || 'QUACK!';
};

module.exports = { doorToDoor, interviewAnswer };
