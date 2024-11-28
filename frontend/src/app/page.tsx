'use client'

import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (
    <div>
    <Container className="py-3 g-4">
      <Row className="gx-3 d-flex align-items-stretch">
        <Col >
          {/* <h4>Print Statement Report</h4>
          <p>Generate a Detailed Report of Transactions</p>
          <Button variant="primary">Print Report</Button> */}
          <Card className="h-100">
          <Card.Body>
              <Card.Title>Print Statement Report</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
              <Card.Text>
              
               Generate a Detailed Report of Transactions
              </Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
              <Button variant="primary" style={{height: 50}}><i className="bi bi-printer-fill"></i> Print Report</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Tổng số tiền</Card.Title>
              <Card.Text style={{fontSize: '2rem', fontWeight: "bold"}}>4.000.000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container>
      <Row className="g-2">
        <Col xs={5}>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Nhập nội dung tìm kiếm" />
                </Form.Group>
              </Form>
        </Col>
        <Col>
        <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Nhập giá tiền tối thiểu" />
                </Form.Group>
              </Form>
        </Col>
        <Col>
        <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Nhập giá tiền tối đa" />
                </Form.Group>
              </Form>
        </Col>
        <Col>
          <Button variant="primary"><i className="bi bi-search"></i> Tìm kiếm</Button>
        </Col>
      </Row>
    </Container>


    <Container>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Số CT</th>
          <th>Ngày giao dịch</th>
          <th>Số giao dịch</th>
          <th>Số tiền</th>
          <th>Nội dung</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0192874298374918</td>
          <td>15/12/2024</td>
          <td>120729</td>
          <td>5.000.000 VNĐ</td>
          <td>Cầu mong hạnh phúc ấm no cho người dân</td>
        </tr>
        <tr>
          <td>0492817392837561</td>
          <td>1/6/2024</td>
          <td>123928</td>
          <td>20.000 VNĐ</td>
          <td>Ước mọi người bình an</td>
        </tr>
        <tr>
          <td>0128347281739281</td>
          <td>11/10/2024</td>
          <td>128392</td>
          <td>1.000.000</td>
          <td>Quyên góp nho nhỏ chống bão lũ</td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </div>
    
  );
}
