'use client'

import { inter } from "./fonts/fonts";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import logo from "@/public/logo.jpg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} antialiased'}>
        
          <Navbar style={{backgroundColor: '#FFFCD9'}}>
            <Container>
              <Navbar.Brand href="#home">
                <Image
                  alt=""
                  src={logo}
                  width="100"
                  height="100"
                  className="d-inline-block align-center"
                />{' '}
                <strong>TRANG SAO KÊ MẶT TRẬN TỔ QUỐC VIỆT NAM</strong>
                
              </Navbar.Brand>
            </Container>
          </Navbar>
        {children}
      </body>
    </html>
  );
}
