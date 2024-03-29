const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");

////////////////////////////////////////////////////////////////////////////////////////////////
const app = express();
//برای اینکه بتوان داده جیسون به نود ارسال کرد چون بصورت پیشفرض امکانش نیست
app.use(express.json());
//اگر بخواهیم بجای فرمت جیسون با فرمت فرم بفرستیم اطلاعات رو از این باید استفاده کنیم
app.use(express.urlencoded({extended:false}))
//req: whatever client sends to server is request
//res: whatever comes back from server is response

app.get("/", (req, res) => {
  return res.send("hello");
});
//create
app.post("/api/products", async (req, res) => {
  // console.log(req.body);
  // res.send(req.body)
  try {
    const pro = await Product.create(req.body);
    return res.status(200).json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//getall
app.get("/api/products", async (req, res) => {
  try {
    const pros = await Product.find({});
    res.status(200).json(pros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//get by id
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pro = await Product.findById(id);
    return res.status(200).json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//update
app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pro = await Product.findByIdAndUpdate(id,req.body);
    if(!pro){
        return res.status(404),json({message:"No Product Found!"})
    }
    const updatedPro = await Product.findById(id);

    return res.status(200).json(updatedPro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//delete
app.delete("/api/product/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const pro = await Product.findByIdAndDelete(id);
      if(!pro){
          return res.status(404),json({message:"No Product Found!"})
      }
    
      return res.status(200).json({message:"Product deleted successfully!"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
//////
mongoose
  .connect(
    "mongodb+srv://ofoghmaryam14:1234567890@backenddb.r6zy0.mongodb.net/Node_APi?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => {
    //اول به دیتابیس وصل میشیم بعدش سرور ران میکنیم
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("server is on port 3000");
    });
  })
  .catch(() => console.log("failed connecting"));
