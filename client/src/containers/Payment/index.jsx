import { connect } from 'react-redux';

import Payment from 'components/Payment';
import { savePaymentToken } from './actions';

const mapStateToProps = null;

const mapDispatchToProps = {
  savePaymentToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
