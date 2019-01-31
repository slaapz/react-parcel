import React, { Component } from 'react';

import Header from './components/Header';
import Cards from './components/Cards';

import { macros } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      macros: []
    };
  }

  componentWillMount() {
    this.setState({ macros: macros });
  }
  render() {
    const { macros } = this.state;
    return (
      <div>
        <Header />
        <Cards macros={macros} />
      </div>
    );
  }
}

export default App;
