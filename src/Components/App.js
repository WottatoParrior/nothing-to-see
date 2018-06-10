import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../App.css';
import Categories from './Categories';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {
        <Categories />
        
      }
    </React.Fragment>
  );
}

export default App;
// 