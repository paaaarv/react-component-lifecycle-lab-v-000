import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    })
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps, nextState){
    return(this.state.tweets !== nextState.tweets)
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    for(let i = 0; i<nextProps.newTweets.length; i++){
      this.state.tweets.unshift(nextProps.newTweets[i])
    }
    this.setState({
      tweets: this.state.tweets
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
