import mongoose from "mongoose";
import Product from "../model/product.js";
import Image from "../model/image.js";
const URL =
  "mongodb+srv://public:123@onthepiknic.x4rrw.mongodb.net/onthepiknic?retryWrites=true&w=majority";

// connection object
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

// Error handling on disconnection
db.on("disconnected", () => {
  console.log("disconnected");
});

// once connected to DB
db.once("connected", function () {
  console.log("connected");

  /* DB connected */

  // empty collection
  Product.deleteMany({}, function (err) {
    if (err) return console.log(err);
  });
  Image.deleteMany({}, function (err) {
    if (err) return console.log(err);
  });

  // create an item
  const momaHoodie = new Product({
    name: "모마 X 챔피온 리버스위브 후디",
    size: ["S", "M", "L"],
    color: ["black", "grey"],
    price: 97000,
    description: "Champion X MoMA 의 후드 티셔츠 입니다.",
  });

  const momaHoodie1 = new Product({
    name: "모마 X 챔피온 리버스위브 후디",
    size: ["S", "M", "L"],
    color: ["black", "grey"],
    price: 97000,
    description: "Champion X MoMA 의 후드 티셔츠 입니다.",
  });

  // save the item
  momaHoodie.save(function (err, product) {
    momaHoodie1.save();

    // create an image
    const image1 = new Image({
      product: product._id,
      color: "black",
      is_rep: true,
      src:
        "https://onthepiknic.s3.ap-northeast-2.amazonaws.com/clothes/moma_hoodie.png",
      size: "L",
    });

    //save the image
    image1.save(function (err, image) {
      Product.updateOne(
        { _id: product._id },
        { $push: { images: image._id } },
        function (err) {
          if (err) console.log(err);
        }
      );

      Product.findById(product._id)
        .populate("images")
        .exec(function (err, product) {
          product.images.forEach((image) => {
            console.log(image);
          });
        });

      image.populate("product").execPopulate(function (err, image) {
        console.log(image.product);
      });
    });
  });
});
