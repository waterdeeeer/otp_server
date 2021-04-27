import mongoose from "mongoose";
import {Ref} from './enum.js'

const {Schema} = mongoose;
const productSchema = Schema({
    name: {type: String, unique: true, required: true},
    description: String,
    size: [String],
    color: [String],
    price: Number,
    image: [{type: Schema.Types.ObjectId, ref: Ref.image}],
    category: [{type: Schema.Types.ObjectId, ref: Ref.category}],
    brand: {type: Schema.Types.ObjectId, ref: Ref.brand},
    cooperation: {type: Schema.Types.ObjectId, ref: Ref.cooperation},
}, {collection: 'product'});

const Product = mongoose.model("Product", productSchema);

export default Product;
