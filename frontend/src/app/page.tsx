"use client";

import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "bootstrap-icons/font/bootstrap-icons.css";

type Transactions = {
  dateTime: string;
  transNo: string;
  credit: number;
  debit: number;
  detail: string;
};

const mockTransactions: Transactions[] = [
  {
    dateTime: "2024-11-28T08:00:00Z", // ISO 8601 format
    transNo: "TXN001",
    credit: 10000,
    debit: 0,
    detail: "Monthly salary deposited",
  },
  {
    dateTime: "2024-11-28T12:45:00Z",
    transNo: "TXN002",
    credit: 0,
    debit: 2500,
    detail: "Grocery shopping at SuperMart",
  },
  {
    dateTime: "2024-11-29T09:15:00Z",
    transNo: "TXN003",
    credit: 5000,
    debit: 0,
    detail: "Freelance project payment received",
  },
  {
    dateTime: "2024-11-29T18:30:00Z",
    transNo: "TXN004",
    credit: 0,
    debit: 1200,
    detail: "Electricity bill payment",
  },
  {
    dateTime: "2024-11-30T10:20:00Z",
    transNo: "TXN005",
    credit: 0,
    debit: 2000,
    detail: "Dining at Fancy Restaurant",
  },
  {
    dateTime: "2024-12-01T08:30:00Z",
    transNo: "TXN006",
    credit: 1500,
    debit: 0,
    detail: "Cashback from SuperMart purchase",
  },
];

export default function Home() {
  return (
    <div>
      <Container className="py-3 g-4">
        <Row className="gx-3 d-flex align-items-stretch">
          <Col>
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
                <Button variant="primary" style={{ height: 50 }}>
                  <i className="bi bi-printer-fill"></i> Print Report
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Tổng số tiền</Card.Title>
                <Card.Text style={{ fontSize: "2rem", fontWeight: "bold" }}>
                  4.000.000
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="g-2">
          <Col xs={5}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Nhập nội dung tìm kiếm"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Nhập giá tiền tối thiểu"
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Nhập giá tiền tối đa" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Button variant="primary">
              <i className="bi bi-search"></i> Tìm kiếm
            </Button>
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
            {mockTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.transNo}</td>
                <td>
                  {new Date(transaction.dateTime).toLocaleString("vi-VN")}
                </td>
                <td>120729</td>
                <td>{transaction.credit}</td>
                <td>{transaction.detail}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
