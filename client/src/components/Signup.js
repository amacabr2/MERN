import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import API from '../utils/API';

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: "",
            cpassword: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.send = this.send.bind(this);
    }

    send(event) {
        if(this.state.email.length === 0){
            return;
        }

        if(this.state.password.length === 0 || this.state.password !== this.state.cpassword){
            return;
        }

        let _send = {
            email: this.state.email,
            password: this.state.password
        }

        API.signup(_send).then(function(data){
            localStorage.setItem('token', data.data.token);
            window.location = "/dashboard"
        },function(error){
            console.log(error);
            return;
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return(
            <MDBContainer>
                <MDBRow center>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBInput name="email" label="Email" autoFocus type="email" value={this.state.email} onChange={this.handleChange} outline />
                                <MDBInput name="password" label="Mot de passe" type="password" value={this.state.password} onChange={this.handleChange} outline />
                                <MDBInput name="cpassword" label="Confirmer le mot de passe" type="password" value={this.state.cpassword} onChange={this.handleChange} outline />
                                <MDBBtn color="primary" outline  onClick={this.send}>Connexion</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}