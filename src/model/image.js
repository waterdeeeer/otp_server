import mongoose from "mongoose";
const {Schema} = mongoose;

const imageSchema = Schema({
    product: {type: Schema.Types.ObjectId, ref: "Product"},
    brand: {type: Schema.Types.ObjectId, ref: "Brand"},
    corp: {type: Schema.Types.ObjectId, ref: "Coorperation"},
    src: String,
    color: String,
    size: String,
    is_rep: Boolean,
}, {collection: 'image'})

const Image = mongoose.model("Image", imageSchema);

export default Image;
