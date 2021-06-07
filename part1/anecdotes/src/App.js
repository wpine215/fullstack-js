import React, { useState } from 'react';

const Anecdote = (props) => {
  const {
    data,
    sel,
    votes,
  } = props;

  return (
    <p>
      {data[sel]}
      <br />
      <i>has {votes[sel]} votes</i>
    </p>
  );
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  }

  const voteForAnecdote = () => {
    const _votes = [...votes];
    _votes[selected]++;
    setVotes(_votes);
  }

  const getMostVoted = () => {
    return votes.indexOf(Math.max.apply(null, votes));
  }

  return (
    <div className="App">
      <h1>Anecdote of the day</h1>
      <Anecdote data={anecdotes} sel={selected} votes={votes} />
      <button onClick={() => {voteForAnecdote()}}>
        Vote
      </button>
      &nbsp;
      <button onClick={() => {setSelected(getRandomIndex(anecdotes.length))}}>
        Next anecdote
      </button>
      <h1>Anecdote with the most votes</h1>
      <Anecdote data={anecdotes} sel={getMostVoted()} votes={votes} />
    </div>
  );
}

export default App;
