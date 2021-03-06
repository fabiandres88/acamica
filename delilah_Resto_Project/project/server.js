//The file contains the server configuration and the required paths
//to handle each one of them in a different file
require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const users = require("./endpoints/users_paths");
const products = require("./endpoints/products_paths");
const orders = require("./endpoints/orders_paths");
const orderStatus = require("./endpoints/order_status_paths");
const paymentMethods = require("./endpoints/payment_methods_paths");
const orderDetail = require("./endpoints/order_details_paths");

const port = process.env.SERVER_PORT || 3000;

app.use(bodyParser.json());
users (app);
products (app);
orders (app);
orderStatus (app);
orderDetail (app);
paymentMethods (app);

app.listen(port, () =>{
    console.log(`Server is ready at port ${port}...`)
});