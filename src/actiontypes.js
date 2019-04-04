import { createActionTypes } from "./automate";

const pincode = createActionTypes("pincode");
console.log("types", pincode);

export default {
  ...pincode
};
