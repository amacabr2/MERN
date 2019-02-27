import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
import API from '../utils/API';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.send = this.send.bind(this);
    }

    send(event) {
        if(this.state.email.length === 0){
            return;
        }

        if(this.state.password.length === 0){
            return;
        }

        API.login(this.state.email, this.state.password).then(function(data){
            localStorage.setItem('token', data.data.token);
            window.location = "/dashboard"
        },function(error){
            console.log(error);
            return;
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return(
            <MDBContainer>
                <MDBRow center>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBInput controlId="email" label="Email" autoFocus type="email" value={this.state.email} onChange={this.handleChange} outline />
                                <MDBInput controlId="password" label="Mot de passe" type="password" value={this.state.password} onChange={this.handleChange} outline />
                                <MDBBtn color="primary" outline  onClick={this.send}>Connexion</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}