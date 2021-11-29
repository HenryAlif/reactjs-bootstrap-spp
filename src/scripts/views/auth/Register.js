import { Form, Button, Col, Row, Card} from "react-bootstrap";
import image from '../../../assets/image-login-1.png'
import '../../../styles/Login.css'
import { Link, useNavigate } from "react-router-dom";
import React, {useState} from "react";

const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [classes, setClasses] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    

    const submit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,
            email,
            classes,
            password
        })
    });

    if (name && email && classes && password) {
        navigate("/")};
    }

    return(
        <div className="con shadow-lg">
            <Card>
                <Card.Body>
                <Row>
                    <Col>
                        <img src={image} alt="" className="image"/>
                    </Col>
                    
                    <Col className="form mt-3">
                        <h1>
                            Welcome to Educon
                        </h1>
                        <p className="mb-2">Educational Development Contribution Website!</p>
                        <Form className="d-grid" onSubmit={submit}>

                                <Form.Group className="mb-1" controlId="formBasic">
                                    <Form.Label>Fullname</Form.Label>
                                    <Form.Control type="text" placeholder="Insert your fullname" onChange={e=> setName(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="formBasic">
                                    <Form.Label>Classes</Form.Label>
                                    <Form.Control type="text" placeholder="Insert your class" onChange={e=> setClasses(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" onChange={e=> setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" onChange={e=> setPassword(e.target.value)} />
                                </Form.Group>

                                <Button size="lg" variant="success" type="submit">
                                    Submit
                                </Button>
                            <Link to="/" className="mt-2 text-black text-center">Have account ? Login Now!</Link>
                        </Form>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Register;