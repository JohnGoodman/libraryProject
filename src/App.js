import React from "react";
import { useState, useEffect } from "react";

const navButtonStyles = {
  display: 'block',
  width: '100%',
  textAlign: 'left',
  padding: '20px',
  marginBottom: '1px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: '#f2f2f2'
}


function App() {

  // Define variables
  const [selectedGenere, setSelectedGenere] = useState(null);


  // Define functions
  function selectGenere(genere) {
    setSelectedGenere(genere);
  }


  return (
    <div className="App" style={{padding: '20px'}}>

      <header className="App-header" style={{marginBottom: '20px'}}>
        <h1>App Name</h1>
      </header>

      <section style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>

        <div class='left-nav' style={{width: '30%'}}>
          <h3>Generes</h3>
          <button type='button' style={navButtonStyles} onClick={() => selectGenere('cooking')}>Cooking</button>
          <button type='button' style={navButtonStyles} onClick={() => selectGenere('horror')}>Horror</button>
          <button type='button' style={navButtonStyles} onClick={() => selectGenere('fantasy')}>Fantasy</button>
          <button type='button' style={navButtonStyles} onClick={() => selectGenere('mystery')}>Mystery</button>
          <button type='button' style={navButtonStyles} onClick={() => selectGenere('personaldevelopment')}>Personal Development</button>
          <button type='button' style={navButtonStyles} onClick={() => selectGenere('romance')}>Romance</button>
          <button type='button' style={navButtonStyles} onClick={() => selectGenere('sciFi')}>SciFi</button>
        </div>

        <div class='works' style={{marginLeft: '30px'}}>
          <h3>Works</h3>
          <WorksList selectedGenere={selectedGenere} />
        </div>

      </section>

    </div>

  );
}

export default App;




const WorksList = (props) => {

  // Define variables
  const selectedGenere = props.selectedGenere;
  const [works, setWorks] = useState([]);


  // Component load actions
  useEffect(() => {
    if( selectedGenere) {

      // Lookup genere

      // Set the works state

    }
  }, []);


  // Screen elements
  let blankState;
  if( works.length === 0 ) {
    blankState = <p>Select a genere from the list on the left</p>;
  }

  return (
    <div>
      {blankState}
      {selectedGenere ? <p>Selected Genere: {selectedGenere}</p> : null}
    </div>
  )
}