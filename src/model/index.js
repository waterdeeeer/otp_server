import Product from "./product.js";
import Image from "./image.js";
import Brand from "./brand.js";
import Coop from "./cooperation.js";
import Category from './category.js'
import ParentCategory from './parent_category.js'


const Models = {
    product: Product,
    image: Image,
    cooperation: Coop,
    brand: Brand,
    category: Category,
    parentCategory: ParentCategory
};
export default Models;
