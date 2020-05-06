import React, {useState} from 'react';
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
`;

function Apply() {
    const [applicant, setApplicant] = useState("");
    const [address, setAddress] = useState("");
    const [loanAmount, setLoanAmount] = useState(0);

  const handleChange = ({target})=> {
    if(target.name === "username") setApplicant(target.value);
    else if(target.name === "address") setAddress(target.value);
    else if(target.name === "loanAmount") setLoanAmount(target.value);
    else console.error("error changing Applicant");
  }
  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log(applicant, loanAmount, address);

    axios
    .post('http://localhost:5000/users/add/',{applicant, loanAmount, address}) 
    .then(res => console.log(res.applicant, res.loanAmount, res.address))
    .catch(err => console.log("Error of type: " + err))
}
  
  




   return (
    <MainLayout title="Application page" color="background-color: -webkit-linear-gradient(70deg, #252c68 40%, white 40%);
    background: -o-linear-gradient(70deg, blue 40%, white 40%);
    background: -moz-linear-gradient(70deg, Blue 40%, white 40%);
    background: linear-gradient(70deg, blue 40%, white 40%);;">
<ApplicationForm>
    <FormDesign className="login-form" onSubmit={handleSubmit}>
      <h1>Application Form</h1>
      
      <Row form>
        <Col md={6}>
        <FormGroup>
      <Label for = "username"> Enter Name</Label>
                <InputBox type ="text" 
                name="username"
                placeholder="Applicant Name"
                value ={applicant} 
                onChange={handleChange} required
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
							onChange={handleChange}
                            value={address}
                            className="form-control"
						/>
          </FormGroup>
        
          <FormGroup>
          <Label for="loanAmount">Amount of Loan Request</Label>
				<Input
							type="text"
							name="loanAmount"
							placeholder="Loan Request"
							onChange={handleChange}
                            value={loanAmount}
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

export default Apply;