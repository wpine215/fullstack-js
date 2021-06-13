import React from 'react';
import Course from './components/Course';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half stack application development',
      parts: [
        {
          id: 1,
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          id: 2,
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          id: 3,
          name: 'State of a component',
          exercises: 4
        },
        {
          id: 4,
          name: 'Collections in React',
          exercises: 3
        }
      ]
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
          id: 1,
          name: 'Routing',
          exercises: 3
        },
        {
          id: 2,
          name: 'Middlewares',
          exercises: 7
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course => 
        <Course course={course} />
      ))}
    </div>
  );
}

export default App;
