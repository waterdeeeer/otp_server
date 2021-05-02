import mongoose from "mongoose";
import * as category from './category.js'
import * as product from './product.js'
import * as parentCategory from './parent_category.js'
import * as brand from './brand.js'
import * as cooperation from './cooperation.js'
import * as image from './product_image.js'
class Api {
	constructor(category, product, parentCategory, brand, cooperation,image) {
		this.category = category
		this.product = product
		this.parentCategory = parentCategory
		this.brand = brand
		this.cooperation = cooperation
		this.image = image
	}
}

const api = new Api(category, product, parentCategory, brand, cooperation,image)

export const initDB = () => {
	const mongooseOption = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	};
	mongoose.connect(
		"mongodb+srv://public:123@cluster0.jfwqf.mongodb.net/onthepiknic?retryWrites=true&w=majority",
		mongooseOption
	);
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function () {
		console.log('connected')
	});
}
export default api
