import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    inputValue: "",
    disabledButton: false
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });

    const { invalidWords } = this.props;

    if (invalidWords.find(word => word.toLowerCase() === value.toLowerCase())) {
      this.setState({
        disabledButton: true
      });
    } else {
      this.setState({
        disabledButton: false
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Valid word</label>
          <input
            type="text"
            name="inputValue"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
          <button disabled={this.state.disabledButton}>Submit</button>
        </form>
      </div>
    );
  }
}
