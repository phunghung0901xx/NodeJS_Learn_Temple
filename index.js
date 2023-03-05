const express = require("express")
const app = express();
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")

dotenv.config();


mongoose.connect(process.env.MONGO_URL
).then(() => console.log("DBConnection Successfull!")).catch((err) => (console.log(err)))

app.use(express.json())
app.get("/api/test", () => {
    console.log("test is successfull")
})
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT, () => {
    console.log("backend sever is running")
})