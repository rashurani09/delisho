import React, { useEffect, useState } from "react";
import { Select, Space  ,Typography} from "antd";
import {  getKeyBasedData } from "../../../services/Menu/menu";
import { TranslateFunction } from "../../../util/internationalization";

const Filters = ({ selectedObj, setSelectedObj ,updatedCount ,data , setData}) => {
  const [cuisineOptions, setCuisineOptions] = useState([]);
  const [dishGroupOptions, setDishGroupOptions] = useState([]);
  const [count, setCount] = useState(0);
  const heading = TranslateFunction("labels");

  useEffect(() => {
   console.log( "updated")
    getKeyBasedData(data,"cuisine").then((res) => {
      setCuisineOptions(res);
    });

    getKeyBasedData(data,"dishGroup").then((res) => {
      setDishGroupOptions(res);
    });
  }, [data,count,updatedCount]);

  function handleSelectedItems(values) {
    const uniqueValues = values.filter((value) => !selectedObj.includes(value));
    setSelectedObj([...selectedObj, ...uniqueValues]);
    setCount((count) => count + 1);
  }

  function handleDeselect(value) {
    const updatedSelectedObj = selectedObj.filter((item) => item !== value);
    setSelectedObj(updatedSelectedObj);
  }

  return (
    <>
    {  data && (<Space
        direction="vertical"
        style={{
          width: "10%",
          marginTop : '2%',
          marginLeft: "30px",
          fontWeight: "bold",
          position : "fixed",
          backgroundColor : '#C0C0C0',
          height : "70vh",
          padding : '1%'
        }}
      >
        <Typography.Title level={5}>{heading("Filters")}</Typography.Title>
        <Select
          mode="multiple"
          placeholder={heading("Select Cuisines")}
          defaultValue={[]}
          onChange={handleSelectedItems}
          onDeselect={handleDeselect}
          style={{
            minWidth: "100%",
          }}
          options={cuisineOptions}
        />

        <Select
          mode="multiple"
          placeholder= {heading("Dish Group")}
          defaultValue={[]}
          onChange={handleSelectedItems}
          onDeselect={handleDeselect}
          style={{
            minWidth: "100%",
          }}
          options={dishGroupOptions}
        />
      </Space>)}
    </>
  );
};
export default Filters;
