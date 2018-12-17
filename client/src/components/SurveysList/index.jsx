import { Spinner } from '@blueprintjs/core';
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import Survey from 'components/Survey';
import './styles.css';

class SurveysList extends Component {
  render() {
    const {
      fetchSurveys,
      isSurveysLoaded,
    } = this.props;

    return (
      <div className={'surveys-list'}>
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchSurveys}
          hasMore={!isSurveysLoaded}
          loader={<Spinner size={25} />}
          threshold={50}
        >
          {this.renderItems()}
        </InfiniteScroll>
      </div>
    );
  }

  renderItems = () => this.props.surveys.map(
    (survey, id) => (
      <Survey
        key={id}
        survey={survey}
      />
    ),
  )
}

export default SurveysList;
