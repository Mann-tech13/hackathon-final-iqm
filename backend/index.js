const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes=require("./Routes/payment");

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

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}...`));
