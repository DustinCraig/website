import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Text from '../../components/Text'
import Github from '../../components/Navbar/Socials/Github'
import LinkedIn from '../../components/Navbar/Socials/LinkedIn'
import SpecialText from '../../components/SpecialText'
import Image from '../../assets/images/Avatar.jpeg'
import ProjectCard from '../../components/Card'

const About = () => (
    <>
        <Container style={{ marginTop: '4rem', height: '40%', width: '100%' }}>
            <Col xs={6}>
                <div
                    style={{
                        width: '100%',
                        borderRight: '1px solid rgba(165, 159, 165, 0.4)',
                        paddingRight: 45,
                        height: '90%',
                        textAlign: 'justify',
                    }}
                >
                    <SpecialText text="Hello! " />
                    <br />
                    <Text
                        text={`
                            My name is Dustin Craig, a Software Engineer seeking to solve
                            unique, challenging problems. It is my passion to develop creative,
                            long-lasting products.`}
                    />
                    <br /> <br />
                    <Text
                        text={`
                            I am interested in all things relating to Software/Web Development
                            and Computer Graphics. I found my passion for programming at 13 years old and haven't stopped since!
                            
                            `}
                    />
                    <div
                        style={{
                            textAlign: 'center',
                            width: '100%',
                            marginTop: 70,
                        }}
                    >
                        <Github />
                        <LinkedIn />
                    </div>
                </div>
            </Col>
            <Col xs={6}>
                <img
                    style={{
                        //   width: 400,
                        height: 520,
                        borderRadius: 100,
                    }}
                    src={Image}
                />
            </Col>
        </Container>
        <Container fluid>
            <Row style={{ marginBottom: 15 }}>
                <Col xs={12}>
                    <div style={{ textAlign: 'center' }}>
                        <SpecialText text="Portfolio" />
                    </div>
                </Col>
            </Row>
            <Row style={{ marginBottom: 30 }}>
                <Col xs={{ span: 3 }}>
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Header>Paper in the Wind</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <a
                                    href="https://dustincraig.github.io/PaperInTheWind/"
                                    target="__blank"
                                >
                                    Demo
                                </a>
                            </Card.Title>
                            <Card.Text>
                                PITW is a work-in-progress Unity game. Play as a piece of paper in
                                it's efforts to try and escape the office before it gets printed on.
                                The demo is a WebGL export.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={{ span: 3, offset: 1 }}>
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Header>thegammonsreview</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <a href="http://www.thegammonsreview.com/" target="__blank">
                                    Demo
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Website created with ASP.NET Core I made for a friend to post his
                                movie reviews
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={{ span: 3, offset: 1 }}>
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Header>Cabin Walkthrough</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <a
                                    href="http://web.eecs.utk.edu/~dcraig14/2bN9gJ0sx3U/finalp.html"
                                    target="__blank"
                                >
                                    Demo
                                </a>
                            </Card.Title>
                            <Card.Text>
                                First person WebGL project featuring fog, reflective water (complete
                                with dU/dV simulated waves), skybox, diffuse/ambient lighting with
                                multiple light sources and bump maps.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginBottom: 30 }}>
                <Col xs={{ span: 3 }}>
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Header>Gouraud Shading Example</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <a
                                    href="http://web.eecs.utk.edu/~dcraig14/2bN9gJ0sx3U/lab2/Step3.html"
                                    target="__blank"
                                >
                                    Demo
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Implementation of Gouraud Shading on the Utah teapot
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={{ span: 3, offset: 1 }}>
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Header>Phong Shading Example</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <a
                                    href="http://web.eecs.utk.edu/~dcraig14/2bN9gJ0sx3U/lab2/Step4.html"
                                    target="__blank"
                                >
                                    Demo
                                </a>
                            </Card.Title>
                            <Card.Text>
                                Implementation of Phong Shading on the Utah teapot
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={{ span: 3, offset: 1 }}>
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Header>Normal Map Example</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <a
                                    href="http://web.eecs.utk.edu/~dcraig14/2bN9gJ0sx3U/lab3/Midterm.html"
                                    target="__blank"
                                >
                                    Demo
                                </a>
                            </Card.Title>
                            <Card.Text>Implementation of object normal mapping.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginBottom: 30 }}>
                <Col xs={{ span: 3 }}>
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Header>Neyland Stadium Reflection Mapping</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <a
                                    href="https://web.eecs.utk.edu/~dcraig14/2bN9gJ0sx3U/lab3/Step4.html"
                                    target="__blank"
                                >
                                    Demo
                                </a>
                            </Card.Title>
                            <Card.Text>Beautiful Neyland Stadium mapped onto a sphere</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
)

export default About
