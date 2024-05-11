
const crud = {
  get : function(list){
    return list;
  },
  
  add: function (list, newObj) {
    let newList = [...list, newObj];
    return newList;
  },

  remove: function(list, id, pk){
    if(pk)
    return list.filter((item)=>{
        return item[pk] !== id;
    })
    else
    return list.filter((item)=>{
      return item !== id;
  })
},


  update: function (list, obj, pk, time) {
    let newList = list.map((item) => {
      if (item[pk] === obj[pk] && item.time === time) {
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
