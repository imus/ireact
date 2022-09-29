/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-09-29 10:29:52
 * @LastEditors: sunsh
 * @LastEditTime: 2022-09-29 10:54:28
 */
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    }
  }

  render() {
    if (this.state.liked) {
      return `you liked this`
    }

    return (<button onClick={ () => this.setState({liked: true}) }>
      Like
      </button>);
  }
}

const app = document.querySelector('#app');
ReactDOM.createRoot(app).render(React.createElement(LikeButton));