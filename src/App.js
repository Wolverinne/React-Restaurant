import React from 'react'; 
import CounterHooks from './CounterHooks' 

function App() {
  console.log("Render App")
  return(
    <>
    Counter Hooks
    <CounterHooks initialCount={3}/>
    </>
    
  );
}

export default App;
