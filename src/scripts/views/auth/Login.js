import { Link, useNavigate } from "react-router-dom"
import image from '../../../assets/image-login-1.png'
import React, { useState} from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const submit = async (e) => {
        e.preventDefault();
    
        await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });
        
        if ( email && password) {
            navigate("/home")};
    
        // (true);
    }

    return(
        <div className="con shadow-lg">
        <Card>
            <Card.Body>
            <Row>
            <Col>
                <img src={image} alt="" className="image"/>
            </Col>
            <Col className="form mt-5">
                <h1>
                    Welcome to Educon
                </h1>
                <p className="mb-5">Educational Development Contribution Website!</p>
                <Form className="d-grid" onSubmit={submit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e=> setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-5" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} />
                        </Form.Group>
                        <Button size="lg" variant="success" type="submit">
                            Submit
                        </Button>
                <Link to="/register" className="mt-2 text-black text-center">Don't have account ? Register Now!</Link>
                </Form>
            </Col>
            </Row>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Login;