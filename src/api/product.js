import product from '../model/product.js'
import {Populate} from '../model/enum.js'

export function find(query) {
	return product.find(query).populate(Populate.image).populate(Populate.cooperation).populate(Populate.brand).exec();
}
export function topFive() {
	return product.find({}).limit(5).populate(Populate.image).populate(Populate.cooperation).populate(Populate.brand).exec();
}

