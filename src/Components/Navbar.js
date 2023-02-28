import React from 'react';
import { Link } from "react-router-dom";
import {Container,Col,Row,Button} from 'react-bootstrap';

export default function Navbar() {
  return (
    <nav>

        <Container className='pt-3'>

     <Row className='justify-content-between align-items-center'>
        <Col lg='6'>
        <ul className='d-flex list-unstyled gap-4 align-items-center'>
            <li>
                <Link className='text-black text-decoration-none' to='/'><img width={80} src="images/2nabsh.svg"/></Link>
            </li>
            <li>
                <Link className='text-black text-decoration-none' to='/buy-house'>خرید خانه</Link>
            </li>
            <li>
                <Link className='text-black text-decoration-none' to='/rent-house'>اجاره خانه</Link>
            </li>
            <li>
                <Link className='text-black text-decoration-none' to='/real-states'>مشاورین املاک</Link>
            </li>
        </ul>
        </Col>
        <Col lg='3'>
                <ul className='d-flex list-unstyled align-items-center gap-4'>
                    <li>
                        <Link className='text-decoration-none text-body' to='/profile'>ورود یا ثبت نام</Link>
                    </li>
                    <li>
                        <Button className='pt-2'><Link className='text-light text-decoration-none d-flex text-align-center gap-1' to='/'><span className='fw-bold fs-5'>+</span> ثبت آگهی رایگان</Link></Button>
                    </li>
                </ul>
        </Col>
     </Row>

        </Container>

    </nav>
  )
}
