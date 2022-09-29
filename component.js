/*
 * @Description: 
 * @Author: sunsh
 * @Date: 2022-09-28 23:24:49
 * @LastEditors: sunsh
 * @LastEditTime: 2022-09-29 10:32:34
 */
'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.' + this.props.commentId;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const app = document.getElementById('app');
// TODO root, createRoot方法都是干啥的？？？
const root = ReactDOM.createRoot(app);
root.render(e(LikeButton, { commentId: app.dataset.commentid}));
