const login = {
  username: "",
  mobile: "",
  captcha: ""
  // username: process.env.NODE_ENV == "development" ? "疏旺" : "",
  // mobile: process.env.NODE_ENV == "development" ? "18762750392" : "",
  // captcha: process.env.NODE_ENV == "development" ? "111111" : ""
};

const bindData = {
  username: "",
  mobile: "",
  captcha: "",
  employeeCardNumber: ""
};

const search = {
  name: "",
  name2: ""
};

const dishTypes = [
  {
    label: "熟食",
    key: "1"
  },
  {
    label: "净菜",
    key: "2"
  },
  {
    label: "农产品",
    key: "3"
  },
  {
    label: "生日蛋糕",
    key: "4"
  }
];

const carts = dishTypes.map(item => {
  item.meals = [];
  return item;
});

const supermarketCart = [];

const dishType = {
  label: "熟食",
  key: "1"
};
const show = {
  showCartDetail: false,
  showSupermarketCartDetail: false
};

export default {
  login,
  bindData,
  search,
  carts,
  dishType,
  dishTypes,
  show,
  supermarketCart
};
