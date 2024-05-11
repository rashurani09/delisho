import { Flex,Col, Typography } from "antd";
import { useState, useEffect } from "react";
import Filters from "./FilterMenuPage";
import MenuTable from "./MenuTable";
import { getData } from "../../../services/Menu/menu";
import { TranslateFunction } from "../../../util/internationalization";


export default function AdminMenuPage() {
  const [updatedCount, setUpdatedCount] = useState(0);
  const [selectedObj, setSelectedObj] = useState([]);
  const [data , setData] = useState(null);
  const heading = TranslateFunction("label");


  useEffect(() => {
    getData().then((res) => {
      const menu = res.menu.map((dish, index) => ({
        ...dish,
        key: index.toString(),
      }));
      setData(menu);
    });
  }, []);

  return (
    <Col >
      <Typography.Title style={{ textAlign: "center" , padding: '2% 0' ,textShadow: '2px 2px 4px blue'}}>
      {heading("MenuTable")}
      </Typography.Title>

      <Col >
        <Filters
          selectedObj={selectedObj}
          setSelectedObj={setSelectedObj}
          updatedCount={updatedCount}
          data = {data}
          setData = {setData}
        />
        <MenuTable
          selectedObj={selectedObj}
          setUpdatedCount={setUpdatedCount}
          data = {data}
          setData = {setData}
        />
      </Col>
    </Col>
  );
}
