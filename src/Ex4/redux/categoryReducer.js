const inititalState = {
  categories: [
    { tabName: "tabTopClothes", showName: "Áo", type: "topclothes" },
    { tabName: "tabBotClothes", showName: "Quần", type: "botclothes" },
    { tabName: "tabShoes", showName: "Giày dép", type: "shoes" },
    { tabName: "tabHandBags", showName: "Túi xách", type: "handbags" },
    { tabName: "tabNecklaces", showName: "Dây chuyền", type: "necklaces" },
    // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
    { tabName: "tabHairStyle", showName: "Kiểu tóc", type: "hairstyle" },
    { tabName: "tabBackground", showName: "Nền", type: "background" },
  ],
};

//reducer là 1 function nhận vào state hiện tại và action từ component, nó quản lý state
//reducer sẽ chỉnh sửa state theo action, return về state mới
const reducer = (state = inititalState, action) => {
  return state;
};

export default reducer;
