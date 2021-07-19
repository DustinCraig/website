import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Text from '../../components/Text'
import SpecialText from '../../components/SpecialText'
import Image from '../../assets/images/Avatar.jpeg'

const About = () => (
    <Container style={{ marginTop: '4rem' }}>
        <Col lg={{ span: 10 }}>
            <SpecialText text='Hello! ' />
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
            and Computer Graphics.
        `}
            />
        </Col>
        <Col>
            <img
                style={{
                    width: 400,
                    height: 520,
                    borderRadius: 100,
                }}
                src={Image}
            />
        </Col>
    </Container>
)

export default About
