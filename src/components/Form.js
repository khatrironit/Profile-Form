import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import logo from '../logo.svg';
import '../App.css';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            skill: "",
            skills: [],
            interest: ""
        }
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addSkill = () => {
        if(this.state.skill){
            this.setState({
                skills: [...this.state.skills, this.state.skill],
                skill: "",
            })
        }
    }
    submit = () => {
        if(!this.state.name){
            alert("Please Enter Name");
            return;
        }
        if(!this.state.email){
            alert("Please Enter email");
            return;
        }
        if(!this.state.skills.length){
            alert("Please Enter Atleast 1 Skill");
            return;
        }

        //API Call Here.
        alert("data Submitted")

        this.setState({
            name: "",
            email: "",
            skill: "",
            skills: [],
            interest: ""
        })
    }
    render() {
        return (
            <Container className="form">
                <Row>
                    <Col xs="7">
                        <Container>
                            <Row>
                                <Col>
                                    <input
                                        name="name"
                                        placeholder="Enter Name"
                                        value={this.state.name}
                                        onChange={this.onInputChange}
                                    />
                                </Col>
                            </Row><br/>
                            <Row>
                                <Col>
                                    <input
                                        name="email"
                                        placeholder="Enter Email"
                                        value={this.state.email}
                                        onChange={this.onInputChange}
                                    />
                                </Col>
                            </Row><br/>
                            <Row>
                                <Col>
                                    <input
                                        name="skill"
                                        placeholder="Enter Skill"
                                        value={this.state.skill}
                                        onChange={this.onInputChange}
                                    />
                                </Col>
                                <Col xs="3" className="text-center">
                                    <Button onClick={this.addSkill}>Add Skill</Button>
                                </Col>
                            </Row><br/>
                            <Row>
                                <Col>
                                    {this.state.skills.map(skill => <span className="skillspan">{skill}</span>)}
                                </Col>
                            </Row><br/>
                            <Row>
                                <Col xs="auto">
                                    <input
                                        type="radio"
                                        value="frontend"
                                        name="interest"
                                        onClick={this.onInputChange}
                                    />
                                </Col>
                                <Col><label>Frontend</label></Col>
                            </Row>
                            <Row>
                                <Col xs="auto">
                                    <input
                                        type="radio"
                                        value="backend"
                                        name="interest"
                                        onClick={this.onInputChange}
                                    />
                                </Col>
                                <Col><label>Backend</label></Col>
                            </Row><br/>
                            <Row>
                                <Col className="text-center">
                                    <Button onClick={this.submit}>Submit</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className="text-center">
                        <img className="profile" src={logo} />
                    </Col>
                </Row>
            </Container>
        )
    }
}
