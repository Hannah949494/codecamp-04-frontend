import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";
import Router from "next/router";
interface Istate {
  count: number;
}
export default class MyCounterPage extends Component {
  state: Istate = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨");
  }

  componentDidUpdate() {
    console.log("수정됨");
  }

  componentWillUnmount() {
    console.log("잘가요");
  }

  onClickCounter() {
    this.setState((prev: Istate) => ({
      count: prev.count + 1,
    }));
  }

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <>
        <div>현재카운트 : {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트 올리기</button>
        <button onClick={this.onClickMove}>페이지 이동</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}