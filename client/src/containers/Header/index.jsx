import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import { fetchUser } from 'containers/App/actions';
import { isUserLoading, user } from 'containers/App/selectors';

const mapStateToProps = createStructuredSelector({
  isUserLoading,
  user,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(withRouter(Header));
