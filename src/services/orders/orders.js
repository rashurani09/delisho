import jData from "./orders.json";
let data = jData;

export const getData = () => {
  return new Promise((resolve) => {
    resolve(data);
  });
};



