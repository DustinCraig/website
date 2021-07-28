import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Text from '../../components/Text'
import Github from '../../components/Navbar/Socials/Github'
import LinkedIn from '../../components/Navbar/Socials/LinkedIn'
import SpecialText from '../../components/SpecialText'
import Image from '../../assets/images/Avatar.jpeg'

const About = () => (
    <Container style={{ marginTop: '4rem' }}>
        <Col xs={3}>
            <div
                style={{
                    width: '70%',
                    borderRight: '1px solid rgba(165, 159, 165, 0.4)',
                    paddingRight: 45,
                    height: '70%',
                    textAlign: 'justify',
                }}
            >
                <SpecialText text='Hello! ' />
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
        <Col xs={9}>
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
