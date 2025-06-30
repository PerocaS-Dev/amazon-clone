const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//API

//APP Config

const app = express()

//Middleware
app.use(cors({origin:true}))
app.use(express.json())

//API Routes
app.get('/', (req, res) => res.status(200).send('Hello World!'))

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
    console.log("Pament request received", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"usd",
    });
    //If okay created
    res.status(201).send({clientSecret: paymentIntent.client_secret})

})

//Listen commands
exports.api = functions.https.onRequest(app)