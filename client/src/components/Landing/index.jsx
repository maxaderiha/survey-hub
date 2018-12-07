import React from 'react';

import './styles.css';

class Landing extends React.PureComponent {
  render() {
    return (
      <div className="landing">
        <div className="slogan-wrapper">
          <div className="slogan-titles-container no-select">
            <h1 className="slogan-title">Get feedback from users faster...</h1>
            <h2 className="slogan-subtitle">Improve your business with the help of our service, which will allow you to collect feedback from your users quickly and analyze them efficiently.</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
