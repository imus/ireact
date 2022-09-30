/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-09-29 18:29:42
 * @LastEditors: sunsh
 * @LastEditTime: 2022-09-30 16:07:19
 */
import React from 'react';

function FormatTimer(props) {
  return (<h2>{props.date.toLocaleTimeString()}</h2>);
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.update();
    this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  update = () =>{
    this.setState({
      date: new Date()
    });
  }

  tick() {
    this.timer = setInterval(this.update, 1000); // .bind 每次渲染会创建多个回调
  }


  render() {
    return (
      <>
        <div>Hello, {this.props.name == null ? 'clock' : this.props.name}</div>
        <FormatTimer date={this.state.date} />
      </>
    );
  }
}

export default Clock;