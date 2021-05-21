

import React, { useState } from "react";
import { Modal, Button ,Row , Col , Form  } from "react-bootstrap";
import { ImWhatsapp } from "react-icons/im";
import vv from '../img/vv.png'
import mm from '../img/mm.png'
import { Link } from "react-router-dom";
const Modell = ({phone}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url =`https://wa.me/+02`
  console.log(`${url}${phone}`);
  return (
    <>
      <ImWhatsapp
        style={{
          fontSize: "27px",
          marginTop: "11px",
          color: "#219221",
          cursor: "pointer",
          display: "inlineBlock",
          marginTop: "2px",
          marginRight: "9px",
        }}
        onClick={handleShow}
      />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body
          style={{ textAlign: "center", fontSize: "28px", padding: "26px" }}
        >
          سعر المعاينة 40 جنية
          <div>
            <h3
              style={{
                textAlign: "right",
                fontSize: "17px",
                marginTop: "20px",
              }}
            >
              طرق الدفع
            </h3>
            <Row>
              <Col>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">
                  <img src={vv} style={{ width: "47px" }} />
                </label>
              </Col>
              <Col>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">
                  {" "}
                  <img src={mm} style={{ width: "47px" }} />
                </label>
              </Col>
            </Row>
          </div>
          <div>
            <h3
              style={{
                textAlign: "right",
                fontSize: "17px",
                marginTop: "20px",
              }}
            >
              بطاقة الائتمان
            </h3>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="الاسم الاول"
                    style={{ marginBottom: "15px" }}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="الاسم الثانى"
                    style={{ marginBottom: "15px" }}
                  />
                </Col>
              </Row>
              <Row>
                {" "}
                <Col>
                  <Form.Control
                    placeholder="رقم بطاقة الائتمان"
                    style={{ marginBottom: "15px" }}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="الكود السرى"
                    style={{ marginBottom: "15px" }}
                  />
                </Col>
              </Row>

              <Row>
                {" "}
                <Col>
                  <Form.Control
                    as="select"
                    defaultValue="الشهر"
                    style={{ marginBottom: "15px" }}
                  >
                    <option>الشهر</option>
                    <option>...</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    defaultValue="السنة"
                    style={{ marginBottom: "15px" }}
                  >
                    <option>السنة</option>
                    <option>...</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form>
          </div>
          <div>
            <h3
              style={{
                textAlign: "right",
                fontSize: "17px",
                marginTop: "20px",
              }}
            >
              عنوان الدفع
            </h3>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="العنوان"
                    style={{ marginBottom: "15px" }}
                  />
                </Col>
              </Row>
              <Row> </Row>

              <Row>
                {" "}
                <Col>
                  <Form.Control
                    placeholder="postal/zip code"
                    style={{ marginBottom: "15px" }}
                  />
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    defaultValue="المدينة"
                    style={{ marginBottom: "15px" }}
                  >
                    <option>المدينة</option>
                    <option>...</option>
                  </Form.Control>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            رفض
          </Button>
          <Button variant="primary">
            <a href={`${url}${phone}`} target="_blank" style={{ color: "#FFF", textDecoration: "none" }}>اكمال</a>
            <a
              href={`${url}${phone}`}
              target="_blank"
              style={{ color: "#FFF", textDecoration: "none" }}
            >
              اكمال
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
};
export default Modell;