import React, { useEffect, useState } from "react";
import { Select, Space  ,Typography} from "antd";
import {  getKeyBasedData } from "../../../services/Menu/menu";
import { TranslateFunction } from "../../../util/internationalization";

const Filters = ({ selectedObj, setSelectedObj ,updatedCount ,data , setData}) => {
  const [cuisineOptions, setCuisineOptions] = useState([]);
  const [dishGroupOptions, setDishGroupOptions] = useState([]);
  const heading = TranslateFunction("labels");

  useEffect(() => {
    getKeyBasedData(data,"cuisine").then((res) => {
      setCuisineOptions(res);
    });

    getKeyBasedData(data,"dishGroup").then((res) => {
      setDishGroupOptions(res);
    });
  }, [data , updatedCount]);

 

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
          value={selectedObj.cuisineOptions}
          onChange={(cuisineOptions)=>setSelectedObj({...selectedObj, cuisineOptions})}
          allowClear
          style={{
            minWidth: "100%",
          }}
          options={cuisineOptions}
        />

        <Select
          mode="multiple"
          placeholder= {heading("Dish Group")}
          value={selectedObj.dishGroupOptions}
          onChange={(dishGroupOptions)=>setSelectedObj({...selectedObj, dishGroupOptions})}
          allowClear
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
