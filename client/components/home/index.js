import React from 'react';
import GArticle from 'grommet/components/Article';

class Home extends React.Component {
  render() {
    return (
      <GArticle primary={true}>
        <h1>Hi! home page</h1>
      </GArticle>
    );
  }
}

export default Home;
