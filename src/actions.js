// export function dispatchAction() {
//   return {
//     type: "PINCODE_SUCCESS",
//     payload: { hello: "code sandbox is great" }
//   };
// }

import { createActions } from "./automate";

const pincode = createActions("pincode");
console.log("actions", pincode);

export default {
  ...pincode
};
