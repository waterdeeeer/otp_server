import parentCategory from '../model/parent_category.js'
import api from '../api/index.js'
import {Populate, Ref} from '../model/enum.js'
export const add = async ({name, categories, categoryModel}) => {
	let category
	if (!categories) {
		let cat
		if (categoryModel === Ref.category) {
			cat = await api.category.find({}, {_id: 1})
		} else if (categoryModel === Ref.brand) {
			cat = await api.brand.find({}, {_id: 1})
		}
		else {
			cat = await api.cooperation.find({}, {_id: 1})
		}
		category = cat
	} else {
		category = await Promise.all(
			categories.map(async (item) => {
				let cat
				if (categoryModel === Ref.category) {
					cat = await api.category.findOne(item)
				} else if (categoryModel === Ref.brand) {
					cat = await api.brand.findOne(item)
				}
				else {
					cat = await api.cooperation.findOne(item)
				}
				return cat._id
			})
		)
	}
	new parentCategory({
		name: name, category: category
		, categoryModel: categoryModel
	}).save()
}

export const find = async (query) => {
	return await parentCategory.find(query).populate(Populate.category).exec()

}
