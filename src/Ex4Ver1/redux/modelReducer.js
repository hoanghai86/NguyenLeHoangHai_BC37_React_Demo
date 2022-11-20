const inititalState = {
  models: {
    topclothes: "images/clothes/topcloth2.png",
    botclothes: "images/clothes/botcloth2.png",
    hairstyle: "images/hairstyle/hairstyle2.png",
    handbags: "images/handbags/handbag1.png",
    necklaces: "images/necklaces/necklace1.png",
    shoes: "images/shoes/shoes1.png",
    background: "images/background/background1.jpg",
  },
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case "CHANGE_MODEL": {
      //clone model trên store thành 1 obj mới là cloneModel, tiến hành chỉnh sửa obj mới này, sau đó gán lại vào models
      const cloneModels = { ...state.models };
      //thay đổi thuộc tính và giá trị của cloneModels
      cloneModels[action.payload.properties] = action.payload.value;
      //gán lại vào models
      return { state, models: cloneModels };
    }
    default:
      return state;
  }
};

export default reducer;
