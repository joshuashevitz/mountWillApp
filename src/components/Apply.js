import React, { Component} from 'react';
import axios from "axios";
import styled from 'styled-components';
import MainLayout from './MainLayout';
import {Form, FormGroup, Label, Input, Row, Col, Button, Container, CustomInput} from 'reactstrap';


const InputBox=styled(Input)`
width: 500px;
`;
const FormDesign = styled(Form)`
height: 70vh;
width: 40vw;
background-color: slateblue;
border-Bottom: 2px solid slateblue;
box-shadow: 15px 25px #888888;
padding: 12px 15px;
@media screen and (max-height: 50rem) {
overflow: scroll;
}

`;
const ApplicationForm = styled(Container)`
height: 90vh;
justify-content: center;
align-items: center;
display:flex;
@media and screen (max-width: 50rem) {
    overflow: scroll;
}
`;

export default class Apply extends Component {
    constructor(props) {
        super(props);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeApplicant = this.onChangeApplicant.bind(this);
        this.onChangeLOanRequest = this.onChangeLOanRequest.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            loanrequest: 0,
            address: '',
            users:[]
        }
    }

    componentDidMount() {
        this.setState({
            users: [''],
            username: ''
        })
    }
        onChangeApplicant(e) {
            this.setState({
                username: e.target.value
            });
        }
        onChangeLOanRequest(e) {
            this.setState({
            loanrequest: e.target.value    
            });
        }
        onChangeAddress(e) {
            this.setState({
               address: e.target.value 
            });
        }
        onSubmit(e) {
            e.preventDefault();
            const applicant = {
                username:this.state.username,
                loanrequest:this.state.loanrequest,
                address:this.state.address
            }
            console.log(applicant);
            axios.post('http://localhost:5000/users/add', applicant)
            .then(res => console.log(res.data));
            
            this.setState({
                username: '',
                loanrequest: 0, 
                address: ''
            })
        }




render() {
   return (
    <MainLayout title="Application page" color="background-color: -webkit-linear-gradient(70deg, #252c68 40%, white 40%);
    background: -o-linear-gradient(70deg, blue 40%, white 40%);
    background: -moz-linear-gradient(70deg, Blue 40%, white 40%);
    background: linear-gradient(70deg, blue 40%, white 40%);;">
<ApplicationForm>
    <FormDesign className="login-form" onSubmit={this.onSubmit}>
      <h1>Application Form</h1>
      
      <Row form>
        <Col md={6}>
        <FormGroup>
      <Label for = "username"> Enter Name</Label>
                <InputBox type ="text" 
                name="username"
                placeholder="Applicant Name"
                value ={this.state.username} 
                onChange={this.onChangeApplicant} required
                className="form-control"/>
      </FormGroup>
      </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
          <Label for="address">Please Enter your Address</Label>
						<Input
							type="text"
							id="address"
							name="address"
							placeholder="123 main street"
							onChange={this.onChangeAddress}
                            value={this.state.address}
                            className="form-control"
						/>
          </FormGroup>
          <FormGroup>
          <Label for="loanAmount">Amount of Loan Request</Label>
				<Input
							type="text"
							name="loanAmount"
							placeholder="Loan Request"
							onChange={this.onChangeLOanRequest}
                            value={this.state.loanrequest}
                            className="form-control"
						/>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
          <Label for="exampleSelectMulti">Select Loan Type</Label>
        <Input
          type="select"
          name="selectMulti"
          id="exampleSelectMulti"
        >
          <option>Jumbo Ridge</option>
          <option>Bridge Loan</option>
        </Input>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">Job Title</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
         </Row>
         <Row>
    
          <FormGroup check>
          <Label for="exampleCheckbox">Radios</Label>
        <div>
          <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Do not own the property to flip" />
          <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Own the roperty To flip" />
        </div>
      </FormGroup>
         </Row>
      <Button>Apply</Button>
    </FormDesign>
    </ApplicationForm>
  );
}
    </MainLayout>
    );
    }
}
