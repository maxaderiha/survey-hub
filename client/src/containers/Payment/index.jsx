import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Payment from 'components/Payment';
import { user } from 'containers/App/selectors';
import { savePaymentToken } from './actions';

const mapStateToProps = createStructuredSelector({
  user,
});

const mapDispatchToProps = {
  savePaymentToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
