import  {useState, useEffect} from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Counter App</h1>
      <h3>Click the button to increment:</h3>
      <h4>{counter}</h4>
      <button onClick = {() => setCounter(counter + 1)}>Click Me!</button>
    </div>
  );
}
