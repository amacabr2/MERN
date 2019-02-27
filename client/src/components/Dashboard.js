import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';

import API from '../utils/API';

export class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.disconnect.bind(this);
    }

    disconnect = event => {
        API.logout();
        window.location = "/";
    }

    render() {
        return(
            <MDBContainer>
                <MDBRow center>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <h1>Dashboard</h1>
                                <MDBBtn color="deep-orange" onClick={this.disconnect}>Connexion</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}