import { Alignment, AnchorButton, Classes, Navbar, NavbarDivider, NavbarGroup, NavbarHeading, Spinner } from '@blueprintjs/core';
import Payment from 'containers/Payment';
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Header extends React.Component {
  componentDidMount() {
    const {
      fetchUser,
      isUserLoading,
      user,
    } = this.props;

    if (!user && !isUserLoading) {
      fetchUser();
    }
  }

  render() {
    return (
      <Navbar fixedToTop>
        <div className='navbar-wrapper'>
          <NavbarGroup align={Alignment.LEFT}>
            {this.renderLogo()}
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            {this.renderRightGroup()}
          </NavbarGroup>
        </div>
      </Navbar>
    );
  }

  renderLogo = () => {
    const logoLink = this.props.user ? '/surveys' : '/';

    return (
      <NavbarHeading className='logo no-select'>
        <Link
          className='non-decorated-link'
          to={logoLink}
        >
          SurveyHub
        </Link>
      </NavbarHeading>
    );
  }

  renderRightGroup = () => this.props.isUserLoading
    ? <Spinner className={'header-spinner'} size={25} />
    : this.renderButtons()

  renderButtons = () => {
    const { user } = this.props;
    const isLoggedIn = !!user;

    if (isLoggedIn) {
      return (
        <React.Fragment>
          <Payment />
          <NavbarDivider />
          <AnchorButton
            className={Classes.MINIMAL}
            href={'/api/auth/logout'}
            icon={'log-out'}
            text={'Log Out'}
          />
        </React.Fragment>
      );
    } else {
      return (
        <AnchorButton
          className={Classes.MINIMAL}
          href={'/api/auth/google'}
          icon={'log-in'}
          text={'Log In with Google'}
        />
      );
    }
  }
}

export default Header;
