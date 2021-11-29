import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Image from "../../../assets/no-profile.png"

const Profile = () => {
    return(
        
        <div className="Profile">
        <Header />
            <div className="container mt-5">
                <Row>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={Image} className="align-self-center mt-2" style={{ width: '100px' }} />
                            <Card.Body>
                                <Card.Title>NAMA DISINI</Card.Title>
                                <Card.Text> INPUT KELAS </Card.Text>
                                <Card.Title>EDC CODE</Card.Title>

                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        </div>
    )
}

export default Profile;