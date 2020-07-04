import { createStore } from "redux";

// lets initialize the state

let initialState = {
  theme: {},
};

// our reducer function :reducer it takes the action and the change the state
function changeTheme(state = initialState, action) {
  switch (action.type) {
    case "ChangeTheme":
      return Object.assign({}, state, {
        theme: action.theme,
      });
      Default: return state;
  }
}

const store = createStore(changeTheme);
export default store;
