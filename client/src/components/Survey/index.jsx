import { Card, Elevation, H4, Intent, Tag } from '@blueprintjs/core';
import moment from 'moment';
import React, { Component } from 'react';

import './styles.css';

class Survey extends Component {
  render() {
    return (
      <Card
        className={'survey-card'}
        interactive
        elevation={Elevation.THREE}
      >
        {this.leftColumn()}
        {this.rightColumn()}
      </Card>
    );
  }

  leftColumn = () => {
    const { survey } = this.props;
    const sentFormatedDate = moment(survey.get('sentDate')).fromNow();
    const title = survey.get('title');
    const body = survey.get('body');

    return (
      <div className={'survey-card-left-column'}>
        <H4>{title}</H4>
        <p>{body}</p>
        <span>{sentFormatedDate}</span>
      </div>
    );
  }

  rightColumn = () => {
    const { survey } = this.props;
    const yesInfo = `Yes: ${survey.getIn(['feedback', 'yes'])}`;
    const noInfo = `No: ${survey.getIn(['feedback', 'no'])}`;
    const lastRespondDate = survey.get('lastRespondDate');
    const lastRespondFormated = lastRespondDate ? moment(lastRespondDate).fromNow() : 'n/a';

    const tagProps = {
      large: true,
      round: true,
      minimal: true,
      className: 'curvey-card-tag',
    };

    return (
      <div className={'survey-card-right-column'}>
        <span>{`Last respond: ${lastRespondFormated}`}</span>
        <div>
          <Tag {...tagProps} intent={Intent.SUCCESS}>{yesInfo}</Tag>
          <Tag {...tagProps} intent={Intent.DANGER}>{noInfo}</Tag>
        </div>
      </div>
    );
  }
}

export default Survey;
