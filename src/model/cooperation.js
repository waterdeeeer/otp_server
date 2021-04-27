import mongoose from 'mongoose'

const {Schema} = mongoose;
const coopSchema = Schema({
    name: {type: String, unique: true, required: true},
    logo_src: String,
    description: String
}, {collection: 'cooperation'})
const Coop = mongoose.model("Cooperation", coopSchema);

export default Coop;
