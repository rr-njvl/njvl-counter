import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Counter App'
    };
  }

  render() {
    return (
      <div>
        <Counter name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
