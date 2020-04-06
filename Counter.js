import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = () => {
    console.log("Hello World");
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div className="calculator">
        <div>
          <h2>Counter DEMO:</h2>
        </div>
        <div>
          <button type="button" onClick={this.decrement}>
            Decrement
          </button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" onClick={this.increment}>
            Increment
          </button>
          <h4>
            Value: {this.state.counter}
          </h4>
        </div>
      </div>
    );
  }
}

export default Counter;