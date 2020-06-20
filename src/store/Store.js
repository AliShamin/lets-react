import { createStore } from "redux";

// define reducer
function todoApp(state = 0, action) {
  switch (action.type) {
    case "Dark":
      return Object.assign({}, state, {
        theme: {
          "background-color": "rgb(40, 44, 52)",
          color: "white",
        },
      });
    case "Light":
      return Object.assign({}, state, {
        theme: { "background-color": "#dfe4ea" },
      });
    case "Default":
      return Object.assign({}, state, {
        theme: { "background-color": "#fad390" },
      });

    default:
      return state;
  }
}

const store = createStore(todoApp);
export default store;
