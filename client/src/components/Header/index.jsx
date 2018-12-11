import React from 'react';
import { Link } from 'react-router-dom';
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarDivider,
  NavbarHeading
} from '@blueprintjs/core';

import Payment from 'containers/Payment';
import './styles.css';

class Header extends React.Component {
  componentDidMount() {
    const { fetchUser, user } = this.props;

    if (!user) {
      fetchUser();
    }
  }

  render() {
    const { user/*, location: { pathname }*/ } = this.props;
    const isLoggedIn = !!user;
    const logoLink = isLoggedIn ? '/surveys' : '/';
    // const shouldReplaceHistory = pathname === '/';

    return (
      <Navbar>
        <div className='navbar-wrapper'>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading className='logo no-select'>
              <Link
                className='logo-link'
                // replace={shouldReplaceHistory}
                to={logoLink}
              >
                SurveyHub
              </Link>
            </NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            {this.renderButtons()}
          </NavbarGroup>
        </div>
      </Navbar>
    );
  }

  renderButtons = () => {
    const { user, isUserLoading } = this.props;
    const isLoggedIn = !!user;


    if (isLoggedIn) {
      return (
        <React.Fragment>
          <Payment />
          <NavbarDivider />
          <Button
            className={Classes.MINIMAL}
            icon={'log-out'}
            text={'Log Out'}
            loading={isUserLoading}
            onClick={this.logOut}
          />
        </React.Fragment>
      );
    } else {
      return (
        <Button
          className={Classes.MINIMAL}
          icon={'log-in'}
          text={'Log In with Google'}
          loading={isUserLoading}
          onClick={this.logIn}
        />
      );
    }
  }

  logIn = () => {
    window.location.assign('/api/auth/google');
  }

  logOut = () => {
    window.location.replace('/api/auth/logout');
  }
}

export default Header;
