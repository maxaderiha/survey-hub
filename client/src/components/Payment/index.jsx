import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Classes } from '@blueprintjs/core';

import { Payment } from 'common/constants';

export default class TakeMoney extends React.Component {
  render() {
    const { credits } = this.props;

    return (
      <StripeCheckout
        amount={Payment.AMOUNT}
        currency={Payment.CURRENCY}
        name={'SurveyHub'}
        description={'Five dollars for five credits'}
        token={this.handleToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
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
