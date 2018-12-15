import React from 'react';
import { Link } from 'react-router-dom';
import {
  Alignment,
  AnchorButton,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarDivider,
  NavbarHeading,
  Spinner
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
    const { user, isUserLoading/*, location: { pathname }*/ } = this.props;
    const isLoggedIn = !!user;
    const logoLink = isLoggedIn ? '/surveys' : '/';
    // const shouldReplaceHistory = pathname === '/';

    return (
      <Navbar fixedToTop>
        <div className='navbar-wrapper'>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading className='logo no-select'>
              <Link
                className='non-decorated-link'
                // replace={shouldReplaceHistory}
                to={logoLink}
              >
                SurveyHub
              </Link>
            </NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            {
              isUserLoading
                ? <Spinner className={'header-spinner'} size={25} />
                : this.renderButtons()
            }
          </NavbarGroup>
        </div>
      </Navbar>
    );
  }

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
