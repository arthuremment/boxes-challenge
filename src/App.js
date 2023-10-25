import React from 'react';
import boxes from './boxes';
import Box from './Box';
import './App.css';


function App() {

  const [squares, setSquares] = React.useState(boxes)

  function toggleOn(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }


  const box = squares.map(eachBox => {
    return (
      <Box
        key={eachBox.id}
        on={eachBox.on}
        toggleOn={() => toggleOn(eachBox.id)}
      />
    )
  })
  return (
    <main>
      {box}
    </main>
  );
}

export default App;
