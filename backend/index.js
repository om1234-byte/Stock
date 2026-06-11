
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const {HoldingModel} = require("./model/HoldingModel");
const {PositionModel} = require("./model/PositionModel");
const {OrderModel}  = require("./model/OrderModel");




const app = express();


app.use(bodyParser.json());
app.use(cookieParser());


app.use(
  cors({
    origin: ["http://localhost:3000", "https://kynestock.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const authRoute = require("./server/Routes/AuthRoute");
app.use("/", authRoute);

const PORT = process.env.PORT || 3002;
const url = process.env.MONGODB_URI;

console.log("Checking TOKEN_KEY on startup:", process.env.TOKEN_KEY);

app.get("/allHoldings", async ( req , res) => {
  let allHolding = await HoldingModel.find({});
  res.json(allHolding);
})


app.get("/allPositions", async ( req , res) => {
  let allPosition = await PositionModel.find({});
  res.json(allPosition);
})

app.get("/allOrders", async (req, res) => {
  try {
    console.log("all orders");

    const allOrder = await OrderModel.find({});

    

    res.json(allOrder);
  } catch (err) {
    console.error("Error in /allOrders:", err);
    res.status(500).json({
      error: err.message,
    });
  }
});

app.post("/newOrder", async(req, res) =>{

try {
    const newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

   await HoldingModel.findOneAndUpdate(
  { name: req.body.name },
  {
    $inc: {
      qty: req.body.mode === "BUY"
        ? req.body.qty
        : -req.body.qty
    }
  }
);

    res.send("Order added and holding updated");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }

});


 
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });


app.listen(PORT, async () => {
  console.log("App started");

});



