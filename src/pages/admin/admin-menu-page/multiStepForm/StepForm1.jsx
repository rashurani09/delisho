import { Form, Input, Button, Select, Radio, Flex } from "antd";
import { useState } from "react";
import { TranslateFunction } from "./../../../../util/internationalization";

export default function StepForm1({ form,back, next,payload,dishGroupOptions}) {
  const [showOtherInput, setShowOtherInput] = useState(false);
  const heading = TranslateFunction("labels");

  function showNextForm(values) {
    payload.current.data = { ...payload.current.data, ...values };
    next();
  }

  function handleSelectChange(value) {
    setShowOtherInput(value === "other");
  }

  return (
    <>
      <Form
        name="Food  Details"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={showNextForm}
        form={form}
        autoComplete="off"
      >
        <Form.Item
          label={heading("Dish Name")}
          name="dishName"
          rules={[
            {
              required: true,
              message: "Please input !",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={heading("Dish Group")}
          name="dishGroup"
          rules={[
            {
              required: true,
              message: "Please select a dish group!",
            },
          ]}
        >
          <Select onChange={handleSelectChange}>
            {dishGroupOptions.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
            <Select.Option value="other">other</Select.Option>
          </Select>
        </Form.Item>

        {showOtherInput && (
          <Form.Item
            label={heading("New Dish Group")}
            name="dishGroup"
            rules={[
              {
                required: true,
                message: "Please input the new dish group!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        )}

        <Form.Item
          label={heading("Meal Type")}
          name="mealType"
          rules={[
            {
              required: true,
              message: "Please input !",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="breakfast">{heading("Breakfast")}</Radio>
            <Radio value="lunch">{heading("lunch")}</Radio>
            <Radio value="dinner">{heading("dinner")}</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={heading("Is Gluten Free")}
          name="isGlutenFree"
          rules={[{ required: true, message: "Please input !" }]}
        >
          <Radio.Group>
            <Radio value={true}>{heading("true")}</Radio>
            <Radio value={false}>{heading("false")}</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={heading("is Veg")}
          name="isVeg"
          rules={[
            {
              required: true,
              message: "Please input !",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>{heading("true")}</Radio>
            <Radio value={false}>{heading("false")}</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Flex style={{ justifyContent: "space-between", marginTop: "5%" }}>
            <Button type="primary" style={{ marginLeft: "15%" }} onClick={back}>
              {heading("Cancel")}
            </Button>
            <Button
              type="primary"
              style={{ marginLeft: "80%" }}
              htmlType="submit"
            >
              {heading("Next")}
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </>
  );
}
