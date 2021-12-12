// const createAction = (t, value = undefined) => {
//   return {
//     type: t,
//     value: value,
//   };
// };
// const ran = () => createAction("RAN", Math.floor(Math.random() * 100));
// const inc = () => createAction("INC");

const inc = () => ({ type: "INC" });
const dec = () => ({ type: "DEC" });

// const ran = (value) => ({ type: "RAN", value: value });
const ran = (value) => ({
  type: "RAN",
  value: Math.floor(Math.random() * 100),
});

export { ran, inc, dec };
