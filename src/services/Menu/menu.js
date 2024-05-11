import crud from "../../util/crud";
import data from "./menu.json";

export const getData = () => {
  return new Promise((resolve) => {
    let list = crud.get(data);
    resolve(list);
  });
};

export const getKeyBasedData = (list, key) => {
  return new Promise((resolve) => {
    let newList = [];
    let obj = {};
    list.map((item) => {
      let newKey = item[key];
      if (!obj[newKey]) {
        newList.push({ value: item[key], label: item[key] });
        obj[newKey] = 1;
      }
    });

    resolve(newList);
  });
};

export const addObj = (list, newObj) => {
  return new Promise((resolve) => {
    resolve(crud.add(list, newObj));
  });
};

export const updateObj = (data, obj, foodId) => {
  return new Promise((resolve) => {
    let newList = data.map((dish) => {
      if (dish.foodId === foodId) return obj;
      else return dish;
    });

    resolve(newList);
  });
};

export const remove = (list, id ,pk) => {
  return new Promise((resolve) => {
    console.log("rem",list,id)
    let newList = crud.remove(list, id,pk);
console.log("re",newList)
    resolve(newList);
  });
};
