const express = require("express")
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

const stripe = require("stripe")("sk_test_51KbeaZSHGT3iAvkW9g5LxR0eWSPhV6Ka9nsEmVI0hniNBgWSJMVNceLJpb0NcgEmbTs3aYVO4h7yF8WPVs4WLU8Q007PBoCDh2")

router.post('/placeorder', async (req, res) => {

    const { token, cartItems, currentUser, subtotal } = req.body

    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id

    })

    const payment = await stripe.charges.create({

        amount: subtotal * 100,
        currency: 'inr',
        customer: customer.id,
        receipt_email: token.email


    }, {
        idempotencyKey: uuidv4()
    })

    if (payment) {

        res.send('Payment Successfull')
    }
    else {
        res.send('Payment failed')
    }

})

module.exports = router