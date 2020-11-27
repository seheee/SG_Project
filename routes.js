const HOME = "/"
const LOGIN = "/login"
const JOIN = "/join"
const LOGOUT = "/logout"
const SEARCH = "/search"

const USERS = "/users"
const USER_DETAIL = "/users/:id"//profile 출력
const EDIT_PROFILE = "/users/:id/editProfile"
const CHANGE_PASSWORD = "/users/:id/changePassword"
const SHOPPING_BASKET = "/users/:id/shoppingBasket"
const DELIVERY_CHECK = "/users/:id/deliveryCheck"//주문한 상품 전체 다 보는 창
const DETAIL_DELIVER_CHECK = "/users/:id/:itemId"//주문한 상태 보는 창(상품 별로)\

const CLOTHES = "/clothes"
const CLOTHES_OUTER = "/clothes/outer"
const CLOTHES_TOP = "/clothes/top"
const CLOTHES_BOTTOM = "/clothes/bottom"
const CLOTHES_SHOES = "/clothes/shoes"
const CLOTHES_POPULAR = "/clothes/popular"
const CLOTHES_DETAIL = "/clothes/:id"

const ORDER = "/order"
const UPLOAD = "/upload"
const ADMIN = "/admin"
export const routes = {
    home :HOME,
    login : LOGIN,
    join : JOIN,
    logout:LOGOUT,
    search:SEARCH,
    users:USERS,
    userDetail:USER_DETAIL,
    editProfile:EDIT_PROFILE,
    changePassword:CHANGE_PASSWORD,
    shoppingBasket:SHOPPING_BASKET,
    deliveryCheck:DELIVERY_CHECK,
    detailDeliveryCheck:DETAIL_DELIVER_CHECK,
    clothes:CLOTHES,
    clothesOuter:CLOTHES_OUTER,
    clothesTop:CLOTHES_TOP,
    clothesBottom:CLOTHES_BOTTOM,
    clothesShoes:CLOTHES_SHOES,
    clothesPopular:CLOTHES_POPULAR,
    clothesDetail:CLOTHES_DETAIL,
    order:ORDER,
    upload:UPLOAD,
    admin:ADMIN
    
}
