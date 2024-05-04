import data from './../services/menu.json'

const   crud = {
  get : function(){
    return data;
  },

  add: function (list, newObj) {
    let newList = [...list, newObj];
    return newList;
  },

  remove: function (list, id ) {
    return list.filter((item) => {
     
      return item.foodId!= id;
    });
  },

  update: function (list, obj, pk, time) {
    let newList = list.map((item) => {
      if (item[pk] === obj[pk] ) {
        return obj;
      } else {
        return item;
      }
    });

    return newList;
  },
};

Object.freeze(crud);

export default crud;
