import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import reducer from "./reducer";
// import { inc, dec, ran } from "./actions";
// import * as actions from "./actions";
// console.log("hello, redux");

// import Counter from "./components/counter";
import App from "./components/app";

const store = createStore(reducer);
const { dispatch } = store;

// const bindActionCreator =
//   (creator, dispatch) =>
//   (...args) => {
//     dispatch(creator(...args));
//   };

// const decDispatch = () => {
//   dispatch(dec());
// };
// const ranDispatch = () => {
//   const value = Math.floor(Math.random() * 100);
//   dispatch(ran(value));
// };

// document.getElementById("inc").addEventListener("click", () => {
//   dispatch(creator("INC"));
// });

// document.getElementById("ran").addEventListener("click", () => {
//   dispatch({ type: "RAN", value: Math.floor(Math.random() * 100) });
// });

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const ranDispatch = bindActionCreators(ran, dispatch);

// document.getElementById("inc").addEventListener("click", incDispatch);
// document.getElementById("dec").addEventListener("click", decDispatch);
// document.getElementById("ran").addEventListener("click", () => {
//   const value = Math.floor(Math.random() * 100);
//   ranDispatch(value);
// });

// const { incDispatch, decDispatch, ranDispatch } = bindActionCreators({
//   incDispatch: () => {
//     dispatch(inc);
//   },
//   decDispatch: dec,
//   ranDispatch: ran,
// });

// actions это объект {
// inc:inc,
// dec: dec,
// ran: ran
// }

// const { inc, dec, ran } = bindActionCreators(actions, dispatch);

//
// document.getElementById("inc").addEventListener("click", inc);
// document.getElementById("dec").addEventListener("click", dec);
// document.getElementById("ran").addEventListener("click", () => {
//   const value = Math.floor(Math.random() * 100);
//   ran(value);
// });

// const update = () => {
//   document.querySelector("#counter").innerHTML = store.getState();
// };

// const update = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById("root")
//   );
// };

// update();
// store.subscribe(update);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
