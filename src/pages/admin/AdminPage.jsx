import { Outlet, Link } from "react-router-dom";
import { Button, Layout, Menu, Typography } from "antd";
import { TranslateFunction } from "./../../util/internationalization";

const { Sider } = Layout;
export default function AdminPage() {
  console.log("adminnnnnnnn")
  const heading = TranslateFunction("labels");
  return (
    <Layout>
     
      <Sider trigger={null}  >
        <Link to= "/"><Button style={{marginTop :'6%' , marginLeft : '20%'}}>Back</Button></Link>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ paddingTop: "96px" ,position : 'fixed' , width : '200px' , height : '100%'}}
        >
          <Menu.Item key="1">
            <Link to="">{heading("Menu")}</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/admin/orders">{heading("Orders")}</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/admin/seatings">{heading("Seatings")}</Link>
          </Menu.Item>
       
        </Menu>
      </Sider>
      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  );
}
