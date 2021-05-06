import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Io0vNSEWOrkJ2MfcuQtasYmxjgpY0vpGWBIOp170RgDzuMRXiMHUcnkaQD0Xozu2oZnWWqfbPgq4DizUoUrEXwT00abG7GIj0";

    const onToken = token =>{
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
        label = 'Pay Now'
        name='Stop Shop'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;