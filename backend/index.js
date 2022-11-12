const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes=require("./Routes/payment");
const account_database = require('./database/account')

//initialize paymentapp
const app = express();

//env variables

dotenv.config();

//middlewares

app.use(express.json());
app.use(cors());

//routes
app.use("/api/payment/", paymentRoutes);

//paymentapp listening

const port = 5000;
app.listen(port, () => console.log(`listening on port ${port}...`));

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(account_database)

app.listen(8000, () => {
	console.log('BE started at port 5000')
})
