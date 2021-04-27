import cooperation from '../model/cooperation.js'

export const find = async (query, option) => {
	return await cooperation.find(query, option)
}
export const findOne = async (name) => {
	return await cooperation.findOne({name: name})
}
export const add = async (data) => {
	await new cooperation(data).save()
}
