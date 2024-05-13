import { Button, Form } from 'antd';
import StepForm1 from './StepForm1';
import StepForm2 from './StepForm2';
import ConfirmationModal from '../TableConfirmationModalPage';
import { useRef, useState } from 'react';
import { Col, Typography, Flex } from 'antd';
import { Link } from 'react-router-dom';

const UI = {
  Form1: "form1",
  Form2: "form2",
  Modal: "modal"
};

export default function MultiStepRouter({ data }) {
  const [ui, setUi] = useState(UI.Form1);
  const [form] = Form.useForm();
  let payload = useRef({});
  
  const initFormData = () => {
    payload.current ? form.setFieldValue(payload.current) : form.resetFields();
  };

  return (
    <>
      <Col style={{ height: '150vh', backgroundColor: '#E0E0E0', backgroundImage: "url(https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?auto=compress&cs=tinysrgb&w=600)", backgroundRepeat : 'no-repeat' , backgroundSize : 'cover' }}>
        <Typography.Title style={{ textAlign: 'center', paddingTop: '1%' }}>Table Reservation</Typography.Title>
        <Link to="/"><Button style={{ marginLeft: '10%' }}>Back</Button></Link>

        <Flex style={{ textAlign: 'end', alignContent: 'center', height: '5%', justifyContent: 'center', marginTop: '1%' }}>
          {
            ui === UI.Form1 && (
              <StepForm1
                form={form}
                next={() => { setUi(UI.Form2) }}
                initFormData={initFormData}
                payload={payload}
                data={data}
              />
            )
          }

          {
            ui === UI.Form2 && (
              <StepForm2
                form={form}
                back={() => { setUi(UI.Form1) }}
                success={() => { setUi(UI.Modal) }}
                payload={payload}
              />
            )
          }
          {
            ui === UI.Modal && (
              <ConfirmationModal
                form={form}
                success={() => { setUi(UI.Modal) }}
                payload={payload}
              />
            )
          }
        </Flex>
      </Col>
    </>
  );
}
