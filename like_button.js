'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      <button onClick={( ) => this.setState({liked: true})}>
        Like
      </button>
    );
  }
}

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);

const domContainer1 = document.querySelector('#like_button_container1');
ReactDOM.render(e(LikeButton), domContainer1);
const domContainer2 = document.querySelector('#like_button_container2');
ReactDOM.render(e(LikeButton), domContainer2);
const domContainer3 = document.querySelector('#like_button_container3');
ReactDOM.render(e(LikeButton), domContainer3);

