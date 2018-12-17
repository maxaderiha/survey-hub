import { Button } from '@blueprintjs/core';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class DashboardHeader extends Component {
  render() {
    return (
      <div className={'dashboard-header'}>
        <Link className={'non-decorated-link'} to={'/surveys/new'}>
          <Button
            className={'dashboard-add-survey-btn'}
            text={'Add survey'}
          />
        </Link>
      </div>
    );
  }
}

export default DashboardHeader;
