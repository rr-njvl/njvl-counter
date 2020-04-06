import React from 'react';

class Counter extends React.Component {
  name;
  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = { counter: 0 };
  }

  incrementCounterValue = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounterValue = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div className="counter">
        <div>
          <h2>{this.name}</h2>
          <h4>App to increment or decrement the counter on button clicks</h4>
        </div>
        <div>
          <button type="button" onClick={this.incrementCounterValue}>
            Increment
          </button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" onClick={this.decrementCounterValue}>
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