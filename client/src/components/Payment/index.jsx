import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Classes } from '@blueprintjs/core';

import { Payment } from 'common/constants';

export default class TakeMoney extends React.Component {
  render() {
    const { user } = this.props;
    const credits = user.get('credits');
    const email = user.getIn(['emails', '0', 'value']);

    return (
      <StripeCheckout
        amount={Payment.AMOUNT}
        currency={Payment.CURRENCY}
        name={'SurveyHub'}
        description={'Five dollars for five credits'}
        token={this.handleToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        email={email}
      >
        <Button
          className={Classes.MINIMAL}
          text = {`Credits: ${credits}`}
          icon={'plus'}
        />
      </StripeCheckout>
    );
  }

  handleToken = token => this.props.savePaymentToken(token)
}
