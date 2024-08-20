// src/PaymentPage.js

import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './Payment.css'; // Import the CSS file
import Footer from './Footer';
import Nav from './Nav';

// Replace with your own Stripe publishable key
const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setIsProcessing(false);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      // Handle payment method ID submission to your server here
      setIsProcessing(false);
    }
  };

  return (
   <div>
   <Nav/>
    
    <form onSubmit={handleSubmit} className="payment-form">
      <h1 className="payment-title">Payment Page</h1>
      <CardElement className="card-element" />
      <button type="submit" className="submit-button" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay'}
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
   
    </div>
  );
};

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
    
  );

};

export default PaymentPage;
