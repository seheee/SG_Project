import { loggedUser } from "./localMiddleware";

const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
const LOGOUT = "/logout";
const SEARCH = "/search";

const USERS = "/users";
const USER_DETAIL = "/users/:id"; //profile 출력
const EDIT_PROFILE = "/users/:id/editProfile";
const CHANGE_PASSWORD = "/users/:id/changePassword";
const SHOPPING_BASKET = "/users/:id/shoppingBasket";
const DELIVERY_CHECK = "/users/:id/deliveryCheck"; //주문한 상품 전체 다 보는 창
const DETAIL_DELIVER_CHECK = "/users/:id/:itemId"; //주문한 상태 보는 창(상품 별로)\

const CLOTHES = "/clothes";
const CLOTHES_OUTER = "/clothes/outer/:cur";
const CLOTHES_TOP = "/clothes/top/:cur";
const CLOTHES_BOTTOM = "/clothes/bottom/:cur";
const CLOTHES_SHOES = "/clothes/shoes/:cur";
const CLOTHES_POPULAR = "/clothes/popular";
const CLOTHES_SALE = "/clothes/sale";
const CLOTHES_DETAIL = "/clothes/detail/:id";

const ORDER = "/order/:id";
const ORDER_COMPLETE = "/order/:id/orderComplete";
const UPLOAD = "/upload";
const ADMIN = "/admin";
export const routes = {
  home: HOME,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  order: (id) =>{
    if(id){
      return `/order/${id}`;
    }else{
      return ORDER
    }
  },
  orderComplete: (id) => {
    if (id) {
      return `/order/${id}/orderComplete`;
    } else {
      return ORDER_COMPLETE;
    }
  },
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  shoppingBasket: (id) => {
    if (id) {
      return `/users/${id}/shoppingBasket`;
    } else {
      return SHOPPING_BASKET;
    }
  },
  deliveryCheck: (id) => {
    if (id) {
      return `/users/${id}/deliveryCheck`;
    } else {
      return DELIVERY_CHECK;
    }
  },
  detailDeliveryCheck: DETAIL_DELIVER_CHECK,
  clothes: CLOTHES,
  clothesOuter: CLOTHES_OUTER,
  clothesTop: CLOTHES_TOP,
  clothesBottom: CLOTHES_BOTTOM,
  clothesShoes: CLOTHES_SHOES,
  clothesPopular: CLOTHES_POPULAR,
  clothesSale: CLOTHES_SALE,
  clothesDetail: (id) => {
    if (id) {
      return `/clothes/detail/${id}`;
    } else {
      return CLOTHES_DETAIL;
    }
  },
  insertCart: (id) => {
    if (id) {
      return `/clothes/detail/${id}/insertCart`;
    } else {
      return `/clothes/detail/:id/insertCart`;
    }
  },
  upload: UPLOAD,
  admin: ADMIN,
};
