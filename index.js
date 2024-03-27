const express = require("express");
const mongoose = require("mongoose");

const app = express();

//req: whatever client sends to server is request
//res: whatever comes back from server is response

app.get("/", (req, res) => {
  return res.send("hello");
});

//////
mongoose
  .connect(
    "mongodb+srv://ofoghmaryam14:1234567890@backenddb.r6zy0.mongodb.net/?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => {
    //اول به دیتابیس وصل میشیم بعدش سرور ران میکنیم
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("server is on port 3000");
    });
  })
  .catch(() => console.log("failed connecting"));
