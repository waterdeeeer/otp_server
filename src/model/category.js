import mongoose from 'mongoose'

const {Schema} = mongoose;
const categorySchema = Schema({
    name: {type: String, unique: true, required: true},
}, {collection: 'category'})
const Category = mongoose.model("Category", categorySchema);

export default Category;
