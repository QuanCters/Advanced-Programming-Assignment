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
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { search } from "@/api";

export default function Home() {
  const mutation = useMutation({
    mutationFn: (data: Record<string, string>) => search(data), // Định nghĩa rõ kiểu dữ liệu
    onSuccess: (response) => {
      console.log("Search successful:", response);
    },
    onError: (error) => {
      console.error("Search failed:", error);
    },
  });

  // Hàm xử lý khi submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const finalData = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    if (
      !finalData.detail_key &&
      (!finalData.lower_key || !finalData.upper_key)
    ) {
      console.log("Search content is required");
      return;
    }

    console.log("Submitting data:", finalData);
    mutation.mutate(finalData);
  };

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
        <Form onSubmit={handleSubmit}>
          <Row className="g-2">
            <Col xs={5}>
              <Form.Group className="mb-3" controlId="detail_key">
                <Form.Control
                  type="text"
                  name="detail_key"
                  placeholder="Nhập nội dung tìm kiếm"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="lower_key">
                <Form.Control
                  type="text"
                  name="lower_key"
                  placeholder="Nhập giá tiền tối thiểu"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="upper_key">
                <Form.Control
                  type="text"
                  name="upper_key"
                  placeholder="Nhập giá tiền tối đa"
                />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                <i className="bi bi-search"></i> Tìm kiếm
              </Button>
            </Col>
          </Row>
        </Form>
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
            {/* {mockTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.transNo}</td>
                <td>
                  {new Date(transaction.dateTime).toLocaleString("vi-VN")}
                </td>
                <td>120729</td>
                <td>{transaction.credit}</td>
                <td>{transaction.detail}</td>
              </tr>
            ))} */}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
