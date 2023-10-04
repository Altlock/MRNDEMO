import React,{useState} from "react";
import api from '../../services/api';
import {Button , Form, FormGroup, Label, Input,Row , Col, Container} from 'reactstrap';
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();



    const handleSubmit = async evt =>{
        evt.preventDefault();
        console.log('result of the submit ',email,password)

        const response = await api.post('/login',{email,password})
        const user_id = response.data._id || false;
        if (user_id){
            localStorage.setItem('user',user_id)
            
           navigate("/dashboard");
            

        }
        else{
            const {message} = response.data
            console.log(message)
        }
    }
    return(
      <Container>
         <h2>Login:</h2>
          <p>Please <strong>Login</strong> into your account.</p>
        <Form onSubmit={handleSubmit}>
         
  <Row className="row-cols-lg-auto g-3 align-items-center">
    <Col>
      <Label
        className="visually-hidden"
        for="exampleEmail"
      >
        Email
      </Label>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="Your Email Address"
        type="email"
        onChange={evt=>setEmail(evt.target.value)}
      />
    </Col>
    <Col>
      <Label
        className="visually-hidden"
        for="examplePassword"
      >
        Password
      </Label>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Your Password!"
        type="password"
        onChange={evt=>setPassword(evt.target.value)}
      />
    </Col>
    <Col>
      <FormGroup check>
        <Input
          id="exampleCheckbox"
          name="checkbox"
          type="checkbox"
        />
        <Label
          check
          for="exampleCheckbox"
        >
          Remember Me
        </Label>
      </FormGroup>
    </Col>
    <Col>
      <Button>
        Submit
      </Button>
    </Col>
  </Row>
</Form>
</Container>
    )


}