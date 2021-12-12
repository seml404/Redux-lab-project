import React from "react";
import { connect } from "react-redux";
// import { inc, dec, ran } from "../actions";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

const Counter = ({ counter, inc, dec, ran }) => {
  return (
    <div className="jumbotron">
      <h1 id="counter">{counter}</h1>
      <button className="btn btn-primary" onClick={inc}>
        inc
      </button>
      <button className="btn btn-primary" onClick={dec}>
        dec
      </button>
      <button className="btn btn-primary" onClick={ran}>
        ran
      </button>
    </div>
  );
};
const MapStateToProps = (state) => {
  return {
    counter: state,
  };
};
// const MapDispatchToProps = (dispatch) => {
//   return {
//     inc: () => dispatch(inc()),
//     dec: () => dispatch(dec()),
//     ran: () => {
//       const value = Math.floor(Math.random() * 100);
//       dispatch(ran(value));
//     },
//   };
// };

const MapDispatchToProps = (dispatch) => {
  // const { inc, dec, ran } = bindActionCreators(actions, dispatch);
  // return {
  //   inc,
  //   dec,
  //   // ran: () => {
  //   //   const value = Math.floor(Math.random() * 100);
  //   //   ran(value);
  //   ran,
  // };
  return bindActionCreators(actions, dispatch);
};

// export default connect(MapStateToProps, MapDispatchToProps)(Counter);
export default connect(MapStateToProps, actions)(Counter);
