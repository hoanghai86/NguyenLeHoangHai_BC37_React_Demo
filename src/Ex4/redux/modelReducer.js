//khai báo mặc định quần áo người mẫu
const inititalState = {
  model: {
    topclothes: "images/clothes/topcloth2.png",
    botclothes: "images/clothes/botcloth1.png",
    hairstyle: "images/hairstyle/hairstyle3.png",
    handbags: "images/handbags/handbag1.png",
    necklaces: "images/necklaces/necklace1.png",
    shoes: "images/shoes/shoes1.png",
    background: "images/background/background1.jpg",
  },
};

export const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case "CHANGE_MODEL": {
      //spread operator
      const newModel = { ...state.model };
      newModel[action.payload.type] = action.payload.value;

      return { ...state, model: newModel };
    }

    default:
      return state;
  }
};

export default reducer;
