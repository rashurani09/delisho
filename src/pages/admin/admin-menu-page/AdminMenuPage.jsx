import { Col, Typography } from "antd";
import { useState, useEffect } from "react";
import Filters from "./FilterMenuPage";
import MenuTable from "./MenuTable";
import { getData } from "../../../services/Menu/menu";
import { TranslateFunction } from "../../../util/internationalization";
import { useSearchParams } from "react-router-dom";

export default function AdminMenuPage() {
  const [updatedCount, setUpdatedCount] = useState(0);
  const [data, setData] = useState(null);
  const heading = TranslateFunction("label");
  const queryParams = {}; 
  const [selectedObj, setSelectedObj] = useState(queryParams);
  const [searchParams, setSearchParams] = useSearchParams();


  searchParams.forEach((value, key) => {
    queryParams[key] = value.split("|");
  });

  const setSearchUrl = (searchObject) => {
    const newSearchParams = new URLSearchParams();
    let isEmpty = true;

    for (const key in searchObject) { 
      if (searchObject[key].length > 0) {
        isEmpty = false;
        break;
      }
    }

    if (isEmpty) {
      setSearchParams("");
      setSelectedObj({});
      return;
    }

    Object.entries(searchObject).forEach(([key, value]) => {
      if (value.length > 0) {
        newSearchParams.append(key, value.join("|"));
      }
    });

    setSelectedObj(searchObject);
    setSearchParams(newSearchParams);
  };

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
    data && (
      <Col>
        <Typography.Title
          style={{
            textAlign: "center",
            padding: "2% 0",
            textShadow: "2px 2px 4px blue",
          }}
        >
          {heading("MenuTable")}
        </Typography.Title>

        <Col>
          <Filters
            selectedObj={selectedObj}
            setSelectedObj={setSearchUrl}
            updatedCount={updatedCount}
            data={data}
            setData={setData}
          />
          <MenuTable
            selectedObj={selectedObj}
            setUpdatedCount={setUpdatedCount}
            data={data}
            setData={setData}
          />
        </Col>
      </Col>
    )
  );
}
