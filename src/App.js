import './App.css';
import {useState} from 'react';
import Data from './districts.json';

function App() {
  const [seach, setSearch] = useState('');
  return (
    <center>
      <h3>Enter Your District: </h3>
      <input type="text" value={seach} onChange={(e) => setSearch(e.target.value)}/> <br />
      {Data.filter(dist => dist.name.toLowerCase().includes(seach)).map(dist => {
        return <div style={{"border":"1px solid black", "margin":"10px","padding":"10px", "maxWidth":"70%"}}>
          {dist.name}
        </div>
      })}
    </center>
  );
}

export default App;
// style={{"border": "1px solid black", "margin" : "10px", "padding" : "10px", "maxWidth": "70%"}}
