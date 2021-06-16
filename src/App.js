import React, {useState} from 'react';
import './App.css';
import List from './List';
import data from './Data';

function App() {
  const [people, setPeople] = useState(data)
  return(
    <main>
      <section className = "container">
          <h3>{ people.length} Birthdays Today </h3>
          <List people ={people} />
          { people.length >0 ? (
          <button onClick = {()=> setPeople([])}>Clear All
          </button>) : ( <div> </div>  )}
            
      </section>
    </main>

  );
}

export default App;