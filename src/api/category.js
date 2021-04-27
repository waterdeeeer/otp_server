import category from '../model/category.js'

export const add = (name) => {
	new category({name: name}).save()
}

export const findOne = (name) => {
	return category.findOne({name: name})
}

export const find = (query, option) => {
	return category.find(query, option)
}

