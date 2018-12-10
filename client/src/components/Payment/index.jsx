import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button, Classes } from '@blueprintjs/core';

import { Payment } from 'common/constants';

export default class TakeMoney extends React.Component {
  render() {
    return (
      <StripeCheckout
        amount={Payment.AMOUNT}
        currency={Payment.CURRENCY}
        name={'SurveyHub'}
        description={'5$ for 5 survey credits'}
        token={this.handleToken}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <Button
          className={Classes.MINIMAL}
          text={'Add credits'}
        />
      </StripeCheckout>
    );
  }

  handleToken = token => this.props.savePaymentToken(token)
}
