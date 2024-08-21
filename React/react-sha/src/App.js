function App() {
  const num_1 = 10;
  const num_2 = [1,2,3,4,5,6,7,8,9];
  // const numString = '1,2,3,4,5,6,7,8,9';
  
  // const boolValue = true;
  return (
    <div className="App">
      <p>This is a react app number {num_1} </p>
      <p>This is a react app array {num_2.join(',')} </p>
      {/* <p>This is a react app array {obj} </p> Not working */}
      {/* <p>This is a react app random number {Math.random()*10} </p> Working */}
      {/* <p>This is a react app array {numString} </p>
      <p>This is a react app array {obj} </p>
      <p>This is a react app array {boolValue} </p> */}

      
      
    </div>
  );
}

export default App;
