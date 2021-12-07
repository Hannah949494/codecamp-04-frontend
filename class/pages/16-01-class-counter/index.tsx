import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";
interface Istate {
  count: number;
}
export default class MyCounterPage extends Component {
  state: Istate = {
    count: 0,
  };

  onClickCounter() {
    this.setState((prev: Istate) => ({
      count: prev.count + 1,
    }));
  }

  render() {
    return (
      <>
        <div>현재카운트 : {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트 올리기</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}
