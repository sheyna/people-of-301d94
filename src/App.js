import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Person from './Person.js';


class App extends React.Component {


  render() {
    return (
      <>
        <Header/>
        <Main/>
        <footer>
          &copy; Code Fellows 2022
        </footer>
      </>
    );
  }

}

export default App;
