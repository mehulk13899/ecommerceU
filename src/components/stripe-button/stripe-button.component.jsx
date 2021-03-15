import StripeCheckout from 'react-stripe-checkout'

import React from 'react'
window.Stripe.setPublishableKey('pk_test_51IVAlDLGNdEBZQwqbncygPBWTmq7rZqA8z8mTwI9AA1yF48eZs9PJniuSgDkUt26rxclhtuE9xG5inbL8Qofh3h200t7gmlGMa')
const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const keyForStripe = 'pk_test_51IVAlDLGNdEBZQwqbncygPBWTmq7rZqA8z8mTwI9AA1yF48eZs9PJniuSgDkUt26rxclhtuE9xG5inbL8Qofh3h200t7gmlGMa';
    const onToken = (token) => {
        console.log(token);
        alert('Successfully Completed')
    }
    return (
        <div>
            <StripeCheckout
                name="e-commerce Ltd" // the pop-in header title
                label="Pay Now"
                ComponentClass="div"
                panelLabel="Give Money" // prepended to the amount in the bottom pay button

                description="Big Data Stuff" // the pop-in header subtitle
                image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
                amount={priceForStripe} // cents
                stripeKey="pk_test_51IVAlDLGNdEBZQwqbncygPBWTmq7rZqA8z8mTwI9AA1yF48eZs9PJniuSgDkUt26rxclhtuE9xG5inbL8Qofh3h200t7gmlGMa"
                shippingAddress
                billingAddress
                allowRememberMe // "Remember Me" option (default true)
                description={`Your total is $${price}`}
                token={onToken} // submit callback
                triggerEvent="onTouchTap"
            >
            </StripeCheckout>
        </div>
    )
}

export default StripeButton;