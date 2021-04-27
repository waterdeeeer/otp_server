import mongoose from 'mongoose'
import {Ref} from '../model/enum.js'
const {Schema} = mongoose
const parentCategorySchema = Schema({
	name: {type: String, unique: true, required: true},
	category: [{type: Schema.Types.ObjectId, refPath: 'categoryModel'}],
	categoryModel: {
		type: String,
		required: true,
		enum: [Ref.category, Ref.brand, Ref.cooperation]

	}
}, {collection: 'parentCategory'})

const ParentCategory = mongoose.model("ParentCategory", parentCategorySchema)

export default ParentCategory
