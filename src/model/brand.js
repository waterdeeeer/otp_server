import mongoose from 'mongoose'

const {Schema} = mongoose;
const brandSchema = Schema({
    name: {type: String, unique: true, required: true},
    logo_src: String,
    description: String
}, {collection: 'brand'})
const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
