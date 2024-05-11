import { Button } from "antd";
import { changeLanguage } from "./../../util/internationalization";
import { languages } from "./../../util/internationalization";

const LanguageSelector = () => {
  let options = []
  return (
    <>
      {languages.map((lng) => {
        return (
          <Button key={lng.code} onClick={() => changeLanguage(lng.code)}>
            {lng.lang}
          </Button>
        );
      })}
    </>
  );
};

export default LanguageSelector;