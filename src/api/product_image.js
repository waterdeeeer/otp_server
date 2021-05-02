import image from "../model/image.js";
import api from "./index.js";

export const add = async ({ product, color, is_rep, src, size }) => {
  const productToAdd = await api.product.findOne(product);
  const newImage = await new image({
    product: productToAdd,
    color,
    is_rep,
    src,
    size,
  }).save();

  await api.product.addImageToProduct(productToAdd._id, newImage._id);
};
