import brand from '../model/brand.js'

export const find = async (query, option) => {
	return await brand.find(query, option)
}
export const findOne = async (name) => {
	return await brand.findOne({name: name})
}
export const add = async (data) => {
	await new brand(data).save()
}
