import product from "../model/product.js";
import api from "./index.js";
import { Populate } from "../model/enum.js";
export const add = async ({
  size,
  color,
  category,
  name,
  price,
  description,
  overall_rating,
  brand,
  cooperation,
}) => {
  let brandTemp, cooperationTemp;
  brand ? (brandTemp = await api.brand.findOne(brand)) : undefined;
  cooperation
    ? (cooperationTemp = await api.cooperation.findOne(cooperation))
    : undefined;
  new product({
    size,
    color,
    category,
    name,
    price,
    description,
    overall_rating,
    brand: brandTemp,
    cooperation: cooperationTemp,
    image: [],
  }).save();
};
export const addImageToProduct = async (productId, imageId) => {
  await product.findOneAndUpdate(
    { _id: productId },
    { $push: { image: imageId } }
  );
};
export const find = (query) => {
  return product
    .find(query)
    .populate(Populate.image)
    .populate(Populate.cooperation)
    .populate(Populate.brand)
    .exec();
};
export const topFive = () => {
  return product
    .find({})
    .limit(5)
    .populate(Populate.image)
    .populate(Populate.cooperation)
    .populate(Populate.brand)
    .exec();
};
export const findOne = async (name) => {
  return await product.findOne({ name: name });
};
