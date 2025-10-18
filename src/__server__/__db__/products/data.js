import { uniq } from "lodash";
import products from "data/product-database";
import bazaarReactDatabase from "data/bazaar-react-database";
import { products as market1 } from "../market-1/data";
import { relatedProducts, frequentlyBoughtData } from "../related-products/data";
const dbProducts = [...bazaarReactDatabase, ...products];


// all used products in the bazaar template - Market 1 only
const productList = [...dbProducts, ...market1, ...relatedProducts, ...frequentlyBoughtData];


// get unique products from product list
export const uniqueProducts = uniq(productList.map(item => item.slug)).map(item => productList.find(it => it.slug === item));


// get the all slugs
export const slugs = uniqueProducts.map(item => ({
  params: {
    slug: item?.slug
  }
}));


// get product names for search
export const search = uniqueProducts.slice(0, 6).map(item => item?.title);
export const reviews = [{
  name: "Jannie Schumm",
  imgUrl: "/assets/images/faces/7.png",
  rating: 4.7,
  date: "2021-02-14",
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account."
}, {
  name: "Joe Kenan",
  imgUrl: "/assets/images/faces/6.png",
  rating: 4.7,
  date: "2019-08-10",
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account."
}, {
  name: "Jenifer Tulio",
  imgUrl: "/assets/images/faces/8.png",
  rating: 4.7,
  date: "2021-02-05",
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account."
}];