import React from 'react';
import { Link } from 'react-router-dom';
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from '@blueprintjs/core';

import './styles.css';

class Header extends React.Component {
  componentDidMount() {
    const { fetchUser, user } = this.props;

    if (!user) {
      fetchUser();
    }
  }

  render() {
    const { user, isUserLoading, location: { pathname } } = this.props;
    const isLoggedIn = !!user;
    const [icon, text, logoLink] = isLoggedIn ? ['log-out', 'Log Out', '/surveys'] : ['log-in', 'Log In with Google', '/'];
    const shouldReplaceHistory = pathname === '/';

    return (
      <Navbar>
        <div className="navbar-wrapper">
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading className="logo no-select">
              <Link 
                className="logo-link"
                replace={shouldReplaceHistory}
                to={logoLink}
              >
                SurveyHub
              </Link> 
            </NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button
              className={Classes.MINIMAL}
              icon={icon}
              text={text}
              loading={isUserLoading}
              onClick={isLoggedIn ? this.logOut : this.logIn}
            />
          </NavbarGroup>
        </div>
      </Navbar>
    );
  }

  logIn = () => {
    window.location.assign('/api/auth/google');
  }

  logOut = () => {
    window.location.replace('/api/auth/logout');
  }
}

export default Header;
