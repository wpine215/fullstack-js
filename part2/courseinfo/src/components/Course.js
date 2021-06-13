import React from 'react';

const Header = (props) => {
  return (
    <h2>{props.course}</h2>
  );
}

const Part = (props) => {
  return (
    <p>
      {props.name}: {props.exercises}
    </p>
  );
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part =>
        <Part name={part.name} exercises={part.exercises} key={part.id} />
      )}
    </div>
  );
}

const Total = ({parts}) => {
  return (
    <p>
      <i>Number of exercises: {parts.reduce((a, e) => a + e.exercises, 0)}</i>
    </p>
  );
}

const Course = ({course}) => {
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />      
    </div>
  );
}

export default Course;