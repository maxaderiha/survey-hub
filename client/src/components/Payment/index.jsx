import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {
  Button,
  Classes
} from '@blueprintjs/core';

import { Payment } from 'common/constants';

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    console.log(token);
    // fetch('/save-stripe-token', {
    //   method: 'POST',
    //   body: JSON.stringify(token),
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  }

  render() {
    return (
      <StripeCheckout
        amount={Payment.AMOUNT}
        currency={Payment.CURRENCY}
        name={'SurveyHub'}
        description={'5$ for 5 survey credits'}
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <Button
          className={Classes.MINIMAL}
          text={'Add credits'}
        />
      </StripeCheckout>
    );
  }
}
