import mongoose from "mongoose";
const { Schema } = mongoose;
const productSchema = Schema({
  name: { type: String, unique: true, required: true },
  description: String,
  size: [String],
  color: [String],
  price: Number,
  images: [{ type: Schema.Types.ObjectId, ref: "Image" }],
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  brand: { type: Schema.Types.ObjectId, ref: "Brand" },
  corp: { type: Schema.Types.ObjectId, ref: "Coorperation" },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
