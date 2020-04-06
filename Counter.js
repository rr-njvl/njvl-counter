import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div className="calculator">
        <div>
          <h4>App to increment or decrement the counter on button clicks</h4>
        </div>
        <div>
          <button type="button" onClick={this.increment}>
            Increment
          </button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" onClick={this.decrement}>
            Decrement
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