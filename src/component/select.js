/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-09-29 18:29:35
 * @LastEditors: sunsh
 * @LastEditTime: 2022-09-30 10:28:47
 */

import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "1"};
  }

  selectChange = (e) => {
    this.props.onSelectChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {

    return (
      <select value={this.state.value} onChange={this.selectChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    );
  }

}

export default Input;