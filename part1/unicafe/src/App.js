import React, {useState} from "react";

const Button = ({increment, value, name}) => {
  return (
    <span>
      <button onClick={() => increment(value + 1)}>{name}</button>&nbsp;
    </span>
  );
}

const Statistic = ({label, value, isPct = false}) => {
  const pctSign = isPct ? '%' : '';

  return (
    <tr>
      <td>{label}</td>
      <td style={{paddingLeft: 10}}>{value}{pctSign}</td>
    </tr>
  );
}

const Feedback = (props) => {
  const {
    good,
    neutral,
    bad,
    setGood,
    setNeutral,
    setBad
  } = props;

  return (
    <div>
      <h1>give feedback</h1>
      <Button increment={setGood} value={good} name='good' />
      <Button increment={setNeutral} value={neutral} name='neutral' />
      <Button increment={setBad} value={bad} name='bad' />
    </div> 
  );
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePct = (good / total) * 100;

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>
          No feedback given
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <table style={{padding: 5}}>
        <Statistic label="good" value={good} />
        <Statistic label="neutral" value={neutral} />
        <Statistic label="bad" value={bad} />
        <Statistic label="average" value={average} />
        <Statistic label="positive" value={positivePct} isPct={true} />
      </table>
    </div>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        setGood={setGood} 
        setNeutral={setNeutral}
        setBad={setBad}
      /><br />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  );
}

export default App;
